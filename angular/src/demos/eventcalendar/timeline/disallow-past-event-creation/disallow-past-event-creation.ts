import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

@Component({
  selector: 'disallow-past-event-creation',
  styleUrl: './disallow-past-event-creation.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './disallow-past-event-creation.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'month',
      },
    },
    resources: [
      {
        id: 1,
        name: 'Resource A',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#1dab2f',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#d6d145',
      },
    ],
    invalid: [
      {
        recurring: {
          repeat: 'daily',
          until: yesterday,
        },
      },
      {
        start: yesterday,
        end: today,
      },
    ],
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    onEventCreateFailed: (event) => {
      if (!event.originEvent) {
        this.notify.toast({
          message: "Can't create event in the past",
        });
      }
    },
    onEventUpdateFailed: (event) => {
      if (!event.oldEventOccurrence) {
        this.notify.toast({
          message: "Can't move event in the past",
        });
      }
    },
    onEventCreate: (args) => {
      const oldEvent = args.originEvent;
      const start = oldEvent && oldEvent.start ? oldEvent.start : null;

      // handle recurring events
      if (start && start < today) {
        this.notify.toast({
          message: "Can't move past event",
        });
        return false;
      } else {
        return true;
      }
    },
    onEventUpdate: (args) => {
      const oldEvent = args.oldEvent;
      const start = oldEvent && oldEvent.start ? oldEvent.start : null;
      const oldEventOccurrence = args.oldEventOccurrence;
      const occurrenceStart = oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null;

      // handle recurring events
      if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
        return false;
      } else {
        return true;
      }
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/multiday-events/', 'callback').subscribe((events: any) => {
      for (const event of events) {
        // convert dates to date objects
        event.start = event.start ? new Date(event.start) : event.start;
        event.end = event.end ? new Date(event.end) : event.end;
        // mark past events as fixed by setting the event.editable property to false
        event.editable = event.start && today < event.start;
      }
      this.myEvents = events;
    });
  }
}
