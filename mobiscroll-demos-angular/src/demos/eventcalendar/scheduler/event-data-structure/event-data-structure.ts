import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscModule,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-scheduler-event-data-structure',
  styleUrl: './event-data-structure.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-data-structure.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
      bufferBefore: 20,
      bufferAfter: 30,
    },
  ];

  myView: MbscEventcalendarView = { schedule: { type: 'day' } };

  addEvent(): void {
    const newEvent: MbscCalendarEvent = {
      // Base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      bufferBefore: 20,
      bufferAfter: 30,
      // Add any property you'd like
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
