import { Component } from '@angular/core';
import { MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'date-object-ISO-8601-moment',
  templateUrl: './date-object-ISO-8601-moment.html',
})
export class AppComponent {
  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
    },
  };

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

  dateObjData = [
    {
      start: new Date(2020, 4, 19, 9),
      end: new Date(2020, 4, 19, 11),
      title: 'General orientation',
      resource: 2,
    },
  ];
  selectedObj = new Date(2020, 4, 19);

  dateStrData = [
    {
      start: '2020-05-20T09:00:00',
      end: '2020-05-20T11:00:00',
      title: 'Clever Conference',
      resource: 2,
    },
  ];
  selectedISO = '2020-05-20';

  momentData = [
    {
      start: moment([2020, 4, 21, 9]),
      end: moment([2020, 4, 21, 11]),
      title: 'Product team mtg.',
      resource: 2,
    },
  ];
  selectedMoment: any = moment([2020, 4, 21]);

  addDate(): void {
    const newEvent = {
      start: new Date(2020, 4, 19, 11, 15),
      end: new Date(2020, 4, 19, 13, 45),
      title: 'New Event',
      resource: 4,
    };
    this.dateObjData = [...this.dateObjData, newEvent];
    this.selectedObj = new Date(2020, 4, 19);
  }

  addISO(): void {
    const newEvent = {
      start: '2020-05-20T15:30:00',
      end: '2020-05-20T18:00:00',
      title: 'New Event',
      resource: 1,
    };
    this.dateStrData = [...this.dateStrData, newEvent];
    this.selectedISO = '2020-05-20';
  }

  addMoment(): void {
    const newEvent = {
      start: moment([2020, 4, 21, 12]),
      end: moment([2020, 4, 21, 15]),
      title: 'New Event',
      resource: 5,
    };
    this.momentData = [...this.momentData, newEvent];
    this.selectedMoment = moment([2020, 4, 21]);
  }
}
