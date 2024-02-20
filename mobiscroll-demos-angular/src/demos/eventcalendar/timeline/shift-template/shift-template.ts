import { Component, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscCalendarEvent, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-shift-template',
  styleUrl: './shift-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './shift-template.html',
})
export class AppComponent {
  shifts: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,7)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,7)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,18)',
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,13)',
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+1,12)',
      end: 'dyndatetime(y,m,d+1,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,7)',
      end: 'dyndatetime(y,m,d+2,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+2,12)',
      end: 'dyndatetime(y,m,d+2,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,12)',
      end: 'dyndatetime(y,m,d+2,18)',
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+3,7)',
      end: 'dyndatetime(y,m,d+3,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+3,12)',
      end: 'dyndatetime(y,m,d+3,18)',
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'week',
        eventList: true,
        startDay: 1,
        endDay: 5,
      },
    },
    dragToResize: false,
    dragToMove: true,
    clickToCreate: true,
    resources: [
      {
        id: 1,
        name: 'Ryan',
        color: '#e20000',
        title: 'Cloud System Engineer',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#60e81a',
        title: 'Help Desk Specialist',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#3ba7ff',
        title: 'Application Developer',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
    ],
    colors: [
      {
        background: '#a5ceff4d',
        slot: 1,
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        background: '#f7f7bb4d',
        slot: 2,
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    slots: [
      {
        id: 1,
        name: 'Morning',
      },
      {
        id: 2,
        name: 'Afternoon',
      },
    ],
    onEventUpdate: (args: any) => {
      const event = args.event;
      const index = this.shifts.findIndex((x) => x.id === event.id);
      this.shifts[index].title = event.slot === 1 ? '07:00 - 13:00' : '12:00 - 18:00';
    },
  };

  defaultShift(ev: any): any {
    const d = ev.start;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start,
      end,
    };
  }
}
