import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-agenda-daily-agenda-with-week-calendar',
  templateUrl: './daily-agenda-with-week-calendar.html',
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    view: {
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    },
    onEventClick: (event) => {
      this.notify.toast({
        message: event.event.title,
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
