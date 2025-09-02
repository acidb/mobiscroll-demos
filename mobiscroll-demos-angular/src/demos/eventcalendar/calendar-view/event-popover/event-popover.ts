import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, MbscModule, Notifications /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-eventcalendar-event-popover',
  templateUrl: './event-popover.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
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
    onEventClick: (args) => {
      this.notify.toast({
        message: args.event.title,
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
