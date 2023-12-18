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
import { outlookCalendarSync } from '@mobiscroll/calendar-integration';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'sync-events-outlook-calendar',
  styleUrl: './sync-events-outlook-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync-events-outlook-calendar.html',
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
  readonlyCals: string[] = [];
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
        if (outlookCalendarSync.isSignedIn()) {
          this.isLoading = true;
          outlookCalendarSync
            .getEvents(this.calendarIds, this.startDate, this.endDate)
            .then((resp: any) => {
              this.zone.run(() => {
                this.myEvents = resp;
                resp.forEach((event: any) => {
                  event.resource = event.outlookCalendarId;
                });
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
        const calendarId = event.resource;
        if (this.readonlyCals.indexOf(calendarId) !== -1) {
          this.notify.toast({
            message: 'This calendar is readonly',
          });
        } else {
          outlookCalendarSync
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

            for (const c of calendars) {
              this.calendarIds = [...this.calendarIds, c.id];
              this.myResources = [...this.myResources, { id: c.id, name: c.name, color: c.hexColor }];
              this.calendarData[c.id] = { name: c.name, color: c.hexColor, checked: true };
              if (!c.canEdit) {
                this.readonlyCals = [...this.readonlyCals, c.id];
              }
            }

            this.isLoading = true;
            this.myInvalids = [
              {
                recurring: {
                  repeat: 'daily',
                  interval: 1,
                },
                resource: this.readonlyCals,
              },
            ];

            outlookCalendarSync
              .getEvents(this.calendarIds, this.startDate, this.endDate)
              .then((resp: any) => {
                this.zone.run(() => {
                  resp.forEach((event: any) => {
                    event.resource = event.outlookCalendarId;
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
        this.readonlyCals = [];
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
            const newResource = this.calendarData[calendarId];
            this.myResources = [...this.myResources, { id: calendarId, name: newResource.name, color: newResource.color }];
            resp.forEach((event: any) => {
              event.resource = event.outlookCalendarId;
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
      this.myEvents = this.myEvents.filter((event) => event['outlookCalendarId'] !== calendarId);
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
