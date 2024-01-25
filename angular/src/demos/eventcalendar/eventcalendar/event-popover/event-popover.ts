import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-eventcalendar-event-popover',
  templateUrl: './event-popover.html',
  providers: [Notifications],
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
    // drag,
    view: {
      calendar: {
        popover: true,
        count: true,
      },
    },
    onEventClick: (event) => {
      this.notify.toast({
        message: event.event.title,
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
