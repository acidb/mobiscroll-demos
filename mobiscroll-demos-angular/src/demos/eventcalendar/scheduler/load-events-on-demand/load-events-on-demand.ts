import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-scheduler-load-events-on-demand',
  templateUrl: './load-events-on-demand.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      scheduler: { type: 'day' },
    },
    onPageLoading: (args) => {
      const year = args.firstDay.getFullYear();
      const month = args.firstDay.getMonth();
      const day = args.firstDay.getDate();

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
            message: 'New events loaded',
          });
        });
    },
  };
}
