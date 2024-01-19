import { Component, OnInit } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-basic-usage',
  templateUrl: './basic-usage.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  view: MbscEventcalendarView = {
    agenda: { type: 'month' },
  };

  onEventClick(event: MbscEventClickEvent): void {
    this.notify.toast({
      message: event.event.title,
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
