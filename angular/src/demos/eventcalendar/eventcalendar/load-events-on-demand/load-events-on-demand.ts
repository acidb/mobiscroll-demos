import { Component } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

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
    // locale,
    // theme,
    view: {
      calendar: { labels: true },
    },
    onPageLoading: (event: any) => {
      const year = event.month.getFullYear();
      const month = event.month.getMonth();

      this.http
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5', 'callback')
        .subscribe((data) => {
          this.myEvents = data;

          this.notify.toast({
            //<hidden>
            // theme,//</hidden>
            message: 'New events loaded',
          });
        });
    },
  };
}
