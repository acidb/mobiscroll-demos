import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-drag-drop-between-calendar-instances',
  templateUrl: './drag-drop-between-calendar-instances.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myView: MbscEventcalendarView = {
    schedule: {
      type: 'week',
    },
  };

  firstEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d-5,10)',
      end: 'dyndatetime(y,m,d-5,14)',
      title: 'Event 1',
      color: '#de3d83',
    },
    {
      start: 'dyndatetime(y,m,d-4,7)',
      end: 'dyndatetime(y,m,d-4,8)',
      title: 'Event 2',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,d-3,16)',
      end: 'dyndatetime(y,m,d-3,18)',
      title: 'Event 3',
      color: '#e7b300',
    },
    {
      start: 'dyndatetime(y,m,d-1,11)',
      end: 'dyndatetime(y,m,d-1,12)',
      title: 'Event 4',
      color: '#e9967a',
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Event 5',
      color: '#a917bb',
    },
    {
      start: 'dyndatetime(y,m,d+1,8)',
      end: 'dyndatetime(y,m,d+1,10)',
      title: 'Event 6',
      color: '#3d9140',
    },
    {
      start: 'dyndatetime(y,m,d+2,15)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Event 7',
      color: '#8b8b00',
    },
    {
      start: 'dyndatetime(y,m,d+3,13)',
      end: 'dyndatetime(y,m,d+3,15)',
      title: 'Event 8',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,d+5,10)',
      end: 'dyndatetime(y,m,d+5,12)',
      title: 'Event 9',
      color: '#37bbe4',
    },
    {
      start: 'dyndatetime(y,m,d+6,16)',
      end: 'dyndatetime(y,m,d+6,17)',
      title: 'Event 10',
      color: '#ee9572',
    },
    {
      start: 'dyndatetime(y,m,d+8,11)',
      end: 'dyndatetime(y,m,d+8,14)',
      title: 'Event 11',
      color: '#c67171',
    },
    {
      start: 'dyndatetime(y,m,d+10,7)',
      end: 'dyndatetime(y,m,d+10,9)',
      title: 'Event 12',
      color: '#8b1a1a',
    },
  ];

  secondEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d-5,14)',
      end: 'dyndatetime(y,m,d-5,17)',
      title: 'Event 1',
      color: '#e7b300',
    },
    {
      start: 'dyndatetime(y,m,d-4,10)',
      end: 'dyndatetime(y,m,d-4,12)',
      title: 'Event 2',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,d-3,8)',
      end: 'dyndatetime(y,m,d-3,9)',
      title: 'Event 3',
      color: '#37bbe4',
    },
    {
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,17)',
      title: 'Event 4',
      color: '#8b1a1a',
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Event 5',
      color: '#c67171',
    },
    {
      start: 'dyndatetime(y,m,d+1,17)',
      end: 'dyndatetime(y,m,d+1,20)',
      title: 'Event 6',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,d+2,14)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Event 7',
      color: '#a917bb',
    },
    {
      start: 'dyndatetime(y,m,d+3,10)',
      end: 'dyndatetime(y,m,d+3,13)',
      title: 'Event 8',
      color: '#7ac5cd',
    },
    {
      start: 'dyndatetime(y,m,d+5,15)',
      end: 'dyndatetime(y,m,d+5,16)',
      title: 'Event 9',
      color: '#de3d83',
    },
    {
      start: 'dyndatetime(y,m,d+6,11)',
      end: 'dyndatetime(y,m,d+6,12)',
      title: 'Event 10',
      color: '#3d9140',
    },
    {
      start: 'dyndatetime(y,m,d+8,8)',
      end: 'dyndatetime(y,m,d+8,10)',
      title: 'Event 11',
      color: '#8b8b00',
    },
    {
      start: 'dyndatetime(y,m,d+10,17)',
      end: 'dyndatetime(y,m,d+10,19)',
      title: 'Event 12',
      color: '#ee9572',
    },
  ];

  handleFirstCalEventCreated(args: any, calendar: string) {
    if (args.action === 'externalDrop') {
      this.notify.toast({
        //<hidden>
        // theme,//</hidden>
        context: '.md-drag-drop-first-calendar',
        message: 'Event dropped to Calendar 1',
      });
    }
  }

  handleSecondCalEventCreated(args: any, calendar: string) {
    if (args.action === 'externalDrop') {
      this.notify.toast({
        //<hidden>
        // theme,//</hidden>
        context: '.md-drag-drop-second-calendar',
        message: 'Event dropped to Calendar 2',
      });
    }
  }
}
