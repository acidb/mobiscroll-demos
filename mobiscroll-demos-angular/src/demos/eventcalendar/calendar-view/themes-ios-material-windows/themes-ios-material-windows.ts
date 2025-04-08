import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale
});

@Component({
  selector: 'app-eventcalendar-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  theme = 'material'; // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
  themeVariant: any = 'dark'; // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

  view: MbscEventcalendarView = {
    calendar: { labels: true },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
