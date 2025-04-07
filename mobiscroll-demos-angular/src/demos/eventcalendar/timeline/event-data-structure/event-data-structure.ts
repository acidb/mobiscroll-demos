import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-data-structure',
  styleUrl: './event-data-structure.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-data-structure.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,13'),
      title: 'General orientation',
      resource: 2,
      bufferBefore: 20,
      bufferAfter: 30,
    },
  ];

  myResources: MbscResource[] = [
    { id: 1, name: 'Resource A', color: '#fdf500' },
    { id: 2, name: 'Resource B', color: '#ff0101' },
    { id: 3, name: 'Resource C', color: '#01adff' },
    { id: 4, name: 'Resource D', color: '#239a21' },
    { id: 5, name: 'Resource E', color: '#ff4600' },
  ];

  myView: MbscEventcalendarView = { timeline: { type: 'day' } };

  addEvent(): void {
    const newEvent: MbscCalendarEvent = {
      // base properties
      title: 'Product planning',
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,17'),
      resource: 4,
      bufferBefore: 20,
      bufferAfter: 30,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    this.myEvents = [...this.myEvents, newEvent];
    this.calendar.navigateToEvent(newEvent);

    this.notify.toast({
      message: 'Event added',
    });
  }
}
