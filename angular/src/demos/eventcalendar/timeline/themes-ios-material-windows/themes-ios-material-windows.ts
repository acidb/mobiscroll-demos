import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

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
  view: MbscEventcalendarView = {
    // locale,
    timeline: { type: 'day' },
  };
  theme = 'material'; // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
  themeVariant: any = 'dark'; // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
