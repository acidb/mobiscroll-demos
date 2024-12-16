import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

interface MyResource extends MbscResource {
  standby?: number;
  deadhead?: number;
  payload?: number;
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

  @ViewChild('myCalendar', { static: false })
  myCalendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  @ViewChild('sortButton') anchorElm!: ElementRef;
  popupAnchor!: HTMLButtonElement;

  initialSort: boolean = true;
  initialSortColumn: string = 'standby';
  initialSortDirection: string = 'asc';
  metricBarAnimation: boolean = true;
  loadedEvents: MbscCalendarEvent[] = [];
  selectedMetric: string = 'standby';
  selectedMetricDesc: string = 'Standby Time';
  sortColumn: string = 'standby';
  sortDirection: string = 'asc';
  weekStart: Date = new Date();
  weekEnd: Date = new Date();

  myEvents: MbscCalendarEvent[] = [
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
      title: 'Tour #018 - ? to Atlanta',
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
      title: 'Tour #028 - ? to Philadelphiax',
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

  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      resolutionHorizontal: 'day',
    },
  };

  popupButtons: Array<MbscPopupButton | 'cancel'> = [
    'cancel',
    {
      handler: () => {
        if (this.initialSortColumn != this.sortColumn) {
          this.refreshData();
        }
        this.sortResources();
        this.initialSortColumn = this.sortColumn;
        this.initialSortDirection = this.sortDirection;
        this.popup.close();
      },
      text: 'Apply',
      keyCode: 'enter',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    contentPadding: false,
    focusOnClose: false,
    focusOnOpen: false,
    showOverlay: false,
    width: 400,
  };

  refreshData() {
    // todo
    this.selectedMetric = this.sortColumn;
    this.selectedMetricDesc = this.sortColumn;
    //
    setTimeout(() => {
      this.loadedEvents = this.myCalendar.getEvents();

      this.myResources.forEach((resource) => {
        const resourceEvents = this.loadedEvents.filter((event) => event.resource === resource.id);

        if (this.selectedMetric === 'standby') {
          resource.standby = 168;

          resourceEvents.forEach((event) => {
            const eventStart = new Date(event.start as Date);
            const eventEnd = new Date(event.end as Date);
            const effectiveStart = eventStart < this.weekStart ? this.weekStart : eventStart;
            const effectiveEnd = eventEnd > this.weekEnd ? this.weekEnd : eventEnd;

            if (effectiveStart < effectiveEnd) {
              resource.standby! -= (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
            }
          });
        }

        if (this.selectedMetric === 'deadhead') {
          const totalDeadheadTime = resourceEvents.reduce((total, event) => {
            const eventStart = new Date(event.start as Date);
            const eventEnd = new Date(event.end as Date);
            const effectiveStart = eventStart < this.weekStart ? this.weekStart : eventStart;
            const effectiveEnd = eventEnd > this.weekEnd ? this.weekEnd : eventEnd;

            if (effectiveStart < effectiveEnd && (!event['payload'] || event['payload'] <= 0)) {
              return total + (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
            }
            return total;
          }, 0);

          resource.deadhead = totalDeadheadTime;
        }

        if (this.selectedMetric === 'payload') {
          const weekEvents = resourceEvents.filter(
            (event) => new Date(event.end as Date) > this.weekStart && new Date(event.start as Date) < this.weekEnd,
          );
          const totalPayload = weekEvents.reduce((total, event) => total + (event['payload'] || 0), 0);
          const numberOfTours = weekEvents.length;

          resource.payload =
            numberOfTours > 0 && resource['capacity'] ? Math.round((totalPayload / numberOfTours / resource['capacity']) * 100) : 0;
        }
      });
    });
  }

  sortResources(): void {
    this.metricBarAnimation = true;
    this.initialSort = false;

    this.myResources = [
      ...this.myResources.sort((a: MbscResource, b: MbscResource) => {
        if (this.sortDirection === 'asc') {
          return a[this.sortColumn] > b[this.sortColumn] ? 1 : -1;
        } else {
          return a[this.sortColumn] < b[this.sortColumn] ? 1 : -1;
        }
      }),
    ];

    setTimeout(() => {
      // this.metricBarAnimation = false;
    }, 100);
  }

  delayedToastSort(resourceId: any, event: any) {
    const resource = this.myResources.find(function (resource) {
      return resource.id === resourceId;
    });

    const sortResources = this.sortResources.bind(this);
    let myResources = this.myResources;
    const myCalendar = this.myCalendar;

    this.notify.snackbar({
      animation: 'pop',
      button: {
        text: 'Sort now',
        action: function () {
          sortResources();
        },
      },
      cssClass: 'mds-popup-sort-snackbar',
      display: 'bottom',
      duration: 3000,
      onClose: function () {
        resource!.cssClass = 'mds-resource-highlight';
        sortResources();
        setTimeout(function () {
          resource!.cssClass = '';
          myResources! = myResources.slice();
        }, 1000);
        myCalendar.navigateToEvent(event);
      },
    });

    setTimeout(function () {
      document.querySelector('.mbsc-toast-background')!.classList.add('start-progress');
    });
  }

  handlePopupOpen() {
    this.initialSortColumn = this.sortColumn;
    this.initialSortDirection = this.sortDirection;
    this.popupAnchor = this.anchorElm.nativeElement;
    this.popup.open();
  }

  handleOnPageLoading($event: any) {
    this.weekStart = $event.firstDay;
    this.weekEnd = $event.lastDay;
    this.refreshData();
  }

  handleOnPageLoaded() {
    this.refreshData();
    if (this.initialSort) {
      this.sortResources();
    }
  }

  handleOnEventCreated(args: MbscEventCreatedEvent) {
    args.event['payload'] = Math.floor(Math.random() * (17 - 5 + 1)) + 5;
    args.event.overlap = false;
    this.refreshData();
    this.delayedToastSort(args.event.resource, args.event);
  }

  handleOnEventDelete(args: MbscEventDeleteEvent) {
    this.refreshData();
    this.delayedToastSort(args.event.resource, args.event);
  }

  handleOnEventUpdate(args: MbscEventUpdateEvent) {
    // when just move no need  sort
    if (
      new Date(args.oldEvent!.start as string).getTime() !== new Date(args.event!.start as string).getTime() &&
      new Date(args.oldEvent!.end as string).getTime() !== new Date(args.event!.end as string).getTime()
    ) {
      return;
    }
    this.refreshData();
    this.delayedToastSort(args.event.resource, args.event);
  }

  getMetricValue(resource: any): string | number {
    const metricValue = resource[this.selectedMetric];
    if (this.selectedMetric === 'payload') {
      return `${metricValue}%`;
    } else if (this.selectedMetric === 'standby' || this.selectedMetric === 'deadhead') {
      return `${metricValue}h`;
    }
    return metricValue;
  }

  getBarValue(resource: any): number {
    const metricValue = resource[this.selectedMetric];
    if (this.selectedMetric === 'payload') {
      return metricValue;
    } else if (this.selectedMetric === 'standby' || this.selectedMetric === 'deadhead') {
      return (metricValue / 168) * 100;
    }
    return 100;
  }

  getBarColorClass(resource: any): string {
    const barValue = this.getBarValue(resource);
    const animationClass = this.metricBarAnimation ? 'metric-bar-animation' : 'metric-bar-no-animation';

    if (barValue <= 33) {
      return `mds-resource-green-bar ${animationClass}`;
    } else if (barValue <= 66) {
      return `mds-resource-yellow-bar ${animationClass}`;
    } else {
      return `mds-resource-red-bar ${animationClass}`;
    }
  }
}
