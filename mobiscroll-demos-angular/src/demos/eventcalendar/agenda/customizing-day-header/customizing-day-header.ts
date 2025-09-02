import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscModule,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-customizing-day-header',
  styleUrl: './customizing-day-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-day-header.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'week', showEmptyDays: true } };

  formatDate = formatDate;

  addEvent(date: Date): void {
    const newEvent = {
      title: 'Event',
      start: date,
      allDay: true,
    };

    this.myEvents = [...this.myEvents, newEvent];

    this.notify.toast({
      message: 'Event added',
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
