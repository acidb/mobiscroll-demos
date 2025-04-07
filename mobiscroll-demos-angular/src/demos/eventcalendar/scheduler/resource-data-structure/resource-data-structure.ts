import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-resource-data-structure',
  styleUrl: './resource-data-structure.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-data-structure.html',
  standalone: false,
})
export class AppComponent {
  myResources: MbscResource[] = [
    {
      // base properties
      id: 1,
      name: 'Ryan',
      color: '#ca4747',
      eventCreation: true,
      // add any property you'd like
      title: 'UX Designer',
      job: 'Apollo Project',
    },
    {
      // base properties
      id: 2,
      name: 'Kate',
      color: '#cc9900',
      eventCreation: true,
      // add any property you'd like
      title: 'Product Developer',
      job: 'Yorick Project',
    },
    {
      // base properties
      id: 3,
      name: 'John',
      color: '#01adff',
      eventCreation: true,
      // add any property you'd like
      title: 'Network Administrator',
      job: 'Titus Project',
    },
  ];

  myView: MbscEventcalendarView = {
    schedule: {
      type: 'day',
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18'),
      title: 'General orientation',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,11'),
      text: 'Stakeholder mtg.',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,13,30'),
      end: dyndatetime('y,m,d,15'),
      text: "Lunch @ Butcher's",
      resource: 3,
    },
  ];
}
