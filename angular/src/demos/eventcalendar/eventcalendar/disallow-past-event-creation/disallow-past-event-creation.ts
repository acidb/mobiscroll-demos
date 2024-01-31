import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const today = new Date();

@Component({
  selector: 'app-eventcalendar-disallow-past-event-creation',
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
      calendar: {
        labels: true,
      },
    },
    invalid: [
      {
        recurring: {
          repeat: 'daily',
          until: today,
        },
      },
    ],
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    onEventCreateFailed: (args) => {
      if (!args.originEvent) {
        this.notify.toast({
          message: "Can't create event in the past",
        });
      }
    },
    onEventUpdateFailed: (args) => {
      if (!args.oldEventOccurrence) {
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
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((events: any) => {
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
