import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'timeline-time-grid',
  styleUrl: './timeline-time-grid.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline-time-grid.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Ashley',
      color: '#01adff',
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
