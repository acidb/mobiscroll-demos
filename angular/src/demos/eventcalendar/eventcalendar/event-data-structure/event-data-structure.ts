import { Component } from '@angular/core';
import { setOptions, Notifications /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'event-data-structure',
  templateUrl: './event-data-structure.html',
  providers: [Notifications],
})
export class AppComponent {
  selectedDate: Date;

  constructor(private notify: Notifications) {
    this.selectedDate = new Date();
  }

  myEvents = [
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ];

  view = {
    calendar: {
      labels: true,
    },
  };

  addEvent(): void {
    const newEvent = {
      // base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    this.selectedDate = new Date(2018, 11, 21);
    this.myEvents = [...this.myEvents, newEvent];

    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Event added',
    });
  }
}
