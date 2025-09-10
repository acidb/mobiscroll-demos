import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-month-week-view',
  templateUrl: './month-week-view.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
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
