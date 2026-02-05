import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-listing',
  styleUrl: './event-listing.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-listing.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  view = 'month';

  calView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      eventDisplay: 'fill',
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Event 1',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d-1,10'),
      end: dyndatetime('y,m,d-1,13'),
      title: 'Event 2',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,14'),
      title: 'Event 3',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d-2,9'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Event 4',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Event 5',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,16'),
      title: 'Event 6',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d-3,8'),
      end: dyndatetime('y,m,d-3,20'),
      title: 'Event 7',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,15'),
      title: 'Event 8',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,19'),
      title: 'Event 9',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Event 10',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d+2,18'),
      end: dyndatetime('y,m,d+2,22'),
      title: 'Event 11',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d-4,10'),
      end: dyndatetime('y,m,d-4,16'),
      title: 'Event 12',
      resource: 6,
    },
    {
      start: dyndatetime('y,m,d-3,15'),
      end: dyndatetime('y,m,d-3,20'),
      title: 'Event 13',
      resource: 6,
    },
  ];

  myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#e20000',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#60e81a',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#3ba7ff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#e25dd2',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#f1e920',
    },
    {
      id: 6,
      name: 'Resource F',
      color: '#1ac38d',
    },
  ];

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'workweek':
          this.calView = {
            timeline: {
              type: 'week',
              eventDisplay: 'fill',
              startDay: 1,
              endDay: 5,
            },
          };
          break;
        case 'week':
          this.calView = {
            timeline: {
              type: 'week',
              eventDisplay: 'fill',
            },
          };
          break;
        case 'month':
          this.calView = {
            timeline: {
              type: 'month',
              eventDisplay: 'fill',
            },
          };
          break;
      }
    });
  }
}
