import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-resource-header-template',
  styleUrl: './resource-header-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-header-template.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startDay: 1,
      endDay: 5,
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources = [
    {
      id: 1,
      name: 'Flatiron Room',
      seats: 90,
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'The Capital City',
      seats: 250,
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Heroes Square',
      seats: 400,
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Thunderdome',
      seats: 1200,
      color: '#239a21',
    },
    {
      id: 5,
      name: 'King’s Landing',
      seats: 550,
      color: '#ff4600',
    },
    {
      id: 6,
      name: 'Gathering Field',
      seats: 900,
      color: '#8f1ed6',
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/daily-weekly-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
