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

  view: MbscEventcalendarView = {
    // locale,
    schedule: { type: 'week' },
  };
  theme = 'material'; // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
  themeVariant: any = 'dark'; // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
