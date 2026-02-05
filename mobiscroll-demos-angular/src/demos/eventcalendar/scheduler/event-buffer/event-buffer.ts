import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-buffer',
  templateUrl: './event-buffer.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  myEvents = [
    {
      bufferAfter: 30,
      color: '#4981d6',
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,8'),
      title: 'Morning routine',
    },
    {
      bufferAfter: 120,
      bufferBefore: 30,
      color: '#f7961e',
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,20'),
      title: 'Friends binge marathon',
    },
    {
      bufferAfter: 120,
      bufferBefore: 30,
      color: '#4981d6',
      start: dyndatetime('y,m,d+1,13'),
      end: dyndatetime('y,m,d+1,21'),
      title: 'Mastering CSS class',
    },
    {
      bufferAfter: 10,
      bufferBefore: 15,
      color: '#76e083',
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,10'),
      title: 'Product team mtg.',
    },
    {
      bufferAfter: 20,
      bufferBefore: 30,
      color: '#e20000',
      start: dyndatetime('y,m,d+2,16,30'),
      end: dyndatetime('y,m,d+2,19,30'),
      title: 'Cinema afternoon',
    },
    {
      bufferAfter: 10,
      bufferBefore: 10,
      color: '#76e083',
      start: dyndatetime('y,m,d-2,8,30'),
      end: dyndatetime('y,m,d-2,10'),
      title: 'Quick mtg. with Martin',
    },
    {
      bufferBefore: 45,
      color: '#e20000',
      start: dyndatetime('y,m,d,9,30'),
      end: dyndatetime('y,m,d,12'),
      title: 'Product team mtg.',
    },
  ];

  view: MbscEventcalendarView = {
    scheduler: {
      type: 'week',
    },
  };
}
