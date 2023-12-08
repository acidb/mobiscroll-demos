import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mobile-month-view',
  styleUrl: './mobile-month-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-month-view.html',
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
    view: {
      calendar: { type: 'month' },
      agenda: { type: 'month' },
    },
    onEventClick: (event, inst) => {
      this.notify.toast({
        //<hidden>
        // theme,//</hidden>
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
