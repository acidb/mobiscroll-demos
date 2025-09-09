import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-daily-weekly-monthly-annual-agenda',
  templateUrl: './daily-weekly-monthly-annual-agenda.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  dayView: MbscEventcalendarView = { agenda: { type: 'day' } };

  weekView: MbscEventcalendarView = { agenda: { type: 'week' } };

  monthView: MbscEventcalendarView = { agenda: { type: 'month' } };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events-new/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
