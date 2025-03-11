import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPageLoadingEvent,
  MbscPopup,
  MbscPopupButton,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

interface MyEvent extends MbscCalendarEvent {
  payload?: number;
}

interface MyResource extends MbscResource {
  standby?: number;
  deadhead?: number;
  payload?: number;
  capacity: number;
  model: string;
  location: string;
}

@Component({
  selector: 'app-timeline-dynamic-calculation-resource-sort',
  styleUrl: './dynamic-calculation-resource-sort.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-calculation-resource-sort.html',
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myEvents: MyEvent[] = [
    {
      start: dyndatetime('y,m,d-1'),
      end: dyndatetime('y,m,d+3'),
      title: 'Tour #013 - Miami to Seattle',
      resource: 1,
      color: '#FF9933',
      payload: 25,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+1'),
      end: dyndatetime('y,m,d+3'),
      title: 'Tour #014 - Denver to Boston',
      resource: 2,
      color: '#33FFA6',
      payload: 18,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+3'),
      title: 'Tour #015 - Orlando to Austin',
      resource: 3,
      color: '#9933FF',
      payload: 20,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+1'),
      end: dyndatetime('y,m,d+4'),
      title: 'Tour #016 - Detroit to Baltimore',
      resource: 4,
      color: '#33A6FF',
      payload: 0,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+2'),
      end: dyndatetime('y,m,d+5'),
      title: 'Tour #017 - Las Vegas to Portland',
      resource: 5,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+2'),
      end: dyndatetime('y,m,d+5'),
      title: 'Tour #018 - Atlanta to Kansas City',
      resource: 6,
      color: '#33FF99',
      payload: 0,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-4,11'),
      end: dyndatetime('y,m,d'),
      title: 'Tour #018 - Dallas to Atlanta',
      resource: 6,
      color: '#33FF99',
      payload: 14,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+4'),
      title: 'Tour #019 - Charlotte to Indianapolis',
      resource: 7,
      color: '#FF5733',
      payload: 22,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #005 - Dallas to San Francisco',
      resource: 7,
      color: '#FF5733',
      payload: 18,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+4'),
      end: dyndatetime('y,m,d+6'),
      title: 'Tour #001 - New York to Los Angeles',
      resource: 7,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #009 - San Diego to Dallas',
      resource: 7,
      color: '#FF5733',
      payload: 16,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+4'),
      end: dyndatetime('y,m,d+6'),
      title: 'Tour #006 - Los Angeles to Chicago',
      resource: 8,
      color: '#FF33A6',
      payload: 10,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-2'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #010 - San Francisco to Los Angeles',
      resource: 8,
      color: '#FF33A6',
      payload: 0,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+3'),
      end: dyndatetime('y,m,d+6'),
      title: 'Tour #007 - Houston to New York',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #003 - Philadelphia to Phoenix',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-4'),
      end: dyndatetime('y,m,d-1'),
      title: 'Tour #028 - Trenton to Philadelphia',
      resource: 9,
      color: '#33FF57',
      payload: 11,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-4'),
      end: dyndatetime('y,m,d+1'),
      title: 'Tour #004 - San Antonio to San Diego',
      resource: 10,
      color: '#3357FF',
      payload: 15,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+3'),
      end: dyndatetime('y,m,d+6'),
      title: 'Tour #022 - Cleveland to Cincinnati',
      resource: 10,
      color: '#3357FF',
      payload: 17,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-4'),
      end: dyndatetime('y,m,d+1'),
      title: 'Tour #023 - Boston to Philadelphia',
      resource: 11,
      color: '#FF9933',
      payload: 19,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #024 - Las Vegas to San Diego',
      resource: 12,
      color: '#33FF57',
      payload: 28,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-3'),
      end: dyndatetime('y,m,d'),
      title: 'Tour #025 - Miami to Charlotte',
      resource: 13,
      color: '#9933FF',
      payload: 26,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d+2'),
      end: dyndatetime('y,m,d+5'),
      title: 'Tour #026 - Seattle to Portland',
      resource: 14,
      color: '#33A6FF',
      payload: 12,
      overlap: false,
    },
    {
      start: dyndatetime('y,m,d-1'),
      end: dyndatetime('y,m,d+2'),
      title: 'Tour #027 - Atlanta to Orlando',
      resource: 15,
      color: '#FF5733',
      payload: 17,
      overlap: false,
    },
  ];

  myResources: MyResource[] = [
    { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
    { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
    { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
    { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
    { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
    { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
    { id: 8, name: 'SD-TRK-0250', capacity: 21, location: 'San Francisco', model: 'Mercedes Arocs' },
    { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
    { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
    { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
    { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
    { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
    { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
    { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' },
  ];

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  @ViewChild('sortButton')
  anchorBtn!: ElementRef;

  popupAnchor!: HTMLButtonElement;
  sortColumn: 'standby' | 'payload' | 'deadhead' | 'name' = 'standby';
  sortDirection: 'asc' | 'desc' = 'asc';
  sortRequests: number = 0;
  sortedResources: MyResource[] = this.myResources;
  tempEvent!: MyEvent;
  tempSortColumn: 'standby' | 'payload' | 'deadhead' | 'name' = 'standby';
  tempSortDirection: 'asc' | 'desc' = 'asc';
  weekStart!: Date;
  weekEnd!: Date;

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      resolutionHorizontal: 'day',
    },
  };

  sortColumnLabels: { [key: string]: string } = {
    standby: 'Standby Time',
    payload: 'Payload Efficiency',
    deadhead: 'Deadhead Time',
  };

  popupButtons: Array<MbscPopupButton | 'cancel'> = [
    'cancel',
    {
      text: 'Apply',
      keyCode: 'enter',
      cssClass: 'mbsc-popup-button-primary',
      handler: () => {
        this.popup.close();
        this.notify.toast({ message: 'Resources sorted' });
        this.sortColumn = this.tempSortColumn;
        this.sortDirection = this.tempSortDirection;
        this.sortResources();
      },
    },
  ];

  calcMetrics() {
    const loadedEvents: MyEvent[] = this.calendar ? this.calendar.getEvents() : [];

    this.myResources.forEach((resource) => {
      let standby = 168;
      let deadhead = 0;
      let payload = 0;
      let numberOfTours = 0;

      const resourceEvents = loadedEvents.filter((event) => event.resource === resource.id);

      resourceEvents.forEach((event) => {
        const eventStart = new Date(event.start as Date);
        const eventEnd = new Date(event.end as Date);
        const effectiveStart = eventStart < this.weekStart ? this.weekStart : eventStart;
        const effectiveEnd = eventEnd > this.weekEnd ? this.weekEnd : eventEnd;

        if (effectiveStart < effectiveEnd) {
          standby -= (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
        }

        if (effectiveStart < effectiveEnd && (!event.payload || event.payload <= 0)) {
          deadhead += (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
        }

        if (eventEnd > this.weekStart && eventStart < this.weekEnd) {
          numberOfTours++;
          payload += event.payload || 0;
        }
      });

      resource.standby = standby;
      resource.deadhead = deadhead;
      resource.payload = numberOfTours && resource.capacity ? Math.round((payload / numberOfTours / resource.capacity) * 100) : 0;
    });
  }

  sortResources() {
    this.sortedResources = [...this.myResources].sort((resource1, resource2) => {
      let col = this.sortColumn;
      if (resource1[col] === resource2[col]) {
        col = 'name';
      }
      return this.sortDirection === 'asc' ? (resource1[col]! > resource2[col]! ? 1 : -1) : resource1[col]! < resource2[col]! ? 1 : -1;
    });
  }

  delayedSort(event: MbscCalendarEvent) {
    this.sortRequests++;
    this.tempEvent = event;

    this.notify.snackbar({
      animation: 'pop',
      button: { text: 'Sort now' },
      cssClass: 'mds-popup-sort-snackbar',
      display: 'center',
      duration: 3000,
      onClose: () => {
        this.sortRequests--;
        if (this.sortRequests === 0) {
          const event = this.tempEvent;
          const resource = this.myResources.find((r) => r.id === event.resource)!;
          const eventStart = new Date(event.start as Date);
          const navStart = eventStart < this.weekStart ? this.weekStart : eventStart;
          this.sortResources();
          this.calendar.navigateToEvent({ start: navStart, resource: event.resource });
          resource.cssClass = 'mbsc-timeline-parent-hover';
          setTimeout(() => {
            resource.cssClass = '';
            this.myResources = [...this.myResources];
          }, 1000);
        }
      },
    });
  }

  addEventPayload() {
    return {
      payload: Math.floor(Math.random() * (17 - 5 + 1)) + 5,
    };
  }

  handlePopupOpen() {
    this.tempSortColumn = this.sortColumn;
    this.tempSortDirection = this.sortDirection;
    this.popupAnchor = this.anchorBtn.nativeElement;
    this.popup.open();
  }

  handlePageLoading(args: MbscPageLoadingEvent) {
    this.weekStart = args.firstDay;
    this.weekEnd = args.lastDay;
    setTimeout(() => {
      this.calcMetrics();
      this.sortResources();
    });
  }

  handleEventCreated(args: MbscEventCreatedEvent) {
    setTimeout(() => {
      this.calcMetrics();
      this.delayedSort(args.event);
    });
  }

  handleEventDeleted(args: MbscEventDeletedEvent) {
    setTimeout(() => {
      this.calcMetrics();
      this.delayedSort(args.event);
    });
  }

  handleEventUpdated(args: MbscEventUpdatedEvent): void {
    const oldEventStart = new Date(args.oldEvent!.start as string);
    const oldEventEnd = new Date(args.oldEvent!.end as string);
    if (
      +oldEventStart !== +(args.event.start as Date) &&
      +oldEventEnd !== +(args.event.end as Date) &&
      oldEventStart >= this.weekStart &&
      oldEventEnd <= this.weekEnd &&
      (args.event.start as Date) >= this.weekStart &&
      (args.event.end as Date) <= this.weekEnd &&
      args.oldEvent!.resource === args.event.resource
    ) {
      return;
    }
    setTimeout(() => {
      this.calcMetrics();
      this.delayedSort(args.event);
    });
  }

  getBarColor(resource: MbscResource): string {
    const barValue = this.getBarValue(resource);
    return barValue <= 33 ? 'green' : barValue <= 66 ? 'yellow' : 'red';
  }

  getBarValue(resource: MbscResource): number {
    const metricValue = resource[this.sortColumn];
    return this.sortColumn === 'payload' ? metricValue : (metricValue / 168) * 100;
  }
}
