import { Component, NgZone, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  MbscResource,
  Notifications,
  setOptions,
} from '@mobiscroll/angular';
import { googleCalendarSync } from '@mobiscroll/calendar-integration';

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

  @ViewChild('popup', { static: false }) popup!: MbscPopup;

  @ViewChild('calButton') anchorElm!: ElementRef;

  myEvents: MbscCalendarEvent[] = [];

  isEditable = false;
  isLoggedIn = false;
  isLoading = false;
  calendarIds: string[] = [];
  myCalendars: any = [];
  readonlyCalendars: string[] = [];
  startDate!: Date;
  endDate!: Date;
  debounce: any;
  calendarData: any = {};
  myResources: MbscResource[] = [];
  myInvalids: any[] = [];
  myAnchor: any;
  selectedDate: any = new Date();

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'week',
        eventList: true,
      },
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
                resp.forEach((event: any) => {
                  event.resource = event.googleCalendarId;
                });
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
        const calendarId = event.resource;
        if (this.readonlyCalendars.indexOf(calendarId) !== -1) {
          this.notify.toast({
            message: 'This calendar is readonly',
          });
        } else {
          googleCalendarSync
            .addEvent(calendarId, event)
            .then((resp: any) => {
              this.zone.run(() => {
                resp.resource = event.resource;
                this.myEvents = [...this.myEvents.filter((item) => item.id !== event.id), resp];
              });
              this.notify.toast({
                message: 'Event created in "' + this.calendarData[calendarId].name + '" calendar',
              });
            })
            .catch((error: any) => {
              this.zone.run(() => {
                this.myEvents = this.myEvents.filter((item) => item.id !== event.id);
                this.onError(error);
              });
            });
        }
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
              const calendarId = event['googleCalendarId'];
              googleCalendarSync
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
              const calendarId = event['googleCalendarId'];
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

  popupOptions: MbscPopupOptions = {
    width: 400,
    touchUi: false,
    showOverlay: false,
    scrollLock: false,
    contentPadding: false,
    display: 'anchored',
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
            const newCalendarIds = [];
            const newResources = [];
            const readonlyCals = [];

            calendars.sort((a: { isDefaultCalendar: boolean }) => (a.isDefaultCalendar ? -1 : 1));

            for (const c of calendars) {
              newCalendarIds.push(c.id);
              newResources.push({ id: c.id, name: c.summary, color: c.hexColor });
              this.calendarData[c.id] = { name: c.summary, color: c.hexColor, checked: true };
              if (!(c.accessRole === 'writer' || c.accessRole === 'owner')) {
                readonlyCals.push(c.id);
              }
            }

            this.myCalendars = calendars;
            this.calendarIds = newCalendarIds;
            this.myResources = newResources;
            this.readonlyCalendars = readonlyCals;

            this.isLoading = true;
            this.myInvalids = [
              {
                recurring: {
                  repeat: 'daily',
                },
                resource: readonlyCals,
              },
            ];

            googleCalendarSync
              .getEvents(this.calendarIds, this.startDate, this.endDate)
              .then((resp: any) => {
                this.zone.run(() => {
                  resp.forEach((event: any) => {
                    event.resource = event.googleCalendarId;
                  });
                  this.myEvents = resp;
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
        this.popup.close();
        this.myCalendars = [];
        this.calendarIds = [];
        this.calendarData = {};
        this.myEvents = [];
        this.myResources = [];
        this.myInvalids = [];
        this.readonlyCalendars = [];
      },
    });
  }

  onError(error: any): void {
    this.notify.toast({
      message: error || 'An error occured',
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
            const newResource = this.calendarData[calendarId];
            this.myResources = [...this.myResources, { id: calendarId, name: newResource.name, color: newResource.color }];
            resp.forEach((event: any) => {
              event.resource = event.googleCalendarId;
            });
            this.myEvents = [...this.myEvents, ...resp];
            this.isLoading = false;
          });
        })
        .catch((error: any) => {
          this.onError(error);
        });
    } else {
      this.myResources = this.myResources.filter((r) => r.id !== calendarId);
      this.calendarIds = this.calendarIds.filter((id) => id !== calendarId);
      this.myEvents = this.myEvents.filter((event) => event['googleCalendarId'] !== calendarId);
    }
  }

  openPopup(): void {
    this.myAnchor = this.anchorElm.nativeElement;
    this.popup.open();
  }

  navigate(): void {
    this.selectedDate = new Date();
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
