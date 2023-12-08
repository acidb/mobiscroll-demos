import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
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

  view = 'agenda';
  calView: MbscEventcalendarView = {
    agenda: { type: 'month' },
  };

  currentDate = new Date();

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
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
        case 'agenda':
          this.calView = {
            agenda: { type: 'month' },
          };
          break;
      }
    });
  }

  navigateToPrevPage(): void {
    const prevPage = new Date(this.currentDate);
    prevPage.setDate(1);
    prevPage.setMonth(prevPage.getMonth() - 1);
    this.currentDate = prevPage;
  }

  navigateToNextPage(): void {
    const nextPage = new Date(this.currentDate);
    nextPage.setDate(1);
    nextPage.setMonth(nextPage.getMonth() + 1);
    this.currentDate = nextPage;
  }
}
