import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { outlookCalendarSync } from '@mobiscroll/calendar-integration';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-sync-events-outlook-calendar',
  styleUrl: './sync-events-outlook-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync-events-outlook-calendar.html',
  providers: [Notifications],
  standalone: false,
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
      scheduler: { type: 'week' },
    },
    extendDefaultEvent: () => ({
      color: this.calendarData[this.primaryCalendarId].color,
    }),
    onPageLoading: (args: any) => {
      this.startDate = args.viewStart;
      this.endDate = args.viewEnd;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (outlookCalendarSync.isSignedIn()) {
          this.isLoading = true;
          outlookCalendarSync
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
      if (outlookCalendarSync.isSignedIn()) {
        const event = args.event;
        outlookCalendarSync
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
      if (outlookCalendarSync.isSignedIn()) {
        this.notify
          .confirm({
            title: 'Are you sure you want to update this event?',
            message: 'This action will affect your outlook Calendar event.',
            okText: 'Update',
          })
          .then((result) => {
            const event = args.event;
            if (result) {
              const calendarId = event['outlookCalendarId'];
              outlookCalendarSync
                .updateEvent(calendarId, event)
                .then(() => {
                  this.notify.toast({
                    message: 'Event updated on "' + this.calendarData[calendarId].name + '" calendar',
                  });
                })
                .catch(() => {
                  this.zone.run(() => {
                    this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), args.oldEvent!];
                  });
                });
            } else {
              this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), args.oldEvent!];
            }
          });
      }
    },
    onEventDelete: (args) => {
      if (outlookCalendarSync.isSignedIn()) {
        this.notify
          .confirm({
            title: 'Are you sure you want to delete this event?',
            message: 'This action will remove the event from your outlook Calendar as well.',
            okText: 'Delete',
          })
          .then((result) => {
            if (result) {
              const event = args.event;
              const calendarId = event['outlookCalendarId'];
              outlookCalendarSync
                .deleteEvent(calendarId + 'a', event)
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
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: () => {
        this.isLoggedIn = true;
        outlookCalendarSync
          .getCalendars()
          .then((calendars: any) => {
            calendars.sort((a: { isDefaultCalendar: boolean }) => (a.isDefaultCalendar ? -1 : 1));
            this.myCalendars = calendars;
            this.primaryCalendarId = calendars[0].id;
            this.calendarIds = [...this.calendarIds, this.primaryCalendarId];

            for (const c of calendars) {
              this.calendarData[c.id] = { name: c.name, color: c.hexColor, checked: false };
            }

            this.isLoading = true;

            outlookCalendarSync
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
      message: resp.message,
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
      outlookCalendarSync
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
      this.myEvents = this.myEvents.filter((event) => event['outlookCalendarId'] !== calendarId);
    }
  }

  logOut(): void {
    outlookCalendarSync.signOut().catch((error: any) => {
      this.onError(error);
    });
  }

  logIn(): void {
    if (!outlookCalendarSync.isSignedIn()) {
      outlookCalendarSync.signIn().catch((error: any) => {
        this.onError(error);
      });
    }
  }
}
