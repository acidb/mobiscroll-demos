import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-searching-events-in-sidebar',
  styleUrl: './searching-events-in-sidebar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-sidebar.html',
  standalone: false,
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  calEvents: MbscCalendarEvent[] = [];
  calView: MbscEventcalendarView = { schedule: { type: 'week' } };
  listEvents: MbscCalendarEvent[] = [];
  listView: MbscEventcalendarView = { agenda: { type: 'year', size: 5 } };
  timer?: ReturnType<typeof setTimeout>;
  selectedEvent: MbscCalendarEvent[] = [];
  displayResults = false;

  onInput(ev: Event): void {
    const searchText = (ev.target as HTMLInputElement).value;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (searchText.length > 0) {
        this.http
          .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?text=' + searchText, 'callback')
          .subscribe((resp: MbscCalendarEvent[]) => {
            this.listEvents = resp;
            this.displayResults = true;
          });
      } else {
        this.displayResults = false;
      }
    }, 200);
  }

  onPageLoading(args: MbscPageLoadingEvent): void {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    setTimeout(() => {
      this.http
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, 'callback')
        .subscribe((resp) => {
          this.calEvents = resp;
        });
    });
  }

  onEventClick(args: MbscEventClickEvent): void {
    this.calendar.navigateToEvent(args.event);
    this.selectedEvent = [args.event];
  }
}
