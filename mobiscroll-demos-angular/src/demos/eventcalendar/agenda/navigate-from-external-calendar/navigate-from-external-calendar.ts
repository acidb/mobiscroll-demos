import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscDateType, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-external-navigation',
  styleUrl: './navigate-from-external-calendar.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigate-from-external-calendar.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dayView: MbscEventcalendarView = { agenda: { type: 'day' } };
  myEvents: MbscCalendarEvent[] = [];
  selectedDate: MbscDateType = new Date();

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
