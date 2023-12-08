import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscDatepicker /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'activity-calendar',
  styleUrl: './activity-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './activity-calendar.html',
})
export class AppComponent {
  activities = [
    {
      date: '2021-08-11T00:00',
      move: 200,
      exercise: 360,
      stand: 180,
    },
    {
      date: '2021-08-12T00:00',
      move: 360,
      exercise: 150,
      stand: 230,
    },
    {
      date: '2021-08-13T00:00',
      move: 180,
      exercise: 200,
      stand: 280,
    },
    {
      date: '2021-08-14T00:00',
      move: 120,
      exercise: 150,
      stand: 200,
    },
    {
      date: '2021-08-15T00:00',
      move: 320,
      exercise: 180,
      stand: 100,
    },
    {
      date: '2021-08-16T00:00',
      move: 120,
      exercise: 100,
      stand: 200,
    },
    {
      date: '2021-08-17T00:00',
      move: 230,
      exercise: 170,
      stand: 330,
    },
    {
      date: '2021-08-18T00:00',
      move: 320,
      exercise: 260,
      stand: 80,
    },
    {
      date: '2021-08-19T00:00',
      move: 200,
      exercise: 140,
      stand: 180,
    },
    {
      date: '2021-08-20T00:00',
      move: 360,
      exercise: 300,
      stand: 160,
    },
    {
      date: '2021-08-21T00:00',
      move: 80,
      exercise: 360,
      stand: 360,
    },
    {
      date: '2021-08-22T00:00',
      move: 220,
      exercise: 170,
      stand: 290,
    },
    {
      date: '2021-08-23T00:00',
      move: 120,
      exercise: 40,
      stand: 100,
    },
    {
      date: '2021-08-24T00:00',
      move: 120,
      exercise: 200,
      stand: 80,
    },
  ];

  getDeg(nr: number) {
    return {
      rotate1: nr > 180 ? 180 : nr,
      rotate2: nr > 180 ? nr - 180 : 0,
    };
  }

  getTransform(rotate: number) {
    return 'rotateZ(' + rotate + 'deg)';
  }

  getActivity(day: any) {
    return this.activities.find((obj) => {
      return +new Date(obj.date) === +day.date;
    });
  }
}
