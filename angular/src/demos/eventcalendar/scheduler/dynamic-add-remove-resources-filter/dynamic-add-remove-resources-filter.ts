import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

const resources = [
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4',
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9',
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef',
  },
];

@Component({
  selector: 'app-scheduler-dynamic-add-remove-resources-filter',
  styleUrl: './dynamic-add-remove-resources-filter.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-add-remove-resources-filter.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  participants: { [key: number]: boolean } = {
    1: true,
    2: true,
    3: true,
  };

  view: MbscEventcalendarView = {
    schedule: {
      type: 'week',
      allDay: false,
      startDay: 1,
      endDay: 5,
      startTime: '08:00',
      endTime: '17:00',
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources = resources;

  filter(): void {
    this.myResources = resources.filter((r) => this.participants[r.id]);
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/resource-events-shared/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
