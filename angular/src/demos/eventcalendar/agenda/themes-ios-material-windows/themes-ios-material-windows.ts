import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale
});

@Component({
  selector: 'app-agenda-themes-ios-material-windows',
  styleUrl: './themes-ios-material-windows.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './themes-ios-material-windows.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  theme = 'auto';
  themeVariant: 'auto' | 'light' | 'dark' = 'auto';

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
