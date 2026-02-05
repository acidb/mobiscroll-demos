import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-customizing-header',
  styleUrl: './customizing-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-header.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  view = 'schedule';
  calView: MbscEventcalendarView = {
    scheduler: { type: 'week' },
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
            scheduler: { type: 'week' },
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
