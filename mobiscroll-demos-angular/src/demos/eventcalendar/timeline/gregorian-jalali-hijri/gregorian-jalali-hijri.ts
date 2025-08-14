import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeEn,
  localeFa,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
  setOptions,
} from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-agenda-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  myEvents: MbscCalendarEvent[] = [];
  myResources: MbscResource[] = [
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

  gregorianOptions: MbscEventcalendarOptions = {
    locale: localeEn,
    view: {
      timeline: { type: 'day' },
    },
  };

  jalaliOptions: MbscEventcalendarOptions = {
    calendarSystem: jalaliCalendar,
    locale: localeFa,
    view: {
      timeline: { type: 'day' },
    },
  };

  hijriOptions: MbscEventcalendarOptions = {
    calendarSystem: hijriCalendar,
    locale: localeAr,
    view: {
      timeline: { type: 'day' },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
