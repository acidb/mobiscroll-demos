import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-colors-invalids-css-class',
  styleUrl: './colors-invalids-css-class.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './colors-invalids-css-class.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  calendarSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
      },
    },
    invalid: [
      {
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
        cssClass: 'md-lunch-break-class mbsc-flex',
      },
    ],
    colors: [
      {
        resource: 2,
        start: '09:00',
        end: '11:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO',
        },
        cssClass: 'md-rect-bg',
      },
      {
        resource: 1,
        start: '10:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'WE',
        },
        cssClass: 'md-rect-bg',
      },
      {
        resource: 3,
        start: '14:00',
        end: '17:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TH',
        },
        cssClass: 'md-rect-bg',
      },
      {
        resource: 4,
        start: '13:00',
        end: '18:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO',
        },
        cssClass: 'md-rect-bg',
      },
      {
        resource: 1,
        start: '09:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'FR',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        resource: 3,
        start: '09:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TU',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        resource: 5,
        start: '10:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        resource: 5,
        start: '13:00',
        end: '17:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TU',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        resource: 1,
        start: '09:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TH',
        },
        cssClass: 'md-dots-bg',
      },
      {
        resource: 2,
        start: '06:00',
        end: '12:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TU',
        },
        cssClass: 'md-dots-bg',
      },
      {
        resource: 4,
        start: '15:00',
        end: '17:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'FR',
        },
        cssClass: 'md-dots-bg',
      },
      {
        resource: 4,
        start: '14:00',
        end: '18:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'WE',
        },
        cssClass: 'md-dots-bg',
      },
    ],
    resources: [
      {
        id: 1,
        color: '#ff0101',
        name: 'Resource A',
      },
      {
        id: 2,
        color: '#239a21',
        name: 'Resource B',
      },
      {
        id: 3,
        color: '#8f1ed6',
        name: 'Resource C',
      },
      {
        id: 4,
        color: '#01adff',
        name: 'Resource D',
      },
      {
        id: 5,
        color: '#d8ca1a',
        name: 'Resource E',
      },
    ],
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
