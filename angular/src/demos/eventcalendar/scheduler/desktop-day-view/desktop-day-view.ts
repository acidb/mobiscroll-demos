import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-scheduler-desktop-day-view',
  templateUrl: './desktop-day-view.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      schedule: { type: 'day' },
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
