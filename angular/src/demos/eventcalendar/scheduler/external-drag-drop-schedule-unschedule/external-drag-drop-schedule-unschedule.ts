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

@Component({
  selector: 'external-drag-drop-schedule-unschedule',
  styleUrl: './external-drag-drop-schedule-unschedule.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-drag-drop-schedule-unschedule.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  myTasks: MbscCalendarEvent[] = [
    {
      id: 1,
      title: 'Product team meeting',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 2,
      title: 'General orientation',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
    },
    {
      id: 3,
      title: 'Client Training',
      color: '#8c429f',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,14)',
    },
    {
      id: 4,
      title: 'CEO Conference',
      color: '#63b548',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    dragToMove: true,
    dragToCreate: true,
    externalDrop: true,
    externalDrag: true,
    view: {
      schedule: { type: 'week' },
    },
    onEventCreate: (args) => {
      this.myTasks = this.myTasks.filter((item) => item.id !== args.event.id);

      this.notify.toast({
        message: args.event.title + ' added',
      });
    },
    onEventDelete: (args) => {
      this.notify.toast({
        message: args.event.title + ' unscheduled',
      });
    },
  };

  getHours(event: MbscCalendarEvent) {
    const eventLength = Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000);
    return eventLength + ' hour' + (eventLength > 1 ? 's' : '');
  }

  onItemDrop(args): void {
    if (args.data) {
      this.myTasks = [...this.myTasks, args.data];
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trialdev.mobiscroll.com/drag-drop-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
