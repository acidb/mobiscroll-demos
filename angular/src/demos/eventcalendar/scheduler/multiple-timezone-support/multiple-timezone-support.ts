import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, momentTimezone, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment-timezone';

setOptions({
  // locale,
  // theme
});

momentTimezone.moment = moment;

@Component({
  selector: 'app-scheduler-multiple-timezone-support',
  styleUrl: './multiple-timezone-support.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './multiple-timezone-support.html',
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,9)',
      title: 'Stakeholder mtg.',
      color: '#408cff',
    },
    {
      start: 'dyndatetime(y,m,d-1,18)',
      end: 'dyndatetime(y,m,d-1,19,30)',
      title: 'Wrapup mtg.',
      color: '#ecbc72',
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,18)',
      title: 'Business of Software Conference',
      color: '#ff6d42',
    },
    {
      start: 'dyndatetime(y,m,d+1,20)',
      end: 'dyndatetime(y,m,d+1,21,50)',
      title: 'Product Team mtg.',
      color: '#913aa7',
    },
    {
      start: 'dyndatetime(y,m,d+2,13)',
      end: 'dyndatetime(y,m,d+2,15)',
      title: 'Decision Making mtg.',
      color: '#5bb7c5',
    },
    {
      start: 'dyndatetime(y,m,d+3,13)',
      end: 'dyndatetime(y,m,d+3,14)',
      title: 'Quick mtg. with Martin',
      color: '#fd002f',
    },
    {
      start: 'dyndatetime(y,m,d+4,12)',
      end: 'dyndatetime(y,m,d+4,16)',
      color: '#50b166',
      title: 'Team-Building',
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
      schedule: { type: 'week' },
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
