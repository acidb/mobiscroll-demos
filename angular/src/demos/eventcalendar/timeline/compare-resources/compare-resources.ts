import { Component } from '@angular/core';
import { Notifications, setOptions, MbscCalendarEvent, MbscResource, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'compare-resources',
  templateUrl: './compare-resources.html',
  styleUrl: './compare-resources.css',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,12)',
      title: 'Task 1',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 2',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,11)',
      end: 'dyndatetime(y,m,d-1,16)',
      title: 'Task 3',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 4',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,14)',
      title: 'Task 5',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 6',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,14)',
      title: 'Task 7',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d-1,9)',
      end: 'dyndatetime(y,m,d-1,16)',
      title: 'Task 8',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,11)',
      title: 'Task 9',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,13)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 10',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,14)',
      title: 'Task 11',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 12',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,13)',
      title: 'Task 13',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,10)',
      title: 'Task 14',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d+2,14)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Task 15',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 16',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d-1,9)',
      end: 'dyndatetime(y,m,d-1,14)',
      title: 'Task 17',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d+1,10)',
      end: 'dyndatetime(y,m,d+1,12)',
      title: 'Task 18',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 19',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d+2,10,9)',
      end: 'dyndatetime(y,m,d+2,11,17)',
      title: 'Task 20',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Task 21',
      resource: 5,
    },
    {
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 22',
      resource: 5,
    },
    {
      start: 'dyndatetime(y,m,d-1,11)',
      end: 'dyndatetime(y,m,d-1,15)',
      title: 'Task 23',
      resource: 5,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,12)',
      title: 'Task 24',
      resource: 5,
    },
    {
      start: 'dyndatetime(y,m,d+2,11)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Task 25',
      resource: 5,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 26',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,14)',
      title: 'Task 27',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,11)',
      title: 'Task 28',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,15)',
      title: 'Task 29',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d+2,16)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 30',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,17)',
      title: 'Task 31',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,12)',
      title: 'Task 32',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d+1,13)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 33',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d+2,14)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 34',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,12)',
      title: 'Task 35',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 36',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d+1,10)',
      end: 'dyndatetime(y,m,d+1,14)',
      title: 'Task 37',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Task 38',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Task 39',
      resource: 9,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,13)',
      title: 'Task 40',
      resource: 9,
    },
    {
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 41',
      resource: 9,
    },
    {
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,14)',
      title: 'Task 42',
      resource: 9,
    },
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Task 43',
      resource: 10,
    },
    {
      start: 'dyndatetime(y,m,d-1,9)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: 'Work order #41989',
      resource: 10,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 44',
      resource: 10,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,13)',
      title: 'Task 45',
      resource: 10,
    },
    {
      start: 'dyndatetime(y,m,d+2,14)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 46',
      resource: 10,
    },
    {
      start: 'dyndatetime(y,m,d+2,9)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 47',
      resource: 11,
    },
    {
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,17)',
      title: 'Task 48',
      resource: 11,
    },
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Task 49',
      resource: 12,
    },
    {
      start: 'dyndatetime(y,m,d+2,11)',
      end: 'dyndatetime(y,m,d+2,17)',
      title: 'Task 50',
      resource: 12,
    },
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Task 51',
      resource: 13,
    },
    {
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,17)',
      title: 'Task 52',
      resource: 13,
    },
  ];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Emma Smith',
      color: '#c8cdcf',
    },
    {
      id: 2,
      name: 'James Brown',
      color: '#76e083',
    },
    {
      id: 3,
      name: 'Olivia Miller',
      color: '#4981d6',
    },
    {
      id: 4,
      name: 'David Johnson',
      color: '#d6d145',
    },
    {
      id: 5,
      name: 'Sarah Jones',
      color: '#e25dd2',
    },
    {
      id: 6,
      name: 'Joseph Davis',
      color: '#62ab50',
    },
    {
      id: 7,
      name: 'Sophia Williams',
      color: '#eb5b34',
    },
    {
      id: 8,
      name: 'Daniel Wilson',
      color: '#7134eb',
    },
    {
      id: 9,
      name: 'Alice Clark',
      color: '#a1eb34',
    },
    {
      id: 10,
      name: 'Robert Taylor',
      color: '#9b77d9',
    },
    {
      id: 11,
      name: 'Anthony Lopez',
      color: '#6bede7',
    },
    {
      id: 12,
      name: 'Grace Moore',
      color: '#262f80',
    },
    {
      id: 13,
      name: 'Peter Jackson',
      color: '#788026',
    },
  ];
  resources: MbscResource[] = this.myResources;
  fixedResources: MbscResource[] = [];
  fixedNr: number = 0;
  toggleComparison = (resource: MbscResource) => {
    const origResource = this.myResources.find((r: MbscResource) => r.id === resource.id);
    if (!resource.fixed) {
      this.fixedNr++;
      origResource!.fixed = true;
      this.fixedResources.push(origResource!);
      if (this.fixedNr > 2) {
        this.notify.toast({
          message: 'Comparing up to 3 schedules',
        });
      }
    } else {
      this.fixedNr--;
      origResource!.fixed = false;
      this.fixedResources = this.fixedResources.filter((r) => r.id !== resource.id);
    }
    const result = [...this.fixedResources];
    this.myResources.forEach((r) => {
      if (!r.fixed) {
        result.push(r);
      }
    });
    this.resources = result;
  };
  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      resolutionHorizontal: 'hour',
      startTime: '09:00',
      endTime: '17:00',
      startDay: 1,
      endDay: 5,
    },
  };
}
