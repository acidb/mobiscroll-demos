import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, MbscModule, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-eventcalendar-load-events-on-demand',
  templateUrl: './load-events-on-demand.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
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
            message: 'New events loaded',
          });
        });
    },
  };
}
