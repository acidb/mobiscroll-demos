import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscPageLoadingEvent, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const resourceNr = 200;
const eventsNr = 10000;
const myResources: any[] = [];
const myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

for (let i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i });
}

@Component({
  selector: 'app-timeline-loading-big-data-sets',
  styleUrl: './loading-big-data-sets.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './loading-big-data-sets.html',
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [];

  myResources = myResources;

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'year',
      eventList: true,
    },
  };

  loadEvents(args: MbscPageLoadingEvent) {
    setTimeout(() => {
      const newEvents: MbscCalendarEvent[] = [];
      const year = args.firstDay.getFullYear();
      // Generate random events
      for (let i = 0; i < eventsNr; i++) {
        const day = getRandomInt(1, 31);
        const length = getRandomInt(2, 5);
        const resource = getRandomInt(1, resourceNr + 1);
        const month = getRandomInt(0, 12);
        const color = getRandomInt(0, 6);
        newEvents.push({
          color: myEventColors[color],
          end: new Date(year, month, day + length),
          resource: resource,
          start: new Date(year, month, day),
          title: 'Event ' + i,
        });
      }
      this.myEvents = newEvents;
    });
  }
}
