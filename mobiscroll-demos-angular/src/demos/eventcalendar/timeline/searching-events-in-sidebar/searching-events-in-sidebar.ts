import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscModule,
  MbscPageLoadingEvent,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-searching-events-in-sidebar',
  styleUrl: './searching-events-in-sidebar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-sidebar.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  calEvents: MbscCalendarEvent[] = [];
  calView: MbscEventcalendarView = { timeline: { type: 'month', eventList: true } };
  listEvents: MbscCalendarEvent[] = [];
  listView: MbscEventcalendarView = { agenda: { type: 'year', size: 5 } };
  timer?: ReturnType<typeof setTimeout>;
  selectedEvent: MbscCalendarEvent[] = [];
  displayResults = false;

  myResources: MbscResource[] = [
    { id: 1, name: 'Resource 1', color: '#fdf500' },
    { id: 2, name: 'Resource 2', color: '#ff4600' },
    { id: 3, name: 'Resource 3', color: '#ff0101' },
    { id: 4, name: 'Resource 4', color: '#239a21' },
    { id: 5, name: 'Resource 5', color: '#8f1ed6' },
    { id: 6, name: 'Resource 6', color: '#01adff' },
  ];

  onInput(ev: Event): void {
    const searchText = (ev.target as HTMLInputElement).value;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (searchText.length > 0) {
        this.http
          .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents-timeline/?text=' + searchText, 'callback')
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
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end, 'callback')
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
