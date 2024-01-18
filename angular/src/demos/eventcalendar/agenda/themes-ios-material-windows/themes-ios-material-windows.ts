import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale
});

@Component({
  selector: 'app-agenda-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  theme = 'material'; // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
  themeVariant: any = 'dark'; // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

  view: MbscEventcalendarView = {
    agenda: { type: 'month' },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
