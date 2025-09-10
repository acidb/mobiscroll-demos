import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscModule,
  MbscPageLoadingEvent,
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
  selector: 'app-agenda-sync-events-google-calendar',
  styleUrl: './sync-events-google-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sync-events-google-calendar.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
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
  myCalendars: Array<{ summary: string; id: string }> = [];
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };
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
      if (googleCalendarSync.isSignedIn()) {
        this.isLoading = true;
        googleCalendarSync
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

  onError(resp: { error?: string; result: { error: { message: string } } }): void {
    this.notify.toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }

  onSignedIn(): void {
    this.isLoggedIn = true;
    this.calendarIds = [];
    googleCalendarSync
      .getCalendars()
      .then((calendars) => {
        calendars.sort((a: { primary: boolean }) => (a.primary ? -1 : 1));

        for (const c of calendars) {
          this.calendarIds.push(c.id);
          this.calendarData[c.id] = { checked: true };
        }

        this.myCalendars = calendars;
        this.isLoading = true;

        return googleCalendarSync.getEvents(this.calendarIds, this.startDate, this.endDate);
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
  }

  onSignedOut(): void {
    this.calendarIds = [];
    this.calendarData = {};
    this.isLoggedIn = false;
    this.myCalendars = [];
    this.myEvents = [];
    this.popup.close();
  }

  toggleCalendar(ev: Event, calendarId: string): void {
    const checked = (ev.target as HTMLInputElement).checked;
    this.calendarData[calendarId].checked = checked;

    if (checked) {
      this.calendarIds = [...this.calendarIds, calendarId];
      this.isLoading = true;
      googleCalendarSync
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

  signOut(): void {
    googleCalendarSync.signOut().catch((error) => {
      this.onError(error);
    });
  }

  signIn(): void {
    if (!googleCalendarSync.isSignedIn()) {
      googleCalendarSync.signIn().catch((error) => {
        this.onError(error);
      });
    }
  }

  ngOnInit(): void {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: () => {
        this.onSignedIn();
      },
      onSignedOut: () => {
        this.onSignedOut();
      },
    });
  }
}
