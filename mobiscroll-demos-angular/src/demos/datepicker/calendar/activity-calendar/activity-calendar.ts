import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-activity-calendar',
  styleUrl: './activity-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './activity-calendar.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  activities = [
    {
      date: dyndatetime('y,m,d-6'),
      move: 200,
      exercise: 360,
      stand: 180,
    },
    {
      date: dyndatetime('y,m,d-5'),
      move: 360,
      exercise: 150,
      stand: 230,
    },
    {
      date: dyndatetime('y,m,d-4'),
      move: 180,
      exercise: 200,
      stand: 280,
    },
    {
      date: dyndatetime('y,m,d-3'),
      move: 120,
      exercise: 150,
      stand: 200,
    },
    {
      date: dyndatetime('y,m,d-2'),
      move: 320,
      exercise: 180,
      stand: 100,
    },
    {
      date: dyndatetime('y,m,d-1'),
      move: 120,
      exercise: 100,
      stand: 200,
    },
    {
      date: dyndatetime('y,m,d'),
      move: 230,
      exercise: 170,
      stand: 330,
    },
    {
      date: dyndatetime('y,m,d+1'),
      move: 320,
      exercise: 260,
      stand: 80,
    },
    {
      date: dyndatetime('y,m,d+2'),
      move: 200,
      exercise: 140,
      stand: 180,
    },
    {
      date: dyndatetime('y,m,d+3'),
      move: 360,
      exercise: 300,
      stand: 160,
    },
    {
      date: dyndatetime('y,m,d+4'),
      move: 80,
      exercise: 360,
      stand: 360,
    },
    {
      date: dyndatetime('y,m,d+5'),
      move: 220,
      exercise: 170,
      stand: 290,
    },
    {
      date: dyndatetime('y,m,d+6'),
      move: 120,
      exercise: 40,
      stand: 100,
    },
    {
      date: dyndatetime('y,m,d+7'),
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
    return this.activities.find((obj) => +new Date(obj.date) === +day.date);
  }
}
