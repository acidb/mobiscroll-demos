import { Component, OnInit } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'multiple-days-weeks-months-quarters-years-variable-resolution',
  templateUrl: './multiple-days-weeks-months-quarters-years-variable-resolution.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      size: 3,
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources = [
    {
      id: 1,
      name: 'Flatiron Room',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'The Capital City',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Heroes Square',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Thunderdome',
      color: '#ff4600',
    },
    {
      id: 5,
      name: 'King’s Landing',
      color: '#239a21',
    },
    {
      id: 6,
      name: 'Gathering Field',
      color: '#8f1ed6',
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/daily-weekly-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
