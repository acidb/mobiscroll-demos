import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscDateType, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-synchronized-views',
  styleUrl: './synchronized-views.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './synchronized-views.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dayView: MbscEventcalendarView = { agenda: { type: 'day' } };
  monthView: MbscEventcalendarView = { calendar: { popover: false, labels: false } };
  myEvents: MbscCalendarEvent[] = [];
  selectedDate: MbscDateType = new Date();

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
