import { Component, OnInit } from '@angular/core';
import {
  setOptions,
  MbscEventcalendarOptions,
  MbscCalendarEvent,
  jalaliCalendar,
  hijriCalendar,
  localeFa,
  localeAr,
  localeEn,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // theme
});

@Component({
  selector: 'gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  gregorianSettings: MbscEventcalendarOptions = {
    // locale
  };

  jalaliSettings: MbscEventcalendarOptions = {
    calendarSystem: jalaliCalendar,
    locale: localeFa,
  };

  hijriSettings: MbscEventcalendarOptions = {
    calendarSystem: hijriCalendar,
    locale: localeAr,
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
