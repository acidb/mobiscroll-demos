import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'show-hide-hours-days',
  templateUrl: './show-hide-hours-days.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  events: any;

  eventSettings: MbscEventcalendarOptions = {
    view: {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
        timeCellStep: 30,
        timeLabelStep: 30,
      },
    },
  };

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com//workday-events/?vers=5', 'callback').subscribe((resp: any) => {
      this.events = resp;
    });
  }
}
