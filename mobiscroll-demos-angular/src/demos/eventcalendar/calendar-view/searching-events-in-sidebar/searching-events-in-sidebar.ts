import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-searching-events-in-sidebar',
  styleUrl: './searching-events-in-sidebar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-sidebar.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  mySelectedEvent: MbscCalendarEvent[] = [];
  timer: any;
  showList = false;

  calEvents: MbscCalendarEvent[] = [];
  listEvents: MbscCalendarEvent[] = [];

  calView: MbscEventcalendarView = {
    calendar: {
      labels: true,
    },
  };

  listView: MbscEventcalendarView = {
    agenda: {
      type: 'year',
      size: 5,
    },
  };

  onSearch(ev: any): void {
    const text = ev.target.value;

    clearTimeout(this.timer);
    this.timer = null;

    if (!this.timer) {
      this.timer = setTimeout(() => {
        if (text.length > 0) {
          this.http
            .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?text=' + text, 'callback')
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
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, 'callback')
        .subscribe((resp: MbscCalendarEvent[]) => {
          this.calEvents = resp;
        });
    });
  }

  eventClick(args: any): void {
    this.calendar.navigateToEvent(args.event);
    this.mySelectedEvent = [args.event];
  }
}
