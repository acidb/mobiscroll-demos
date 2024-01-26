import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscDateType, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-customizing-header',
  styleUrl: './customizing-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-header.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  currentDate: MbscDateType = new Date();
  currentView = 'agenda';
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  changeView(): void {
    setTimeout(() => {
      switch (this.currentView) {
        case 'calendar':
          this.myView = { calendar: { type: 'month' } };
          break;
        case 'agenda':
          this.myView = { agenda: { type: 'month' } };
          break;
      }
    });
  }

  nextPage(): void {
    const currentDate = this.currentDate as Date;
    this.currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  }

  prevPage(): void {
    const currentDate = this.currentDate as Date;
    this.currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
