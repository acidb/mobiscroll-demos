import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'load-events-on-demand',
  templateUrl: './load-events-on-demand.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'day' },
    },
    onPageLoading: (event) => {
      const year = event.firstDay.getFullYear();
      const month = event.firstDay.getMonth();
      const day = event.firstDay.getDate();

      this.http
        .jsonp<MbscCalendarEvent[]>(
          'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
          'callback',
        )
        .subscribe((data) => {
          const newEvents = [];

          for (const value of data) {
            newEvents.push({
              start: value.start,
              end: value.end || '',
              allDay: value.allDay,
              title: value.title,
              color: value.color,
            });
          }

          this.myEvents = newEvents;

          this.notify.toast({
            //<hidden>
            // theme,//</hidden>
            message: 'New events loaded',
          });
        });
    },
  };
}
