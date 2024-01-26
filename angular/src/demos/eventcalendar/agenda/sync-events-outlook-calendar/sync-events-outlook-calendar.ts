import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscPopup,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { outlookCalendarSync } from '@mobiscroll/calendar-integration';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-sync-events-outlook-calendar',
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

  calendarData: { [key: string]: { checked: boolean } } = {};
  calendarIds: string[] = [];
  isLoggedIn = false;
  isLoading = false;
  startDate!: Date;
  endDate!: Date;
  myAnchor!: HTMLButtonElement;
  myCalendars: Array<{ name: string; id: string }> = [];
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };
  readonlyCals: string[] = [];
  selectedDate: MbscDateType = new Date();
  timer?: ReturnType<typeof setTimeout>;

  popupOptions: MbscPopupOptions = {
    contentPadding: false,
    display: 'anchored',
    scrollLock: false,
    showOverlay: false,
    touchUi: false,
    width: 400,
  };

  onPageLoading(args: MbscPageLoadingEvent): void {
    this.startDate = args.viewStart;
    this.endDate = args.viewEnd;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (outlookCalendarSync.isSignedIn()) {
        this.isLoading = true;
        outlookCalendarSync
          .getEvents(this.calendarIds, this.startDate, this.endDate)
          .then((resp) => {
            this.zone.run(() => {
              this.myEvents = resp;
              this.isLoading = false;
            });
          })
          .catch((error) => {
            this.onError(error);
          });
      }
    }, 200);
  }

  onError(resp: { message: string }): void {
    this.notify.toast({
      message: resp.message,
    });
  }

  toggleCalendars(ev: Event, calendarId: string): void {
    const checked = (ev.target as HTMLInputElement).checked;
    this.calendarData[calendarId].checked = checked;

    if (checked) {
      this.calendarIds = [...this.calendarIds, calendarId];
      this.isLoading = true;
      outlookCalendarSync
        .getEvents([calendarId], this.startDate, this.endDate)
        .then((resp) => {
          this.zone.run(() => {
            this.myEvents = [...this.myEvents, ...resp];
            this.isLoading = false;
          });
        })
        .catch((error) => {
          this.onError(error);
        });
    } else {
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
    outlookCalendarSync.signOut().catch((error) => {
      this.onError(error);
    });
  }

  logIn(): void {
    if (!outlookCalendarSync.isSignedIn()) {
      outlookCalendarSync.signIn().catch((error) => {
        this.onError(error);
      });
    }
  }

  ngOnInit(): void {
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: () => {
        this.isLoggedIn = true;
        outlookCalendarSync
          .getCalendars()
          .then((calendars) => {
            calendars.sort((a: { isDefaultCalendar: boolean }) => (a.isDefaultCalendar ? -1 : 1));

            for (const c of calendars) {
              this.calendarIds = [...this.calendarIds, c.id];
              this.calendarData[c.id] = { checked: true };
            }

            this.isLoading = true;
            this.myCalendars = calendars;

            return outlookCalendarSync.getEvents(this.calendarIds, this.startDate, this.endDate);
          })
          .then((resp) => {
            this.zone.run(() => {
              this.myEvents = resp;
              this.isLoading = false;
            });
          })
          .catch((error) => {
            this.onError(error);
          });
      },
      onSignedOut: () => {
        this.calendarIds = [];
        this.calendarData = {};
        this.isLoggedIn = false;
        this.myCalendars = [];
        this.myEvents = [];
        this.popup.close();
      },
    });
  }
}
