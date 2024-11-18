import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarColor,
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

const hwInvalids: MbscCalendarEvent[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
  },
];
const swInvalids: MbscCalendarEvent[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
  },
];
const hwColors: MbscCalendarColor[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
    background: '#1ad4041a',
  },
];
const swColors: MbscCalendarColor[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
    background: '#1ad4041a',
  },
];

@Component({
  selector: 'app-timeline-dynamically-color-and-invalidate',
  styleUrl: './dynamically-color-and-invalidate.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamically-color-and-invalidate.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myResources: MbscResource[] = [
    {
      id: 'hwt',
      name: 'HW Team',
      eventCreation: false,
      children: [
        {
          id: 'res1',
          name: 'Resource 1',
          color: '#0e9ea5',
        },
        {
          id: 'res2',
          name: 'Resource 2',
          color: '#0e9ea5',
        },
        {
          id: 'res3',
          name: 'Resource 3',
          color: '#0e9ea5',
        },
      ],
    },
    {
      id: 'swt',
      name: 'SW Team',
      eventCreation: false,
      children: [
        {
          id: 'res4',
          name: 'Resource 4',
          color: '#c3b726',
        },
        {
          id: 'res5',
          name: 'Resource 5',
          color: '#c3b726',
        },
        {
          id: 'res6',
          name: 'Resource 6',
          color: '#c3b726',
        },
      ],
    },
  ];

  myTasks: MbscCalendarEvent[] = [
    {
      taskId: 1,
      title: 'Task 1',
      start: '08:00',
      end: '12:00',
      category: 'hw',
      color: '#0e9ea5',
    },
    {
      taskId: 2,
      title: 'Task 2',
      start: '08:00',
      end: '12:00',
      category: 'hw',
      color: '#0e9ea5',
    },
    {
      taskId: 3,
      title: 'Task 3',
      start: '08:00',
      end: '12:00',
      category: 'hw',
      color: '#0e9ea5',
    },
    {
      taskId: 4,
      title: 'Task 4',
      start: '08:00',
      end: '12:00',
      category: 'sw',
      color: '#c3b726',
    },
    {
      taskId: 5,
      title: 'Task 5',
      start: '08:00',
      end: '12:00',
      category: 'sw',
      color: '#c3b726',
    },
    {
      taskId: 6,
      title: 'Task 6',
      start: '08:00',
      end: '12:00',
      category: 'sw',
      color: '#c3b726',
    },
  ];

  myColors: MbscCalendarColor[] = [];
  myInvalids: MbscCalendarEvent[] = [];

  calendarOptions: MbscEventcalendarOptions = {
    dragToMove: true,
    externalDrop: true,
    view: {
      timeline: { type: 'day' },
    },
    extendDefaultEvent: (event: any) => {
      const res = event.resource;

      if (res) {
        if (res === 'res1' || res === 'res2' || res === 'res3') {
          return {
            category: 'hw',
          };
        } else {
          return {
            category: 'sw',
          };
        }
      } else {
        return {};
      }
    },
    onEventDragStart: (args) => {
      const event = args.event;

      if (event) {
        if (event['category'] === 'hw') {
          this.myInvalids = hwInvalids;
          this.myColors = hwColors;
        } else {
          this.myInvalids = swInvalids;
          this.myColors = swColors;
        }
      }
    },
    onEventDragEnd: () => {
      this.myInvalids = [];
      this.myColors = [];
    },
    onEventCreated: () => {
      this.notify.toast({
        message: 'Event created',
      });
    },
    onEventUpdated: () => {
      this.notify.toast({
        message: 'Event moved',
      });
    },
    onEventCreateFailed: () => {
      this.notify.toast({
        message: "Can't create event",
      });
    },
    onEventUpdateFailed: () => {
      this.notify.toast({
        message: "Can't move event",
      });
    },
  };
}
