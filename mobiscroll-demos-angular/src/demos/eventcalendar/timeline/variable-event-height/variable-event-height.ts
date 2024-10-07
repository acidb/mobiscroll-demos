import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-timeline-resource-height',
  styleUrl: './variable-event-height.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './variable-event-height.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  calendarOptions: MbscEventcalendarOptions = {
    dragToCreate: false,
    clickToCreate: false,
    dragToMove: true,
    dragToResize: true,
    dragInTime: true,
    view: {
      timeline: {
        type: 'week',
        eventHeight: 'variable',
        startTime: '07:00',
        endTime: '21:00',
      },
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Franklin Hall',
      color: '#e20000',
    },
    {
      id: 2,
      name: 'Jefferson Commons',
      color: '#76e083',
    },
    {
      id: 3,
      name: 'Lincoln Residence',
      color: '#4981d6',
    },
    {
      id: 4,
      name: 'Roosevelt House',
      color: '#e25dd2',
    },
    {
      id: 5,
      name: 'Adams Hall',
      color: '#f7961e',
    },
    {
      id: 6,
      name: 'Washington Tower',
      color: '#d6d145',
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events-variable-height/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
