import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-flight-scheduling-two-synchronized-timelines',
  styleUrl: './flight-scheduling-two-synchronized-timelines.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './flight-scheduling-two-synchronized-timelines.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  bookings: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,10'),
      title: 'Budapest - Ljubljana',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18'),
      title: 'Ljubljana - Berlin',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,4'),
      end: dyndatetime('y,m,d,12'),
      title: 'Los Angeles - Dublin',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,18'),
      end: dyndatetime('y,m,d,23'),
      title: 'Dublin - Bucharest',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,14'),
      title: 'Chicago - Amsterdam',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d,17'),
      end: dyndatetime('y,m,d,22'),
      title: 'Amsterdam - Cairo',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
      title: 'Hong Kong - Sydney',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,21'),
      title: 'Sydney - Tokyo',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,4'),
      end: dyndatetime('y,m,d,12'),
      title: 'Paris - Washington, D.C.',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,18'),
      title: 'Washington, D.C. - Los-Angeles',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d,3'),
      end: dyndatetime('y,m,d,11'),
      title: 'Los Angeles - Dublin',
      resource: 6,
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,18'),
      title: 'Dublin - Rome',
      resource: 6,
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,12'),
      title: 'Barcelona - Dubai',
      resource: 7,
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,20'),
      title: 'Dubai - Tokyo',
      resource: 7,
    },
    {
      start: dyndatetime('y,m,d,3,30'),
      end: dyndatetime('y,m,d,13'),
      title: 'Rome - Toronto',
      resource: 8,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,19'),
      title: 'Toronto - New-York',
      resource: 8,
    },
    {
      start: dyndatetime('y,m,d,3'),
      end: dyndatetime('y,m,d,14'),
      title: 'Vienna - Shanghai',
      resource: 9,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23,30'),
      title: 'Shanghai - Moscow',
      resource: 9,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,13'),
      title: 'London - Cairo',
      resource: 10,
    },
    {
      start: dyndatetime('y,m,d,15,30'),
      end: dyndatetime('y,m,d,19,30'),
      title: 'Cairo - Sofia',
      resource: 10,
    },
    {
      start: dyndatetime('y,m,d,2'),
      end: dyndatetime('y,m,d,13'),
      title: 'Istanbul - New York',
      resource: 11,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,20'),
      title: 'New York - Montreal',
      resource: 11,
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,11'),
      title: 'Seattle - Miami',
      resource: 12,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,21'),
      title: 'Miami - Buenos-Aires',
      resource: 12,
    },
    {
      start: dyndatetime('y,m,d+1,4'),
      end: dyndatetime('y,m,d+1,16'),
      title: 'Hong Kong - Sydney',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d+1,6'),
      end: dyndatetime('y,m,d+1,10'),
      title: 'Los Angeles - Dublin',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d+1,3'),
      end: dyndatetime('y,m,d+1,11'),
      title: 'Budapest - Ljubljana',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Los Angeles - Dublin',
      resource: 6,
    },
    {
      start: dyndatetime('y,m,d+1,13'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'London - Cairo',
      resource: 7,
    },
    {
      start: dyndatetime('y,m,d+1,3'),
      end: dyndatetime('y,m,d+1,14'),
      title: 'Miami - Buenos-Aires',
      resource: 9,
    },
    {
      start: dyndatetime('y,m,d+1,6'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Barcelona - Dubai',
      resource: 10,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,22'),
      title: 'Istanbul - New York',
      resource: 11,
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,11'),
      title: 'Vienna - Shanghai',
      resource: 12,
    },
  ];

  flights: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,17'),
      title: 'Barcelona - Dubai',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,7,30'),
      end: dyndatetime('y,m,d,16'),
      title: 'Toronto - Rome',
      resource: 8,
    },
    {
      start: dyndatetime('y,m,d,4'),
      end: dyndatetime('y,m,d,8'),
      title: 'Ljubljana - Budapest',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,2'),
      end: dyndatetime('y,m,d,10'),
      title: 'Paris - Washington, D.C.',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,23'),
      title: 'New York - Istanbul',
      resource: 7,
    },
    {
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,23'),
      title: 'Moscow - Tokyo',
      resource: 3,
    },
  ];

  jets: MbscResource[] = [
    {
      id: 'Op 1',
      name: 'Prestige Air',
      eventCreation: false,
      children: [
        {
          id: 1,
          code: '#AF 7703',
          crew: 52,
          name: 'Red Bolt',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-1.jpg',
        },
        {
          id: 2,
          code: '#BQ 4718',
          crew: 47,
          name: 'Skyroar',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-2.jpg',
        },
        {
          id: 3,
          code: '#ZM 8430',
          crew: 24,
          name: 'Agile Raven',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-3.jpg',
        },
      ],
    },
    {
      id: 'Op 2',
      name: 'Elite Wings',
      eventCreation: false,
      children: [
        {
          id: 4,
          code: '#XG 5500',
          crew: 43,
          name: 'Monsterbolt',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-4.jpg',
        },
        {
          id: 5,
          code: '#FL 2531',
          crew: 22,
          name: 'Airrise',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-5.jpg',
        },
        {
          id: 6,
          code: '#PA 6487',
          crew: 84,
          name: 'Starblast',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-6.jpg',
        },
        {
          id: 7,
          code: '#PP 9812',
          crew: 28,
          name: 'Ebonfire',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-7.jpg',
        },
      ],
    },
    {
      id: 'Op 3',
      name: 'Luxury Skies',
      eventCreation: false,
      children: [
        {
          id: 8,
          code: '#DN 3191',
          crew: 36,
          name: 'Dark Bee',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-8.jpg',
        },
        {
          id: 9,
          code: '#ZW 2328',
          crew: 76,
          name: 'Keen Sparrow',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-9.jpg',
        },
        {
          id: 10,
          code: '#RX 9898',
          crew: 37,
          name: 'Jagged Bolt',
          color: '#1dab2f',
          img: 'https://img.mobiscroll.com/demos/jet-10.jpg',
        },
      ],
    },
  ];

  reservations: MbscResource[] = [
    {
      id: 1,
      name: 'Alison Reyes',
    },
    {
      id: 2,
      name: 'Shauna Perry',
    },
    {
      id: 3,
      name: 'Jan Whitney',
    },
    {
      id: 4,
      name: 'Freddie Durham',
    },
    {
      id: 5,
      name: 'William Dillon',
    },
    {
      id: 6,
      name: 'Tyrell Edwards',
    },
    {
      id: 7,
      name: 'Caitlyn Riddle',
    },
    {
      id: 8,
      name: 'Liam Mays',
    },
    {
      id: 9,
      name: 'Frank Medina',
    },
    {
      id: 10,
      name: 'Calvin Larsen',
    },
    {
      id: 11,
      name: 'Heather Walsh',
    },
    {
      id: 12,
      name: 'Conner Paul',
    },
  ];

  invalid: MbscCalendarEvent[] = [];

  selectedDate: any;
  firstCalCont: any;
  secondCalCont: any;
  skipFirstScroll = false;
  skipSecondScroll = false;

  firstCalOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'day',
        size: 1,
      },
    },
    dragToMove: false,
    dragToCreate: false,
    dragToResize: false,
    eventDelete: true,
    externalDrag: true,
    onPageLoading: (args) => {
      setTimeout(() => {
        this.selectedDate = args.firstDay;
      }, 100);
    },
    onPageLoaded: () => {
      if (!this.firstCalCont) {
        this.firstCalCont = document.querySelector('.md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll');
        this.firstCalCont.addEventListener('scroll', this.handleFirstScroll);
      }
    },
    onDestroy: () => {
      if (this.firstCalCont) {
        this.firstCalCont.removeEventListener('scroll', this.handleFirstScroll);
      }
    },
  };

  secondCalOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'day',
        size: 1,
      },
    },
    showControls: false,
    dragToCreate: false,
    dragToMove: true,
    dragToResize: false,
    dragInTime: false,
    externalDrop: true,
    eventDelete: true,
    eventOverlap: false,
    onEventCreated: (args) => {
      setTimeout(() => {
        this.flights.push(args.event);
        this.notify.toast({
          display: 'center',
          message: 'Flight scheduled',
        });
      });
    },
    onEventDeleted: (args) => {
      setTimeout(() => {
        this.flights = this.flights.filter((flight) => flight.id !== args.event.id);
      });
    },
    onEventCreateFailed: () => {
      this.notify.toast({
        display: 'center',
        message: "There's already a flight on this date",
      });
    },
    onEventUpdateFailed: () => {
      this.notify.toast({
        display: 'center',
        message: "There's already a flight on this date",
      });
    },
    onEventDragStart: (args) => {
      const unavailable: {
        [key: number]: boolean;
      } = {};
      const invalid: MbscCalendarColor = {
        cssClass: 'md-drag-drop-invalid',
        recurring: { repeat: 'daily' },
        resource: [],
      };
      const eventStart = new Date(args.event.start as string);
      const eventEnd = new Date(args.event.end as string);
      // Filter unavailable jets
      this.flights.forEach((flight) => {
        const flightStart = new Date(flight.start as string);
        const flightEnd = new Date(flight.end as string);
        if (flight.id !== args.event.id && flightStart < eventEnd && flightEnd > eventStart) {
          unavailable[flight.resource as number] = true;
        }
      });
      this.flights.forEach((flight) => {
        if (unavailable[flight.resource as number]) {
          flight.cssClass = 'md-drag-drop-faded';
        }
      });
      this.jets.forEach((group) => {
        if (group.children) {
          group.children.forEach((jet) => {
            if (unavailable[jet.id as number]) {
              (invalid.resource as number[]).push(jet.id as number);
            }
          });
        }
      });
      this.invalid = [invalid];
    },
    onEventDragEnd: () => {
      this.flights.forEach((flight) => {
        delete flight.cssClass;
      });
      this.invalid = [];
    },
    onPageLoaded: () => {
      if (!this.secondCalCont) {
        this.secondCalCont = document.querySelector('.md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll');
        this.secondCalCont.addEventListener('scroll', this.handleSecondScroll);
      }
    },
    onDestroy: () => {
      if (this.secondCalCont) {
        this.secondCalCont.removeEventListener('scroll', this.handleSecondScroll);
      }
    },
  };

  handleFirstScroll = (ev: any) => {
    if (this.secondCalCont && !this.skipSecondScroll) {
      this.skipFirstScroll = true;
      this.secondCalCont.scrollLeft = ev.target.scrollLeft;
    }
    this.skipFirstScroll = false;
  };

  handleSecondScroll = (ev: any) => {
    if (this.firstCalCont && !this.skipFirstScroll) {
      this.skipSecondScroll = true;
      this.firstCalCont.scrollLeft = ev.target.scrollLeft;
    }
    this.skipSecondScroll = false;
  };
}
