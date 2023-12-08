import { Component, OnInit } from '@angular/core';
import { setOptions, MbscEventcalendarOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'month-week-view',
  templateUrl: './month-week-view.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  oneWeekSettings: MbscEventcalendarOptions = {
    view: {
      calendar: { type: 'week' },
    },
  };

  twoWeekSettings: MbscEventcalendarOptions = {
    view: {
      calendar: { type: 'week', size: 2 },
    },
  };

  threeWeekSettings: MbscEventcalendarOptions = {
    view: {
      calendar: { type: 'week', size: 3 },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
