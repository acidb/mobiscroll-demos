import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

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

  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  onEventClick(args: MbscEventClickEvent): void {
    this.notify.toast({
      message: args.event.title,
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
