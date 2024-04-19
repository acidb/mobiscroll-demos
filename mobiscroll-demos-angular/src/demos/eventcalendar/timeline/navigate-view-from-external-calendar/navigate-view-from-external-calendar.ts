import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscDateType, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-external-navigation',
  styleUrl: './navigate-view-from-external-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigate-view-from-external-calendar.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dayView: MbscEventcalendarView = { timeline: { type: 'day' } };
  myEvents: MbscCalendarEvent[] = [];
  selectedDate: MbscDateType = new Date();
  myResources: MbscResource[] = [
    { id: 1, name: 'Resource 1', color: 'red' },
    { id: 2, name: 'Resource 2', color: 'orange' },
    { id: 3, name: 'Resource 3', color: 'blue' },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/filter-resource-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
