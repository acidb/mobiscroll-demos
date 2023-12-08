import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, setOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'daily-weekly-monthly-annual-agenda',
  templateUrl: './daily-weekly-monthly-annual-agenda.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  dailySettings: MbscEventcalendarOptions = {
    view: {
      agenda: { type: 'day' },
    },
  };

  weeklySettings: MbscEventcalendarOptions = {
    view: {
      agenda: { type: 'week' },
    },
  };

  monthlySettings: MbscEventcalendarOptions = {
    view: {
      agenda: { type: 'month' },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events-new/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
