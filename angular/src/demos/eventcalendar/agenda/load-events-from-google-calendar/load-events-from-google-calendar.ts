import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { googleCalendarSync } from '@mobiscroll/calendar-integration';

setOptions({
  // locale,
  // theme
});

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';

@Component({
  selector: 'app-agenda-load-events-from-google-calendar',
  styleUrl: './load-events-from-google-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './load-events-from-google-calendar.html',
})
export class AppComponent implements OnInit {
  constructor(
    public notify: Notifications,
    public zone: NgZone,
  ) {}

  currentView = 'agenda';
  firstDay!: Date;
  lastDay!: Date;
  isLoading = false;
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  };

  onPageLoading(event: MbscPageLoadingEvent): void {
    const start = event.viewStart;
    const end = event.viewEnd;

    // Calculate dates
    // (pre-load events for previous and next pages as well)
    if (this.currentView === 'month') {
      this.firstDay = start;
      this.lastDay = end;
    } else {
      this.firstDay = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
      this.lastDay = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
    }
    this.loadEvents();
  }

  onError(resp: { error?: string; result: { error: { message: string } } }): void {
    this.notify.toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }

  loadEvents(): void {
    this.isLoading = true;
    googleCalendarSync
      .getEvents(CALENDAR_ID, this.firstDay, this.lastDay)
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

  changeView(): void {
    setTimeout(() => {
      switch (this.currentView) {
        case 'month':
          this.myView = { calendar: { labels: true } };
          break;
        case 'week':
          this.myView = { schedule: { type: 'week' } };
          break;
        case 'day':
          this.myView = { schedule: { type: 'day' } };
          break;
        case 'myView':
        default:
          this.myView = {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          };
          break;
      }
    });
  }

  ngOnInit(): void {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: () => {
        this.loadEvents();
      },
    });
  }
}
