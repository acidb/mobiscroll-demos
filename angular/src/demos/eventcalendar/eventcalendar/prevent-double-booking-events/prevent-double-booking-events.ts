import { Component } from '@angular/core';
import {
  Notifications,
  setOptions,
  MbscEventcalendarOptions,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();
const d = now.getDate();

@Component({
  selector: 'prevent-double-booking-events',
  templateUrl: './prevent-double-booking-events.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myOptions: MbscEventcalendarOptions = {
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    eventOverlap: false,
    exclusiveEndDates: true,
    onEventUpdateFailed: () => {
      this.notify.toast({
        message: 'Make sure not to double book',
      });
    },
    onEventCreateFailed: () => {
      this.notify.toast({
        message: 'Make sure not to double book',
      });
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(y, m, d - 3),
      end: new Date(y, m, d - 1),
      title: 'Event 1',
    },
    {
      start: new Date(y, m, d),
      end: new Date(y, m, d + 2),
      title: 'Event 2 (no event overlap)',
      overlap: false,
    },
    {
      start: new Date(y, m, d + 3),
      end: new Date(y, m, d + 5),
      title: 'Event 3',
    },
    {
      start: new Date(y, m, d + 5),
      end: new Date(y, m, d + 7),
      title: 'Event 4 (no event overlap)',
      overlap: false,
    },
  ];

  myView: MbscEventcalendarView = {
    calendar: { type: 'month', labels: 'all' },
  };
}
