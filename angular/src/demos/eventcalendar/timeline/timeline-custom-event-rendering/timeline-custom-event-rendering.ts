import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-timeline-custom-event-rendering',
  styleUrl: './timeline-custom-event-rendering.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline-custom-event-rendering.html',
})
export class AppComponent {
  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d,10,30)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Tire change',
      color: '#7a5886',
      taskType: 'material-repeat',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Brake maintenance',
      color: '#9da721',
      taskType: 'cogs',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d,13,30)',
      end: 'dyndatetime(y,m,d,16,30)',
      title: 'Fluid maintenance',
      color: '#cd6957',
      taskType: 'cogs',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,14)',
      title: 'Oil change',
      color: '#637e57',
      taskType: 'material-repeat',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,12)',
      title: 'Engine inspection',
      color: '#6c5d45',
      taskType: 'material-search',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,19)',
      title: 'Car painting',
      color: '#50789d',
      taskType: 'material-format-paint',
      resource: 2,
    },
  ];

  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#239a21',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#01adff',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
  ];

  myDefaultEvent() {
    return {
      taskType: 'cogs',
    };
  }
}
