import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscVirtualLoadEvent,
  Notifications,
  setOptions,
  /* localeImport */
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-load-resources-on-demand',
  templateUrl: './load-resources-on-scroll.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    public notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];
  myResources = [
    { id: 1, name: 'Resource 1' },
    { id: 2, name: 'Resource 2' },
    { id: 3, name: 'Resource 3' },
    { id: 4, name: 'Resource 4' },
    { id: 5, name: 'Resource 5' },
    { id: 6, name: 'Resource 6' },
    { id: 7, name: 'Resource 7' },
    { id: 8, name: 'Resource 8' },
    { id: 9, name: 'Resource 9' },
    { id: 10, name: 'Resource 10' },
    { id: 11, name: 'Resource 11' },
    { id: 12, name: 'Resource 12' },
    { id: 13, name: 'Resource 13' },
    { id: 14, name: 'Resource 14' },
    { id: 15, name: 'Resource 15' },
    { id: 16, name: 'Resource 16' },
    { id: 17, name: 'Resource 17' },
    { id: 18, name: 'Resource 18' },
    { id: 19, name: 'Resource 19' },
    { id: 20, name: 'Resource 20' },
    { id: 21, name: 'Resource 21' },
    { id: 22, name: 'Resource 22' },
    { id: 23, name: 'Resource 23' },
    { id: 24, name: 'Resource 24' },
    { id: 25, name: 'Resource 25' },
  ];

  eventSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      timeline: { type: 'month', resolutionHorizontal: 'hour' },
    },
    onVirtualLoading: (args: MbscVirtualLoadEvent) => {
      const start = formatDate('YYYY-MM-DD', args.viewStart);
      const end = formatDate('YYYY-MM-DD', args.viewEnd);
      const isEndLoaded = this.myResources[this.myResources.length - 1].id > +args.resourceEnd;

      if (!isEndLoaded) {
        this.notify.toast({
          message: 'Loading Resources...',
          duration: 1000,
        });
      }

      this.http
        .jsonp<MbscCalendarEvent[]>(
          'https://trial.mobiscroll.com/load-data-scroll/?start=' +
            start +
            '&end=' +
            end +
            '&rstart=' +
            args.resourceStart +
            '&rend=' +
            args.resourceEnd +
            '&load=' +
            (!isEndLoaded ? args.resourceEnd : 0),
          'callback',
        )
        .subscribe((data: any) => {
          if (data.resources) {
            this.myResources = [...this.myResources, ...data.resources];
          }

          this.myEvents = data.events;
        });
    },
  };
}
