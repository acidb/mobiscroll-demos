import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-full-event-customization',
  styleUrl: './full-event-customization.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './full-event-customization.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/agenda-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
