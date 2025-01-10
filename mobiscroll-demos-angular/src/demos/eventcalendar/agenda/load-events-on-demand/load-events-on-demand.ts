import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-load-events-on-demand',
  styleUrl: './load-events-on-demand.css',
  encapsulation: ViewEncapsulation.None,
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
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  onPageLoading(event: MbscPageLoadingEvent): void {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();

    this.http
      .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5', 'callback')
      .subscribe((resp) => {
        this.myEvents = resp;
        this.notify.toast({
          message: 'New events loaded',
        });
      });
  }
}
