import { Component, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'hour-day-week-month-quarter-year-header-footer-template',
  styleUrl: './hour-day-week-month-quarter-year-header-footer-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hour-day-week-month-quarter-year-header-footer-template.html',
})
export class AppComponent {
  hourView: MbscEventcalendarView = {
    timeline: {
      type: 'day',
    },
  };

  hourlyEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m,d,2)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,21)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y,m,d,5)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y,m,d,3)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,23)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y,m,d,6)',
      end: 'dyndatetime(y,m,d,11)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,22)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,m,d,5)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,21)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,18)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  dayView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
    },
  };

  dailyEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m,2)',
      end: 'dyndatetime(y,m,10)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y,m,16)',
      end: 'dyndatetime(y,m,24)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y,m,8)',
      end: 'dyndatetime(y,m,15)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y,m,4)',
      end: 'dyndatetime(y,m,11)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y,m,7)',
      end: 'dyndatetime(y,m,15)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y,m,21)',
      end: 'dyndatetime(y,m,27)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y,m,10)',
      end: 'dyndatetime(y,m,19)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y,m,24)',
      end: 'dyndatetime(y,m,30)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y,m,8)',
      end: 'dyndatetime(y,m,17)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,m,5)',
      end: 'dyndatetime(y,m,13)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y,m,17)',
      end: 'dyndatetime(y,m,26)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y,m,9)',
      end: 'dyndatetime(y,m,20)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  weekView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      resolutionHorizontal: 'week',
      size: 6,
    },
  };

  weeklyEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m,10)',
      end: 'dyndatetime(y,m,24)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y,m+1,2)',
      end: 'dyndatetime(y,m+1,18)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y,m,27)',
      end: 'dyndatetime(y,m+1,13)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y,m+1,4)',
      end: 'dyndatetime(y,m+1,27)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y,m,24)',
      end: 'dyndatetime(y,m+1,2)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y,m+1,10)',
      end: 'dyndatetime(y,m+1,24)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y,m,20)',
      end: 'dyndatetime(y,m+1,3)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y,m+1,8)',
      end: 'dyndatetime(y,m+1,19)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y,m,28)',
      end: 'dyndatetime(y,m+1,15)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,m,9)',
      end: 'dyndatetime(y,m,23)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y,m+1,5)',
      end: 'dyndatetime(y,m+1,22)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y,m,24)',
      end: 'dyndatetime(y,m+1,13)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  monthView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      resolutionHorizontal: 'month',
      size: 6,
    },
  };

  monthlyEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m-1,10)',
      end: 'dyndatetime(y,m+1,7)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y,m+3,1)',
      end: 'dyndatetime(y,m+4,8)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y,m+1,27)',
      end: 'dyndatetime(y,m+2,23)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y,m,25)',
      end: 'dyndatetime(y,m+1,19)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y,m+1,10)',
      end: 'dyndatetime(y,m+2,18)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y,m+4,24)',
      end: 'dyndatetime(y,m+5,27)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y,m+2,2)',
      end: 'dyndatetime(y,m+3,13)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y,m+4,8)',
      end: 'dyndatetime(y,m+5,6)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y,m+2,20)',
      end: 'dyndatetime(y,m+3,17)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,m,1)',
      end: 'dyndatetime(y,m+1,14)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y,m+4,14)',
      end: 'dyndatetime(y,m+5,20)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y,m+1,24)',
      end: 'dyndatetime(y,m+2,20)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  quarterView: MbscEventcalendarView = {
    timeline: {
      type: 'year',
      resolutionHorizontal: 'quarter',
      size: 1,
    },
  };

  quarterEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m-1,10)',
      end: 'dyndatetime(y,m+1,7)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y,m+3,1)',
      end: 'dyndatetime(y,m+4,8)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y,m+1,27)',
      end: 'dyndatetime(y,m+2,23)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y,m,25)',
      end: 'dyndatetime(y,m+1,19)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y,m+1,10)',
      end: 'dyndatetime(y,m+2,18)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y,m+4,24)',
      end: 'dyndatetime(y,m+5,27)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y,m+2,2)',
      end: 'dyndatetime(y,m+3,13)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y,m+4,8)',
      end: 'dyndatetime(y,m+5,6)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y,m+2,20)',
      end: 'dyndatetime(y,m+3,17)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,m,1)',
      end: 'dyndatetime(y,m+1,14)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y,m+4,14)',
      end: 'dyndatetime(y,m+5,20)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y,m+1,24)',
      end: 'dyndatetime(y,m+2,20)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  yearView: MbscEventcalendarView = {
    timeline: {
      type: 'year',
      resolutionHorizontal: 'year',
      size: 6,
    },
  };

  yearlyEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y+1,4,10)',
      end: 'dyndatetime(y+2,8,7)',
      title: 'Event 1',
      resource: 1,
    },
    {
      id: 2,
      start: 'dyndatetime(y+3,6,1)',
      end: 'dyndatetime(y+4,9,8)',
      title: 'Event 2',
      resource: 1,
    },
    {
      id: 3,
      start: 'dyndatetime(y+2,3,27)',
      end: 'dyndatetime(y+3,10,23)',
      title: 'Event 3',
      resource: 2,
    },
    {
      id: 4,
      start: 'dyndatetime(y+2,8,25)',
      end: 'dyndatetime(y+3,11,19)',
      title: 'Event 4',
      resource: 3,
    },
    {
      id: 5,
      start: 'dyndatetime(y+1,9,10)',
      end: 'dyndatetime(y+3,4,18)',
      title: 'Event 5',
      resource: 4,
    },
    {
      id: 6,
      start: 'dyndatetime(y+4,1,24)',
      end: 'dyndatetime(y+5,5,27)',
      title: 'Event 6',
      resource: 4,
    },
    {
      id: 7,
      start: 'dyndatetime(y-1,4,2)',
      end: 'dyndatetime(y,8,13)',
      title: 'Event 7',
      resource: 5,
    },
    {
      id: 8,
      start: 'dyndatetime(y+2,4,8)',
      end: 'dyndatetime(y+3,11,6)',
      title: 'Event 8',
      resource: 5,
    },
    {
      id: 9,
      start: 'dyndatetime(y+2,1,20)',
      end: 'dyndatetime(y+3,8,17)',
      title: 'Event 9',
      resource: 6,
    },
    {
      id: 10,
      start: 'dyndatetime(y,10,1)',
      end: 'dyndatetime(y+1,11,14)',
      title: 'Event 10',
      resource: 7,
    },
    {
      id: 11,
      start: 'dyndatetime(y+3,10,14)',
      end: 'dyndatetime(y+4,11,20)',
      title: 'Event 11',
      resource: 7,
    },
    {
      id: 12,
      start: 'dyndatetime(y+3,2,24)',
      end: 'dyndatetime(y+5,4,20)',
      title: 'Event 12',
      resource: 8,
    },
  ];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Resource A',
      color: '#e20000',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#d6d145',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#4981d6',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#e25dd2',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#1dab2f',
    },
    {
      id: 6,
      name: 'Resource F',
      color: '#430404',
    },
    {
      id: 7,
      name: 'Resource G',
      color: '#f7961e',
    },
    {
      id: 8,
      name: 'Resource H',
      color: '#34c8e0',
    },
  ];

  formatDate = formatDate;

  getOccuppancy(events: MbscCalendarEvent[]) {
    let occuppancy = 0;
    if (events) {
      let resourceIds: string[] = [];
      let nr = 0;
      for (const event of events) {
        const resource = event.resource as string;
        if (resourceIds.indexOf(resource) < 0) {
          nr++;
          resourceIds = [...resourceIds, resource];
        }
      }
      occuppancy = (nr * 100) / this.myResources.length;
    }
    return occuppancy.toFixed(0);
  }

  getEventOccurrence(args: any): any {
    let eventOccurrence = 'none';

    if (args.events) {
      var eventNr = args.events.length;
      if (eventNr === 0) {
        eventOccurrence = 'none';
      } else if (eventNr === 1) {
        eventOccurrence = 'one';
      } else if (eventNr < 4) {
        eventOccurrence = 'few';
      } else {
        eventOccurrence = 'more';
      }
    }
    return eventOccurrence;
  }
}
