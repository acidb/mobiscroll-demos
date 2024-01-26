import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-date-object-iso-8601-moment',
  templateUrl: './date-object-ISO-8601-moment.html',
})
export class AppComponent {
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  selectedDateObj = new Date(2020, 4, 19);
  selectedDateISO = '2020-05-20';
  selectedDateMoment: any = moment([2020, 4, 21]);

  dateObjEvents: MbscCalendarEvent[] = [
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ];

  dateISOEvents: MbscCalendarEvent[] = [
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      color: '#a71111',
    },
  ];

  dateMomentEvents: MbscCalendarEvent[] = [
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ];

  addDateObjEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      title: 'New event',
      color: '#35bb5a',
    };
    this.dateObjEvents = [...this.dateObjEvents, newEvent];
    this.selectedDateObj = new Date(2020, 4, 19);
  }

  addDateISOEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      title: 'New event',
      color: '#a71111',
    };
    this.dateISOEvents = [...this.dateISOEvents, newEvent];
    this.selectedDateISO = '2020-05-20';
  }

  addDateMomentEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      title: 'New event',
      color: '#913aa7',
    };
    this.dateMomentEvents = [...this.dateMomentEvents, newEvent];
    this.selectedDateMoment = moment([2020, 4, 21]);
  }
}
