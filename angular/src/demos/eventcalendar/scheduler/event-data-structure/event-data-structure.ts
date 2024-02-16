import { Component } from '@angular/core';
import { MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-scheduler-event-data-structure',
  templateUrl: './event-data-structure.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myEvents = [
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
      bufferBefore: 20,
      bufferAfter: 30,
    },
  ];

  selectedDate: any;

  view: MbscEventcalendarView = {
    schedule: {
      type: 'day',
    },
  };

  addEvent(): void {
    const newEvent = {
      // base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      bufferBefore: 20,
      bufferAfter: 30,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    this.selectedDate = new Date(2018, 11, 21);
    this.myEvents = [...this.myEvents, newEvent];

    this.notify.toast({
      message: 'Event added',
    });
  }
}
