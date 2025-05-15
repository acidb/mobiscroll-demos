import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

type MyEvent = MbscCalendarEvent & { job?: string; unscheduled?: boolean };

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

@Component({
  selector: 'app-scheduler-doctors-appointment',
  styleUrl: './doctors-appointment.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './doctors-appointment.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private notify: Notifications) {}

  myData: MyEvent[] = [
    {
      id: 'job1',
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,16'),
      resource: 1,
      title: 'Myla Bennett',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
    {
      id: 'job2',
      start: dyndatetime('y,m,d,17'),
      end: dyndatetime('y,m,d,18,30'),
      resource: 1,
      title: 'Beatrix Foley',
      job: 'Braces',
      color: '#177e70',
    },
    {
      id: 'job3',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
      resource: 3,
      title: 'Frank Watson',
      job: 'Teeth whitening',
      color: '#d1891f',
    },
    {
      id: 'job4',
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,12,30'),
      resource: 3,
      title: 'Jaime Joyce',
      job: 'Root canal treatment',
      color: '#cb3939',
    },
    {
      id: 'job5',
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,14'),
      resource: 3,
      title: 'Corey Shepard',
      job: 'Tooth extraction',
      color: '#aba343',
    },
    {
      id: 'job6',
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,16'),
      resource: 4,
      title: 'Callie Leonard',
      job: 'Crown and bridge',
      color: '#1ca11a',
    },
    {
      id: 'job7',
      start: dyndatetime('y,m,d,17'),
      end: dyndatetime('y,m,d,18'),
      resource: 4,
      title: 'Harley Thomson',
      job: 'Tartar removal',
      color: '#a446b5',
    },
    {
      id: 'job8',
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,11'),
      resource: 6,
      title: 'Ricky Welch',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
  ];

  appointments: MyEvent[] = [
    {
      id: 'd1',
      title: 'Winfred Lesley',
      job: 'Teeth whitening',
      color: '#d1891f',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
      unscheduled: true,
    },
    {
      id: 'd2',
      title: 'Rosalin Delice',
      job: 'Crown and bridge',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,10'),
      unscheduled: true,
    },
    {
      id: 'd3',
      title: 'Macy Steven',
      job: 'Root canal treatment',
      color: '#cb3939',
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,12,30'),
      unscheduled: true,
    },
    {
      id: 'd4',
      title: 'Lavern Cameron',
      job: 'Tartar removal',
      color: '#a446b5',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,13'),
      unscheduled: true,
    },
  ];

  myColors: MbscCalendarColor[] = [];
  contBg = '';

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      scheduler: {
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
    eventOverlap: false,
    externalDrop: true,
    externalDrag: true,
    extendDefaultEvent: () => ({
      job: 'Tartar removal',
      color: '#a446b5',
    }),
    onEventCreate: (args) => {
      const event: MyEvent = args.event;
      event.unscheduled = false;
      this.myColors = [];
    },
    onEventCreated: (args) => {
      setTimeout(() => {
        this.notify.toast({
          message: args.event.title + ' added',
        });
        this.appointments = this.appointments.filter((item) => item.id !== args.event.id);
      });
    },
    onEventCreateFailed: (args) => {
      this.notify.toast({
        message: args.event.start! <= today ? "Can't add event in the past" : 'Make sure not to double book',
      });
    },
    onEventUpdateFailed: (args) => {
      this.notify.toast({
        message: args.event.start! <= today ? "Can't add event in the past" : 'Make sure not to double book',
      });
    },
    onEventDelete: (args) => {
      this.notify.toast({
        message: args.event.title + ' unscheduled',
      });
    },
    onEventDragEnter: () => {
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
    const eventLength = Math.abs(+new Date(event.end as string) - +new Date(event.start as string)) / (60 * 60 * 1000);
    return eventLength + ' hour' + (eventLength > 1 ? 's' : '');
  }

  onItemDrop(args: any): void {
    if (args.data) {
      const event: MyEvent = args.data;
      event.unscheduled = true;
      this.appointments = [...this.appointments, event];
    }
    this.contBg = '';
  }

  onItemDragEnter(args: any): void {
    const event: MyEvent = args.data;
    if (!(event && event.unscheduled)) {
      this.contBg = '#d0e7d2cc';
    }
  }

  onItemDragLeave(): void {
    this.contBg = '';
  }

  ngOnInit(): void {
    for (const event of this.myData) {
      // Convert dates to date objects
      event.start = event.start ? new Date(event.start as string) : event.start;
      event.end = event.end ? new Date(event.end as string) : event.end;
      // Mark past events as fixed by setting the event.editable property to false
      event.editable = !!(event.start && today < event.start);
    }
  }
}
