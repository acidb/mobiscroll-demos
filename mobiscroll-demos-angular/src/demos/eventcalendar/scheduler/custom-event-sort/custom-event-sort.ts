import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-custom-event-sort',
  templateUrl: './custom-event-sort.html',
  standalone: false,
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: dyndatetime('y,m,d,2'),
      end: dyndatetime('y,m,d,20'),
      title: 'Event 1 - order 2',
      order: 2,
      color: '#e7b300',
    },
    {
      id: 2,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,19'),
      title: 'Event 2 - order 4',
      order: 4,
      color: '#eb4034',
    },
    {
      id: 3,
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,16'),
      title: 'Event 3 - order 3',
      order: 2,
      color: '#00ca10',
    },
    {
      id: 4,
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
      title: 'Event 4 - order 1',
      order: 1,
      color: '#f5850c',
    },
    {
      id: 5,
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,11'),
      title: 'Event 6 - order 1',
      order: 1,
      color: '#f5850c',
    },
    {
      id: 6,
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Event 7 - order 3',
      order: 3,
      color: '#00ca10',
    },
    {
      id: 7,
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Event 8 - order 2',
      order: 2,
      color: '#e7b300',
    },
    {
      id: 8,
      start: dyndatetime('y,m,d+1,15'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Event 9 - order 2',
      order: 2,
      color: '#e7b300',
    },
    {
      id: 9,
      start: dyndatetime('y,m,d+1,15'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Event 10 - order 1',
      order: 1,
      color: '#f5850c',
    },
    {
      id: 10,
      start: dyndatetime('y,m,d-1,2'),
      end: dyndatetime('y,m,d-1,14'),
      title: 'event 11 - order 1',
      order: 1,
      color: '#f5850c',
    },
    {
      id: 11,
      start: dyndatetime('y,m,d-1,4'),
      end: dyndatetime('y,m,d-1,10'),
      title: 'Event 12 - order 2',
      order: 2,
      color: '#e7b300',
    },
    {
      id: 12,
      start: dyndatetime('y,m,d-1,6'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Event 13 - order 2',
      order: 2,
      color: '#e7b300',
    },
  ];

  view: MbscEventcalendarView = {
    schedule: {
      type: 'week',
    },
  };
}
