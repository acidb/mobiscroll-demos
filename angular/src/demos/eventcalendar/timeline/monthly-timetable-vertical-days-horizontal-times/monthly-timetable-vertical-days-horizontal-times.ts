import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-monthly-timetable-vertical-days-horizontal-times',
  styleUrl: './monthly-timetable-vertical-days-horizontal-times.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './monthly-timetable-vertical-days-horizontal-times.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      resolutionHorizontal: 'hour',
      resolutionVertical: 'day',
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-vertical-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
