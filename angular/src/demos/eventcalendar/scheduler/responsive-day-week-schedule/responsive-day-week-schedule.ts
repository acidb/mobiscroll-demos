import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'responsive-day-week-schedule',
  templateUrl: './responsive-day-week-schedule.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    responsive: {
      xsmall: {
        view: {
          schedule: {
            type: 'day',
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          schedule: {
            type: 'week',
          },
        },
      },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
