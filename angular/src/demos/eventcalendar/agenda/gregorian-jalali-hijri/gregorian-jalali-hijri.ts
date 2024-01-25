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
  setOptions,
} from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-agenda-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  gregorianSettings: MbscEventcalendarOptions = {
    locale: localeEn,
    view: {
      calendar: {
        type: 'week',
      },
      agenda: {
        type: 'day',
      },
    },
  };

  jalaliSettings: MbscEventcalendarOptions = {
    calendarSystem: jalaliCalendar,
    locale: localeFa,
    view: {
      calendar: {
        type: 'week',
      },
      agenda: {
        type: 'day',
      },
    },
  };

  hijriSettings: MbscEventcalendarOptions = {
    calendarSystem: hijriCalendar,
    locale: localeAr,
    view: {
      calendar: {
        type: 'week',
      },
      agenda: {
        type: 'day',
      },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
