import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventcalendar-responsive-month-view',
  templateUrl: './responsive-month-view.html',
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
          calendar: {
            type: 'week',
          },
          agenda: {
            type: 'day',
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: {
            labels: true,
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
