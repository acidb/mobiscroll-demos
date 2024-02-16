import { Component } from '@angular/core';
import { MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-data-structure',
  templateUrl: './event-data-structure.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myEvents = [
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'General orientation',
      resource: 2,
      bufferBefore: 20,
      bufferAfter: 30,
    },
  ];

  myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  selectedDate: any;

  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
    },
  };

  addEvent(): void {
    const newEvent = {
      // base properties
      title: 'Product planning',
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 4,
      bufferBefore: 20,
      bufferAfter: 30,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    this.myEvents = [...this.myEvents, newEvent];

    this.notify.toast({
      message: 'Event added',
    });
  }
}
