import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-agenda-load-events-from-remote-api',
  styleUrl: './load-events-from-remote-api.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './load-events-from-remote-api.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    view: {
      agenda: { type: 'month' },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
