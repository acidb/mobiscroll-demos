import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscEventcalendarOptions,
  MbscCalendarEvent,
  MbscResource,
  setOptions,
  momentTimezone /* localeImport */,
} from '@mobiscroll/angular';
import moment from 'moment-timezone';

setOptions({
  // locale,
  // theme
});

momentTimezone.moment = moment;

@Component({
  selector: 'multiple-timezone-support',
  styleUrl: './multiple-timezone-support.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './multiple-timezone-support.html',
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,9)',
      title: 'Stakeholder mtg.',
      resource: [1, 2, 4],
    },
    {
      start: 'dyndatetime(y,m,d+3,18)',
      end: 'dyndatetime(y,m,d+3,19, 30)',
      title: 'Wrapup mtg.',
      resource: [2, 3, 5],
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,18)',
      title: 'Business of Software Conference',
      resource: [1, 3],
    },
    {
      start: 'dyndatetime(y,m,d+1,20)',
      end: 'dyndatetime(y,m,d+1,21, 50)',
      title: 'Product Team mtg.',
      resource: [2, 3, 4],
    },
    {
      start: 'dyndatetime(y,m,d-1,13)',
      end: 'dyndatetime(y,m,d-1,15)',
      title: 'Decision Making mtg.',
      resource: [1, 4, 5],
    },
    {
      start: 'dyndatetime(y,m,d+1,13)',
      end: 'dyndatetime(y,m,d+1,14)',
      title: 'Quick mtg. with Martin',
      resource: 3,
    },
    {
      start: 'dyndatetime(y,m,d+3,12)',
      end: 'dyndatetime(y,m,d+3,16)',
      title: 'Team-Building',
      resource: [1, 2, 3, 4, 5],
    },
  ];

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

  timezone = 'utc';
  timezones = [
    {
      text: 'America/Los Angeles',
      value: 'America/Los_Angeles',
    },
    {
      text: 'America/Chicago',
      value: 'America/Chicago',
    },
    {
      text: 'America/New York',
      value: 'America/New_York',
    },
    {
      text: 'UTC',
      value: 'utc',
    },
    {
      text: 'Europe/London',
      value: 'Europe/London',
    },
    {
      text: 'Europe/Berlin',
      value: 'Europe/Berlin',
    },
    {
      text: 'Europe/Bucharest',
      value: 'Europe/Bucharest',
    },
    {
      text: 'Asia/Shanghai',
      value: 'Asia/Shanghai',
    },
    {
      text: 'Asia/Tokyo',
      value: 'Asia/Tokyo',
    },
  ];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      timeline: { type: 'week' },
    },
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    timezonePlugin: momentTimezone,
    dataTimezone: 'utc',
  };

  onChange(ev: any) {
    this.timezone = ev.value;
  }
}
