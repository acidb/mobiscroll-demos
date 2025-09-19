import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-role-based-timeline',
  styleUrl: './role-based-timeline.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './role-based-timeline.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  myView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startDay: 1,
      endDay: 5,
      startTime: '08:00',
      endTime: '20:00',
    },
  };

  myEvents: MbscCalendarEvent[] = [{
    start: dyndatetime('y,m,d-1,11'),
    end: dyndatetime('y,m,d-1,15'),
    title: 'Task 1',
    resource: 1,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d-1,14'),
    end: dyndatetime('y,m,d-1,17'),
    title: 'Task 2',
    resource: 3,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d-1,12'),
    end: dyndatetime('y,m,d-1,14'),
    title: 'Task 3',
    resource: 4,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,15'),
    title: 'Task 4',
    resource: 1,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,11'),
    end: dyndatetime('y,m,d,13'),
    title: 'Task 5',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,17'),
    title: 'Task 6',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d,12'),
    end: dyndatetime('y,m,d,15'),
    title: 'Task 7',
    resource: 3,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,17'),
    end: dyndatetime('y,m,d,20'),
    title: 'Task 8',
    resource: 3,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,8'),
    end: dyndatetime('y,m,d,11,30'),
    title: 'Task 9',
    resource: 4,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,12'),
    end: dyndatetime('y,m,d,14'),
    title: 'Task 10',
    resource: 4,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,13'),
    title: 'Task 11',
    resource: 5,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,16'),
    title: 'Task 12',
    resource: 5,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d,16,30'),
    end: dyndatetime('y,m,d,19'),
    title: 'Task 13',
    resource: 5,
    editable: false,
    color: '#6a6a6a',
  },
  {
    start: dyndatetime('y,m,d+1,11'),
    end: dyndatetime('y,m,d+1,14'),
    title: 'Task 14',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d+1,16'),
    end: dyndatetime('y,m,d+1,20'),
    title: 'Task 15',
    resource: 5,
    editable: false,
    color: '#6a6a6a',
  },
  ];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Jude Chester',
      color: '#fadaff',
      eventCreation: false,
    },
    {
      id: 2,
      name: 'Willis Cane',
      color: '#ffffd0',
    },
    {
      id: 3,
      name: 'Derek Austyn',
      color: '#e1ffd6',
      eventCreation: false,
    },
    {
      id: 4,
      name: 'Merv Kenny',
      color: '#fac4c4',
      eventCreation: false,
    },
    {
      id: 5,
      name: 'Fred Waldez',
      color: '#bfdeff',
      eventCreation: false,
    }
  ];

}
