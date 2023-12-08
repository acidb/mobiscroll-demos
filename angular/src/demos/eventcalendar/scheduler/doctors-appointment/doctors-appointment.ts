import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
  Notifications,
  setOptions,
  /* localeImport */
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

var now = new Date();
var today = new Date(now.setMinutes(59));
var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

@Component({
  selector: 'doctors-appointment',
  styleUrl: './doctors-appointment.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './doctors-appointment.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myData: MbscCalendarEvent[] = [
    {
      id: 'job1',
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,16)',
      resource: 1,
      title: 'Myla Bennett',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
    {
      id: 'job2',
      start: 'dyndatetime(y,m,d,17)',
      end: 'dyndatetime(y,m,d,18,30)',
      resource: 1,
      title: 'Beatrix Foley',
      job: 'Braces',
      color: '#177e70',
    },
    {
      id: 'job3',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
      resource: 3,
      title: 'Frank Watson',
      job: 'Teeth whitening',
      color: '#d1891f',
    },
    {
      id: 'job4',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,12,30)',
      resource: 3,
      title: 'Jaime Joyce',
      job: 'Root canal treatment',
      color: '#cb3939',
    },
    {
      id: 'job5',
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,14)',
      resource: 3,
      title: 'Corey Shepard',
      job: 'Tooth extraction',
      color: '#aba343',
    },
    {
      id: 'job6',
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,16)',
      resource: 4,
      title: 'Callie Leonard',
      job: 'Crown and bridge',
      color: '#1ca11a',
    },
    {
      id: 'job7',
      start: 'dyndatetime(y,m,d,17)',
      end: 'dyndatetime(y,m,d,18)',
      resource: 4,
      title: 'Harley Thomson',
      job: 'Tartar removal',
      color: '#a446b5',
    },
    {
      id: 'job8',
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,11)',
      resource: 6,
      title: 'Ricky Welch',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
  ];

  appointments: MbscCalendarEvent[] = [
    {
      id: 'd1',
      title: 'Winfred Lesley',
      job: 'Teeth whitening',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
      unscheduled: true,
    },
    {
      id: 'd2',
      title: 'Rosalin Delice',
      job: 'Crown and bridge',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
      unscheduled: true,
    },
    {
      id: 'd3',
      title: 'Macy Steven',
      job: 'Root canal treatment',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,12,30)',
      unscheduled: true,
    },
    {
      id: 'd4',
      title: 'Lavern Cameron',
      job: 'Tartar removal',
      color: '#a446b5',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      unscheduled: true,
    },
  ];

  myColors = [];
  contBg = '';

  hasOverlap(event: any, inst: any): any {
    const events = inst.getEvents(event.start, event.end).filter((e) => e.id !== event.id && e.resource === event.resource);
    return events.length > 0;
  }

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      schedule: {
        type: 'day',
        startTime: '08:00',
        endTime: '20:00',
        allDay: false,
      },
    },
    resources: [
      {
        id: 1,
        name: 'Dr. Keila Delores',
      },
      {
        id: 2,
        name: 'Dr. Gene Cortez',
      },
      {
        id: 3,
        name: 'Dr. Paula Bush',
      },
      {
        id: 4,
        name: 'Dr. Pete Nichols',
      },
      {
        id: 5,
        name: 'Dr. Jean Pearson',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Dr. Thelma Cain',
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
    dragToMove: true,
    dragToCreate: true,
    externalDrop: true,
    externalDrag: true,
    extendDefaultEvent: () => {
      return {
        job: 'Tartar removal',
        color: '#a446b5',
      };
    },
    onEventCreate: (args, inst) => {
      const event = args.event;
      event.unscheduled = false;
      this.myColors = [];
      if (this.hasOverlap(event, inst)) {
        this.notify.toast({
          message: 'Make sure not to double book',
        });
        return false;
      } else if (!(today < event.start)) {
        this.notify.toast({
          message: "Can't add event in the past",
        });
      } else {
        this.notify.toast({
          message: args.event.title + ' added',
        });
        this.appointments = this.appointments.filter((item) => item.id !== event.id);
      }
    },
    onEventDelete: (args) => {
      this.notify.toast({
        message: args.event.title + ' unscheduled',
      });
    },
    onEventDragEnter: (args) => {
      this.myColors = [
        {
          background: '#f1fff24d',
          start: '08:00',
          end: '20:00',
          recurring: {
            repeat: 'daily',
          },
        },
      ];
    },
    onEventDragLeave: () => {
      this.myColors = [];
    },
  };

  getHours(event: MbscCalendarEvent) {
    const eventLength = Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000);
    return eventLength + ' hour' + (eventLength > 1 ? 's' : '');
  }

  onItemDrop(args): void {
    if (args.data) {
      const event = args.data;
      event.unscheduled = true;
      this.appointments = [...this.appointments, event];
    }
    this.contBg = '';
  }

  onItemDragEnter(args): void {
    if (!(args.data && args.data.unscheduled)) {
      this.contBg = '#d0e7d2cc';
    }
  }

  onItemDragLeave(args): void {
    this.contBg = '';
  }

  ngOnInit(): void {
    for (const event of this.myData) {
      // convert dates to date objects
      event.start = event.start ? new Date(event.start) : event.start;
      event.end = event.end ? new Date(event.end) : event.end;
      // mark past events as fixed by setting the event.editable property to false
      event.editable = event.start && today < event.start;
    }
  }
}
