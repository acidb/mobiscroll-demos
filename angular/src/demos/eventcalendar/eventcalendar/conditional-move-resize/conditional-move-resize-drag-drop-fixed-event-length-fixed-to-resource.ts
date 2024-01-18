import { Component } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource',
  templateUrl: './conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource.html',
})
export class AppComponent {
  myView: MbscEventcalendarView = {
    calendar: { type: 'month' },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      color: 'cyan',
      end: 'dyndatetime(y,m,d-5)',
      start: 'dyndatetime(y,m,d-6)',
      title: 'Event 1',
    },
    {
      color: 'blue',
      dragInTime: false,
      end: 'dyndatetime(y,m,d-1)',
      start: 'dyndatetime(y,m,d-4)',
      title: 'Event 2 (cannot be moved in time)',
    },
    {
      color: 'brown',
      end: 'dyndatetime(y,m,d+3)',
      start: 'dyndatetime(y,m,d)',
      resize: false,
      title: 'Event 3 (cannot be resized)',
    },
    {
      color: 'teal',
      end: 'dyndatetime(y,m,d+4)',
      start: 'dyndatetime(y,m,d+3)',
      title: 'Event 4',
    },
    {
      color: 'yellow',
      end: 'dyndatetime(y,m,d+6)',
      start: 'dyndatetime(y,m,d+5)',
      title: 'Event 5',
    },
  ];
}
