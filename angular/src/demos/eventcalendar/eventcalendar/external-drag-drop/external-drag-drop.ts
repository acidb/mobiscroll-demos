import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  Notifications,
  setOptions,
  /* localeImport */
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'external-drag-drop',
  styleUrl: './external-drag-drop.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-drag-drop.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  meetingData = {
    title: 'QA meeting',
    color: '#cf4343',
    start: now,
    end: now,
  };

  retreatData = {
    title: 'Team retreat',
    color: '#1064b0',
    start: now,
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2),
  };

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      calendar: { labels: true },
    },
    dragToMove: true,
    externalDrop: true,
    onEventCreate: (args) => {
      this.notify.toast({
        message: args.event.title + ' added',
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
