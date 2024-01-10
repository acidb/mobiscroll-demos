import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'customizing-header',
  styleUrl: './customizing-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-header.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  view = 'schedule';
  calView: MbscEventcalendarView = {
    schedule: { type: 'week' },
  };
  currentDate: any = new Date();

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'calendar':
          this.calView = {
            calendar: { labels: true },
          };
          break;
        case 'schedule':
          this.calView = {
            schedule: { type: 'week' },
          };
          break;
      }
    });
  }

  getFirstDayOfWeek(d: Date, prev: boolean): Date {
    const day = d.getDay();
    const diff = d.getDate() - day + (prev ? -7 : 7);
    return new Date(d.setDate(diff));
  }

  navigatePage(prev: boolean): void {
    const currentDate = this.currentDate;
    if (this.view === 'calendar') {
      const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
      this.currentDate = prevNextPage;
    } else {
      const prevNextSunday = this.getFirstDayOfWeek(currentDate, prev);
      this.currentDate = prevNextSunday;
    }
  }
}
