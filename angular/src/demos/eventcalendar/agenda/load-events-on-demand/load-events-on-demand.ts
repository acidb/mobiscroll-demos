import { Component, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-load-events-on-demand',
  styleUrl: './load-events-on-demand.css',
  encapsulation: ViewEncapsulation.None,
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
    // locale,
    // theme,
    view: {
      agenda: { type: 'month' },
    },
    onPageLoading: (event: any) => {
      const year = event.firstDay.getFullYear();
      const month = event.firstDay.getMonth();

      this.http
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5', 'callback')
        .subscribe((data: any) => {
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
