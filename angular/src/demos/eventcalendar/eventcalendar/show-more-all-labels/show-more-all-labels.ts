import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, MbscCalendarEvent, setOptions /* localeImport */, MbscEventcalendarView } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'show-more-all-labels',
  templateUrl: './show-more-all-labels.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  allLabelsView: MbscEventcalendarView = { calendar: { type: 'month', labels: 'all' } };
  nrLabelsView: MbscEventcalendarView = { calendar: { type: 'month', labels: 3 } };
  fitLabelsView: MbscEventcalendarView = { calendar: { labels: true } };
  allLabelsWeekView: MbscEventcalendarView = { calendar: { type: 'week', labels: 'all' } };
  nrLabelsWeekView: MbscEventcalendarView = { calendar: { type: 'week', labels: 3 } };
  fitLabelsWeekView: MbscEventcalendarView = { calendar: { type: 'week', labels: true } };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
