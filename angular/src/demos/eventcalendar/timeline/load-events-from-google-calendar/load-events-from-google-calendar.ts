import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { googleCalendarSync } from '@mobiscroll/calendar-integration';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-load-events-from-google-calendar',
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
  firstDay!: Date;
  lastDay!: Date;
  calView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      eventList: true,
    },
  };
  calendars: any[] = [
    { id: 'en.french#holiday@group.v.calendar.google.com', name: 'Holidays in France', color: '#D81B60' },
    { id: 'en.german#holiday@group.v.calendar.google.com', name: 'Holidays in Germany', color: '#F4511E' },
    { id: 'en.hungarian#holiday@group.v.calendar.google.com', name: 'Holidays in Hungary', color: '#AD1457' },
    { id: 'en.indian#holiday@group.v.calendar.google.com', name: 'Holidays in India', color: '#E4C441' },
    { id: 'en.romanian#holiday@group.v.calendar.google.com', name: 'Holidays in Romania', color: '#0B8043' },
    { id: 'en.uk#holiday@group.v.calendar.google.com', name: 'Holidays in United Kingdom', color: '#3F51B5' },
    { id: 'en.usa#holiday@group.v.calendar.google.com', name: 'Holidays in United States', color: '#8E24AA' },
  ];
  calendarIds = this.calendars.map(function (cal) {
    return cal.id;
  });

  calOptions: MbscEventcalendarOptions = {
    clickToCreate: false,
    dragToCreate: false,
    exclusiveEndDates: true,
    resources: this.calendars,
    view: {
      timeline: {
        type: 'month',
        eventList: true,
      },
    },
    onPageLoading: (args: any) => {
      const start = args.firstDay;
      const end = args.lastDay;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      this.firstDay = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate());
      this.lastDay = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate());

      this.loadEvents();
    },
  };

  loadEvents(): void {
    googleCalendarSync
      .getEvents(this.calendarIds, this.firstDay, this.lastDay)
      .then((resp: any[]) => {
        resp.forEach(function (event) {
          event.resource = event.googleCalendarId;
        });
        this.zone.run(() => {
          this.myEvents = resp;
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
}
