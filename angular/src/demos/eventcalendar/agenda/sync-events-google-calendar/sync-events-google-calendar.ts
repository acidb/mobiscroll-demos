import { Component, NgZone, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
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
  readonlyCals: string[] = [];
  startDate!: Date;
  endDate!: Date;
  debounce: any;
  calendarData: any = {};
  myInvalids: any[] = [];
  myAnchor: any;
  selectedDate: any = new Date();

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      agenda: { type: 'month' },
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
            calendars.sort((a: { primary: boolean }) => (a.primary ? -1 : 1));
            this.myCalendars = calendars;

            for (const c of calendars) {
              this.calendarIds = [...this.calendarIds, c.id];
              this.calendarData[c.id] = { checked: true };
            }

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
