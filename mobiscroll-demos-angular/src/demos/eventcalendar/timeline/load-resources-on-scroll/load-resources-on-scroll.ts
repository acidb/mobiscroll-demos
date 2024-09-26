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
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myResources = [
    { id: 1, name: 'Resource 1', color: '#FF5733' },
    { id: 2, name: 'Resource 2', color: '#33FF57' },
    { id: 3, name: 'Resource 3', color: '#3357FF' },
    { id: 4, name: 'Resource 4', color: '#FF33A6' },
    { id: 5, name: 'Resource 5', color: '#FFC300' },
    { id: 6, name: 'Resource 6', color: '#DAF7A6' },
    { id: 7, name: 'Resource 7', color: '#581845' },
    { id: 8, name: 'Resource 8', color: '#900C3F' },
    { id: 9, name: 'Resource 9', color: '#C70039' },
    { id: 10, name: 'Resource 10', color: '#FF5733' },
    { id: 11, name: 'Resource 11', color: '#33FFBD' },
    { id: 12, name: 'Resource 12', color: '#FFC300' },
    { id: 13, name: 'Resource 13', color: '#FF33F6' },
    { id: 14, name: 'Resource 14', color: '#33FF57' },
    { id: 15, name: 'Resource 15', color: '#33A6FF' },
  ];

  eventSettings: MbscEventcalendarOptions = {
    // drag,
    view: {
      timeline: { type: 'month', resolutionHorizontal: 'hour' },
    },
    onVirtualLoading: (args: MbscVirtualLoadEvent) => {
      const start = formatDate('YYYY-MM-DD', args.viewStart);
      const end = formatDate('YYYY-MM-DD', args.viewEnd);

      this.http
        .jsonp<MbscCalendarEvent[]>('https://trialdev.mobiscroll.com/load-data-scroll/?start=' +
          start +
          '&end=' +
          end +
          '&rstart=' +
          args.resourceStart +
          '&rend=' +
          args.resourceEnd +
          '&load=' +
          (this.isInTheEnd(args.resourceEnd as number) ? this.myResources[this.myResources.length - 1].id : 0),, 'callback')
        .subscribe((data: any) => {
          if (data.resources) {
            this.myResources = [...this.myResources, ...data.resources];
          }

          this.myEvents = data.events;
        });
    },
  };

  isInTheEnd(resId: number) {
    const resIndx = this.myResources.findIndex((r) => r.id === resId);
    return this.myResources.length - resIndx <= 15;
  }
}
