import { Component } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
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
  selector: 'app-timeline-prevent-double-booking-events',
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
      start: new Date(y, m, d, 11),
      end: new Date(y, m, d, 13),
      title: 'Event 1',
      resource: 1,
    },
    {
      start: new Date(y, m, d, 16),
      end: new Date(y, m, d, 17),
      title: 'Event 2 (no event overlap)',
      overlap: false,
      resource: 1,
    },
    {
      start: new Date(y, m, d, 14),
      end: new Date(y, m, d, 16),
      title: 'Event 3',
      resource: 2,
    },
    {
      start: new Date(y, m, d, 8),
      end: new Date(y, m, d, 10),
      title: 'Event 4 (no event overlap)',
      resource: 2,
      overlap: false,
    },
    {
      start: new Date(y, m, d, 10),
      end: new Date(y, m, d, 13),
      title: 'Event 5',
      resource: 3,
    },
    {
      start: new Date(y, m, d, 11),
      end: new Date(y, m, d, 16),
      title: 'Event 6',
      resource: 4,
    },
  ];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Resource 1',
    },
    {
      id: 2,
      name: 'Resource 2',
    },
    {
      id: 3,
      name: 'Resource 3',
    },
    {
      id: 4,
      name: 'Resource 4 - no event overlap allowed',
      eventOverlap: false,
    },
  ];

  myView: MbscEventcalendarView = {
    timeline: { type: 'day' },
  };
}
