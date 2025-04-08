import { Component } from '@angular/core';
import { MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-buffer',
  templateUrl: './event-buffer.html',
  standalone: false,
})
export class AppComponent {
  myEvents = [
    {
      bufferAfter: 30,
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,8'),
      title: 'Morning routine',
      resource: 1,
    },
    {
      bufferAfter: 120,
      bufferBefore: 30,
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,20'),
      title: 'Friends binge marathon',
      resource: 4,
    },
    {
      bufferAfter: 120,
      bufferBefore: 30,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,21'),
      title: 'Mastering CSS class',
      resource: 2,
    },
    {
      bufferAfter: 10,
      bufferBefore: 15,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,10'),
      title: 'Product team mtg.',
      resource: 2,
    },
    {
      bufferAfter: 20,
      bufferBefore: 30,
      start: dyndatetime('y,m,d,16,30'),
      end: dyndatetime('y,m,d,19,30'),
      title: 'Cinema afternoon',
      resource: 3,
    },
    {
      bufferAfter: 10,
      bufferBefore: 10,
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,10'),
      title: 'Quick mtg. with Martin',
      resource: 3,
    },
    {
      bufferBefore: 45,
      start: dyndatetime('y,m,d,9,30'),
      end: dyndatetime('y,m,d,12'),
      title: 'Product team mtg.',
      resource: 4,
    },
  ];

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

  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
    },
  };
}
