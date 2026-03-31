import { CommonModule } from '@angular/common';
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
  MbscModule,
  setOptions,
} from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-timeline-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  myEvents: MbscCalendarEvent[] = [];

  gregorianOptions: MbscEventcalendarOptions = {
    locale: localeEn,
    view: {
      scheduler: { type: 'day' },
    },
  };

  jalaliOptions: MbscEventcalendarOptions = {
    calendarSystem: jalaliCalendar,
    locale: localeFa,
    view: {
      scheduler: { type: 'day' },
    },
  };

  hijriOptions: MbscEventcalendarOptions = {
    calendarSystem: hijriCalendar,
    locale: localeAr,
    view: {
      scheduler: { type: 'day' },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
