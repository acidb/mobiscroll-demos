import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-full-event-customization',
  styleUrl: './full-event-customization.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './full-event-customization.html',
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
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/agenda-events/', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
