import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { googleCalendarSync, MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'sync-events-google-calendar',
  styleUrl: './sync-events-google-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync-events-google-calendar.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    public notify: Notifications,
    public zone: NgZone,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  isEditable = false;
  isLoggedIn = false;
  isLoading = false;
  calendarIds: string[] = [];
  myCalendars: any = [];
  startDate!: Date;
  endDate!: Date;
  debounce: any;
  calendarData: any = {};
  primaryCalendarId!: string;

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'week' },
    },
    extendDefaultEvent: () => {
      return {
        color: this.calendarData[this.primaryCalendarId].color,
      };
    },
    onPageLoading: (args: any) => {
      this.startDate = args.viewStart;
      this.endDate = args.viewEnd;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (googleCalendarSync.isSignedIn()) {
          this.isLoading = true;
          googleCalendarSync
            .getEvents(this.calendarIds, this.startDate, this.endDate)
            .then((resp: any) => {
              this.zone.run(() => {
                this.myEvents = resp;
                this.isLoading = false;
              });
            })
            .catch((error: any) => {
              this.onError(error);
            });
        }
      }, 200);
    },
    onEventCreate: (args: any) => {
      if (googleCalendarSync.isSignedIn()) {
        const event = args.event;
        googleCalendarSync
          .addEvent(this.primaryCalendarId, event)
          .then((resp: any) => {
            this.zone.run(() => {
              resp.color = event.color;
              this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), resp];
            });
            this.notify.toast({
              message: 'Event created in "' + this.calendarData[this.primaryCalendarId].name + '" calendar',
            });
          })
          .catch((error: any) => {
            this.zone.run(() => {
              this.myEvents = this.myEvents.filter((item) => item.id !== event.id);
              this.onError(error);
            });
          });
      }
    },
    onEventUpdate: (args) => {
      if (googleCalendarSync.isSignedIn()) {
        this.notify
          .confirm({
            title: 'Are you sure you want to update this event?',
            message: 'This action will affect your Google Calendar event.',
            okText: 'Update',
          })
          .then((result) => {
            const event = args.event;
            if (result) {
              const calendarId = event.googleCalendarId;
              googleCalendarSync
                .updateEvent(calendarId, event)
                .then(() => {
                  this.notify.toast({
                    message: 'Event updated on "' + this.calendarData[calendarId].name + '" calendar',
                  });
                })
                .catch(() => {
                  this.zone.run(() => {
                    this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), args.oldEvent];
                  });
                });
            } else {
              this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), args.oldEvent];
            }
          });
      }
    },
    onEventDelete: (args) => {
      if (googleCalendarSync.isSignedIn()) {
        this.notify
          .confirm({
            title: 'Are you sure you want to delete this event?',
            message: 'This action will remove the event from your Google Calendar as well.',
            okText: 'Delete',
          })
          .then((result) => {
            if (result) {
              const event = args.event;
              const calendarId = event.googleCalendarId;
              googleCalendarSync
                .deleteEvent(calendarId, event)
                .then(() => {
                  this.zone.run(() => {
                    this.myEvents = this.myEvents.filter((item) => item.id !== event.id);
                  });
                  this.notify.toast({
                    message: 'Event deleted from "' + this.calendarData[calendarId].name + '" calendar',
                  });
                })
                .catch((error: any) => {
                  this.onError(error);
                });
            }
          });
      }
      return false;
    },
  };

  ngOnInit(): void {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: () => {
        this.isLoggedIn = true;
        googleCalendarSync
          .getCalendars()
          .then((calendars: any) => {
            calendars.sort((a: { primary: boolean }) => (a.primary ? -1 : 1));
            this.myCalendars = calendars;
            this.primaryCalendarId = calendars[0].id;
            this.calendarIds = [...this.calendarIds, this.primaryCalendarId];

            for (const c of calendars) {
              this.calendarData[c.id] = { name: c.summary, color: c.backgroundColor, checked: false };
            }

            this.isLoading = true;

            googleCalendarSync
              .getEvents([this.primaryCalendarId], this.startDate, this.endDate)
              .then((resp: any) => {
                this.zone.run(() => {
                  this.myEvents = resp;
                  this.calendarData[this.primaryCalendarId].checked = true;
                  this.isLoading = false;
                });
              })
              .catch((error: any) => {
                this.onError(error);
              });
          })
          .catch((error: any) => {
            this.onError(error);
          });
      },
      onSignedOut: () => {
        this.isLoggedIn = false;
        this.myCalendars = [];
        this.calendarIds = [];
        this.calendarData = {};
        this.myEvents = [];
      },
    });
  }

  onError(resp: any): void {
    this.notify.toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }

  changeEditable(ev: any): void {
    this.isEditable = ev.target.checked;
  }

  toggleCalendars(ev: any, calendarId: string): void {
    const checked = ev.target.checked;
    this.calendarData[calendarId].checked = checked;

    if (checked) {
      this.calendarIds = [...this.calendarIds, calendarId];
      this.isLoading = true;
      googleCalendarSync
        .getEvents([calendarId], this.startDate, this.endDate)
        .then((resp: any) => {
          this.zone.run(() => {
            this.myEvents = [...this.myEvents, ...resp];
            this.isLoading = false;
          });
        })
        .catch((error: any) => {
          this.onError(error);
        });
    } else {
      this.calendarIds = this.calendarIds.filter((id) => id !== calendarId);
      this.myEvents = this.myEvents.filter((event) => event.googleCalendarId !== calendarId);
    }
  }

  logOut(): void {
    googleCalendarSync.signOut().catch((error: any) => {
      this.onError(error);
    });
  }

  logIn(): void {
    if (!googleCalendarSync.isSignedIn()) {
      googleCalendarSync.signIn().catch((error: any) => {
        this.onError(error);
      });
    }
  }
}
