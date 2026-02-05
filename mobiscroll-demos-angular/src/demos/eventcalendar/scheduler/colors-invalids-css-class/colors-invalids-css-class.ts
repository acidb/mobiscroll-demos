import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-colors-invalids-css-class',
  styleUrl: './colors-invalids-css-class.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './colors-invalids-css-class.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  calendarSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      scheduler: {
        allDay: false,
        type: 'week',
        startDay: 1,
        endDay: 5,
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
        start: '03:00',
        end: '10:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO',
        },
        cssClass: 'md-rect-bg',
      },
      {
        start: '16:00',
        end: '22:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TH',
        },
        cssClass: 'md-rect-bg',
      },
      {
        start: '15:00',
        end: '21:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        start: '04:00',
        end: '10:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'FR',
        },
        cssClass: 'md-stripes-bg',
      },
      {
        start: '02:00',
        end: '09:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'TU',
        },
        cssClass: 'md-dots-bg',
      },
      {
        start: '14:00',
        end: '20:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'WE',
        },
        cssClass: 'md-dots-bg',
      },
    ],
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/workday-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
