import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-load-events-on-demand',
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
  myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  eventSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      timeline: { type: 'day' },
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

          for (const d of data) {
            newEvents.push({
              start: d.start,
              end: d.end,
              title: d.title,
              resource: d.resource,
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
