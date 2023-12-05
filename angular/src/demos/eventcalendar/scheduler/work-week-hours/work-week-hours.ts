import { Component, OnInit } from '@angular/core';
// import { MbscEventcalendarOptions, /* localeImport */ } from '../../mobiscroll.custom.min.js';
import {
  MbscEventcalendarOptions,
  Notifications,
  MbscEventCreateFailedEvent,
  MbscEventUpdateFailedEvent /* localeImport */,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'work-week-hours',
  templateUrl: './work-week-hours.html',
  providers: [Notifications, HttpClient],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  events: any;

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    dragToCreate: true,
    dragToMove: true,
    invalid: [
      {
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        type: 'lunch',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    view: {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
      },
    },
    onEventCreateFailed: (event: MbscEventCreateFailedEvent, inst: any) => {
      if (event.invalid['type'] === 'lunch') {
        this.notify.toast({
          message: "Can't create this task on " + (event.invalid.title || '').toLowerCase(),
        });
      }
    },
    onEventUpdateFailed: (event: MbscEventUpdateFailedEvent, inst: any) => {
      if (event.invalid['type'] === 'lunch') {
        this.notify.toast({
          message: "Can't schedule this task on " + (event.invalid.title || '').toLowerCase(),
        });
      }
    },
  };

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com//workday-events/?vers=5', 'callback').subscribe((resp: any) => {
      this.events = resp;
    });
  }
}
