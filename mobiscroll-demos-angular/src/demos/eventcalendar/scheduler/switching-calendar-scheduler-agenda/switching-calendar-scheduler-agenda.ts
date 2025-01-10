import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-switching-calendar-scheduler-agenda',
  styleUrl: './switching-calendar-scheduler-agenda.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './switching-calendar-scheduler-agenda.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  view = 'month';
  calView: MbscEventcalendarView = {
    calendar: { labels: true },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'year':
          this.calView = {
            calendar: { type: 'year' },
          };
          break;
        case 'month':
          this.calView = {
            calendar: { labels: true },
          };
          break;
        case 'week':
          this.calView = {
            schedule: { type: 'week' },
          };
          break;
        case 'day':
          this.calView = {
            schedule: { type: 'day' },
          };
          break;
        case 'agenda':
          this.calView = {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          };
          break;
      }
    });
  }
}
