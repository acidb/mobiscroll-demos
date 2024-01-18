import { Component } from '@angular/core';
import { MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-date-object-ISO-8601-moment',
  templateUrl: './date-object-ISO-8601-moment.html',
})
export class AppComponent {
  view: MbscEventcalendarView = {
    schedule: {
      type: 'week',
    },
  };

  dateObjData = [
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ];
  selectedObj = new Date(2020, 4, 19);

  dateStrData = [
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      color: '#a71111',
    },
  ];
  selectedISO = '2020-05-20';

  momentData = [
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ];
  selectedMoment: any = moment([2020, 4, 21]);

  addDate(): void {
    const newEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      title: 'New event',
      color: '#35bb5a',
    };
    this.dateObjData = [...this.dateObjData, newEvent];
    this.selectedObj = new Date(2020, 4, 19);
  }

  addISO(): void {
    const newEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      title: 'New event',
      color: '#a71111',
    };
    this.dateStrData = [...this.dateStrData, newEvent];
    this.selectedISO = '2020-05-20';
  }

  addMoment(): void {
    const newEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      title: 'New event',
      color: '#913aa7',
    };
    this.momentData = [...this.momentData, newEvent];
    this.selectedMoment = moment([2020, 4, 21]);
  }
}
