import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import {
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  MbscCalendarEvent,
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
  selector: 'load-events-from-google-calendar',
  styleUrl: './load-events-from-google-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './load-events-from-google-calendar.html',
})
export class AppComponent implements OnInit {
  constructor(
    public notify: Notifications,
    public zone: NgZone,
  ) {}

  myEvents: MbscCalendarEvent[] = [];
  isLoading = false;
  firstDay!: Date;
  lastDay!: Date;
  view = 'agenda';
  calView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  };

  calSettings: MbscEventcalendarOptions = {
    exclusiveEndDates: true,
    onPageLoading: (event: any) => {
      const start = event.viewStart;
      const end = event.viewEnd;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      if (this.view === 'month') {
        this.firstDay = start;
        this.lastDay = end;
      } else {
        this.firstDay = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
        this.lastDay = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
      }
      this.loadEvents();
    },
  };

  loadEvents(): void {
    this.isLoading = true;
    googleCalendarSync
      .getEvents(CALENDAR_ID, this.firstDay, this.lastDay)
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

  onError(resp: any): void {
    this.notify.toast({
      message: resp.error ? resp.error : resp.result.error.message,
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

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'month':
          this.calView = {
            calendar: { labels: true },
          };
          break;
        case 'week':
          this.calView = {
            schedule: { type: 'week' },
          };
          break;
        case 'day':
          this.calView = {
            schedule: { type: 'day' },
          };
          break;
        case 'agenda':
        default:
          this.calView = {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          };
          break;
      }
    });
  }
}
