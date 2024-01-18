import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-quarter-year-view',
  styleUrl: './quarter-year-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './quarter-year-view.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  type = 'quarter';
  calHeight = 'auto';

  view: MbscEventcalendarView = {
    calendar: { type: 'month', size: 3 },
  };

  setType(ev: any): void {
    switch (ev.target.value) {
      case 'quarter':
        this.view = { calendar: { type: 'month', size: 3 } };
        this.calHeight = 'auto';
        break;
      case 'year':
        this.view = { calendar: { type: 'year' } };
        this.calHeight = '100%';
        break;
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
