import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-switching-day-week-month-view',
  styleUrl: './switching-day-week-month-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './switching-day-week-month-view.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  view = 'month';
  calView: MbscEventcalendarView = {
    calendar: { type: 'month' },
    agenda: { type: 'month' },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'month':
          this.calView = {
            calendar: { type: 'month' },
            agenda: { type: 'month' },
          };
          break;
        case 'week':
          this.calView = {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          };
          break;
        case 'day':
          this.calView = {
            agenda: { type: 'day' },
          };
          break;
      }
    });
  }
}
