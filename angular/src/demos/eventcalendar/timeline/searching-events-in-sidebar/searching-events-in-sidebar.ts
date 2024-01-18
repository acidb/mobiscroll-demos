import { Component, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-searching-events-in-sidebar',
  styleUrl: './searching-events-in-sidebar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-sidebar.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  currentDate: any = new Date();
  mySelectedEvent: MbscCalendarEvent[] = [];
  timer: any;
  showList = false;

  calEvents: MbscCalendarEvent[] = [];
  listEvents: MbscCalendarEvent[] = [];

  calView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
    },
  };

  listView: MbscEventcalendarView = {
    agenda: {
      type: 'year',
      size: 5,
    },
  };

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Resource 1',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource 2',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'Resource 3',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Resource 4',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource 5',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Resource 6',
      color: '#01adff',
    },
  ];

  onSearch(ev: any): void {
    const text = ev.target.value;

    clearTimeout(this.timer);
    this.timer = null;

    if (!this.timer) {
      this.timer = setTimeout(() => {
        if (text.length > 0) {
          this.http
            .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents-timeline/?text=' + text, 'callback')
            .subscribe((resp: MbscCalendarEvent[]) => {
              this.listEvents = resp;
              this.showList = true;
            });
        } else {
          this.showList = false;
        }
      }, 200);
    }
  }

  onPageLoading(args: any): void {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    setTimeout(() => {
      this.http
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end, 'callback')
        .subscribe((resp: MbscCalendarEvent[]) => {
          this.calEvents = resp;
        });
    });
  }

  eventClick(args: any): void {
    this.currentDate = args.event.start;
    this.mySelectedEvent = [args.event];
  }
}
