import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-resource-background',
  styleUrl: './resource-background.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-background.html',
})
export class AppComponent implements OnInit {

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
    },
  };

  myResources: MbscResource[] = [{
    id: 1,
    name: 'Resource A',
    color: '#e20000',
    background: 'rgba(108, 166, 166, 0.37)',
    description: 'Full row background - with "background" property'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#1dab2f',
    cssClass: 'md-tick-border',
    description: 'Thicker borders - with "cssClass" property'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2',
    cssClass: 'md-resource-only-bg',
    description: 'Resource only background - with "cssClass" property'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#4981d6',
    cssClass: 'md-diff-custom-bg',
    description: 'Different resource/sidebar/grid background - with "cssClass" property'
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#d6d145',
  },
  {
    id: 7,
    name: 'Resource G',
    color: '#34c8e0',
  },
  {
    id: 8,
    name: 'Resource H',
    color: '#34c8e0',
    cssClass: 'md-row-only-bg',
    description: 'Grid only background - with "cssClass" property'
  }];

  myEvents: MbscCalendarEvent[] = [{
    start: 'dyndatetime(y,m,2)',
    end: 'dyndatetime(y,m,5)',
    title: 'Event 1',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,10,9)',
    end: 'dyndatetime(y,m,15,15)',
    title: 'Event 2',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,12)',
    end: 'dyndatetime(y,m,14)',
    title: 'Event 3',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,15,7)',
    end: 'dyndatetime(y,m,20,12)',
    title: 'Event 4',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,3)',
    end: 'dyndatetime(y,m,10)',
    title: 'Event 5',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,10,8)',
    end: 'dyndatetime(y,m,11,20)',
    title: 'Event 6',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,25)',
    end: 'dyndatetime(y,m,27)',
    title: 'Event 9',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,20)',
    end: 'dyndatetime(y,m,23)',
    title: 'Event 10',
    resource: 9,
  }];

  ngOnInit(): void {}
}
