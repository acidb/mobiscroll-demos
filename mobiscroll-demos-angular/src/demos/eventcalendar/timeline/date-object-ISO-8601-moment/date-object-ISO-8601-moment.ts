import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-date-object-iso-8601-moment',
  templateUrl: './date-object-ISO-8601-moment.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  myView: MbscEventcalendarView = { timeline: { type: 'day' } };

  myResources: MbscResource[] = [
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

  selectedDateObj = new Date(2020, 4, 19);
  selectedDateISO = '2020-05-20';
  selectedDateMoment: moment.Moment = moment([2020, 4, 21]);

  dateObjEvents: MbscCalendarEvent[] = [
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      resource: 2,
    },
  ];

  dateISOEvents: MbscCalendarEvent[] = [
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      resource: 2,
    },
  ];

  dateMomentEvents: MbscCalendarEvent[] = [
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      resource: 2,
    },
  ];

  addDateObjEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      title: 'New event',
      resource: 4,
    };
    this.dateObjEvents = [...this.dateObjEvents, newEvent];
    this.selectedDateObj = new Date(2020, 4, 19);
  }

  addDateISOEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      title: 'New event',
      resource: 1,
    };
    this.dateISOEvents = [...this.dateISOEvents, newEvent];
    this.selectedDateISO = '2020-05-20';
  }

  addDateMomentEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      title: 'New event',
      resource: 5,
    };
    this.dateMomentEvents = [...this.dateMomentEvents, newEvent];
    this.selectedDateMoment = moment([2020, 4, 21]);
  }
}