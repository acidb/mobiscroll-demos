import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-group-by-resource-by-day',
  templateUrl: './group-by-resource-by-day.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

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

  myResources = [
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

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/resource-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
