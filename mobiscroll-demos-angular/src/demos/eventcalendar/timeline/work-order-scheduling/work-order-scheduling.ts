import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendar,
  MbscEventcalendarOptions,
  MbscPopup,
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

@Component({
  selector: 'app-timeline-work-order-scheduling',
  styleUrl: './work-order-scheduling.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './work-order-scheduling.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  popupEventTitle: string | undefined;
  popupEventLocation: string | undefined;
  popupEventBill: number | undefined;
  popupEventNotes: string | undefined;
  popupEventDates: any;
  formatDate = formatDate;
  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-4,6'),
      end: dyndatetime('y,m,d-4,14'),
      title: 'Farmhouse TPH',
      location: '3339 Spruce Drive',
      resource: ['d2', 'cm2', 'd4', 'cp1', 'cm2', 'ce2', 'b1'],
      color: '#12ca6c',
      cost: 48000,
    },
    {
      start: dyndatetime('y,m,d-3,8'),
      end: dyndatetime('y,m,d-3,18'),
      title: 'Block of flats KXT',
      location: '4698 Mercer Street',
      resource: ['d1', 'cm1', 'd3', 'cp1', 'cm3', 'ce2', 'b2'],
      color: '#c170c3',
      cost: 36000,
    },
    {
      start: dyndatetime('y,m,d-2,12'),
      end: dyndatetime('y,m,d-2,20'),
      title: 'Apartment house UGL',
      location: '3647 Tavern Place',
      resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
      color: '#03c9d2',
      cost: 50000,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,19'),
      title: 'Detached house WKB',
      location: '956 Dovetail Estates',
      resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
      color: '#ff1515',
      cost: 55000,
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,18'),
      title: 'Apartment house XAZ',
      location: '4919 Jett Lane, Inglewood',
      resource: ['d1', 'cm4', 'd4', 'cp1', 'cm2', 'c2', 'b2'],
      color: '#12ca6c',
      cost: 62000,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,16'),
      title: 'Block of flats DRG',
      location: '486 Sycamore Fork Road',
      resource: ['d2', 'cm1', 'd3', 'cp2', 'ce2', 'c1', 'b1'],
      color: '#efd414',
      cost: 39000,
    },
    {
      start: dyndatetime('y,m,d+1,9'),
      end: dyndatetime('y,m,d+1,17'),
      title: 'Farmhouse YQK',
      location: '1563 Retreat Avenue',
      resource: ['d2', 'cm4', 'd4', 'cm2', 'cp1', 'c2', 'b2'],
      color: '#cf49d8',
      cost: 45000,
    },
    {
      start: dyndatetime('y,m,d+2,7'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Apartment house SWP',
      location: '628 Daylene Drive',
      resource: ['d2', 'cm3', 'd3', 'cm1', 'cp2', 'c1', 'b1'],
      color: '#c170c3',
      cost: 53000,
    },
    {
      start: dyndatetime('y,m,d+3,10'),
      end: dyndatetime('y,m,d+3,18'),
      title: 'Detached house OZL',
      location: '1830 Rinehart Road',
      resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
      color: '#ff1515',
      cost: 47000,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,19'),
      title: 'Farmhouse PSZ',
      location: '2410 Union Street',
      resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
      color: '#ff1515',
      cost: 64000,
    },
  ];
  myResources: MbscResource[] = [
    {
      id: 'contractors',
      name: 'Contractors',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 'builders',
          name: 'Builders',
          eventCreation: false,
          children: [
            {
              id: 'b1',
              name: 'Jude Chester',
            },
            {
              id: 'b2',
              name: 'Willis Kane',
            },
          ],
        },
        {
          id: 'carpenters',
          name: 'Carpenters',
          eventCreation: false,
          children: [
            {
              id: 'c1',
              name: 'Derek Austyn',
            },
            {
              id: 'c2',
              name: 'Merv Kenny',
            },
          ],
        },
      ],
    },
    {
      id: 'employees',
      name: 'Employees',
      eventCreation: false,
      children: [
        {
          id: 'cement_masons',
          name: 'Cement masons',
          eventCreation: false,
          children: [
            {
              id: 'ce1',
              name: 'Ford Kaiden',
            },
            {
              id: 'ce2',
              name: 'Jewell Ryder',
            },
          ],
        },
        {
          id: 'divers',
          name: 'Drivers',
          eventCreation: false,
          children: [
            {
              id: 'd1',
              name: 'Fred Valdez',
            },
            {
              id: 'd2',
              name: 'Jon Drake',
            },
            {
              id: 'd3',
              name: 'Lou Andie',
            },
            {
              id: 'd4',
              name: 'Leon Porter',
            },
          ],
        },
      ],
    },
    {
      id: 'equipment',
      name: 'Equipment',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 'concrete_mixers',
          name: 'Concrete mixers',
          eventCreation: false,
          children: [
            {
              id: 'cm1',
              name: 'AL 45 RFT',
            },
            {
              id: 'cm2',
              name: 'KQ 62 PVZ',
            },
            {
              id: 'cm3',
              name: 'RG 91 ZAL',
            },
            {
              id: 'cm4',
              name: 'XF 83 GFM',
            },
          ],
        },
        {
          id: 'concrete_pumps',
          name: 'Concrete pumps',
          eventCreation: false,
          children: [
            {
              id: 'cp1',
              name: 'GF 61 BVM',
            },
            {
              id: 'cp2',
              name: 'YC 55 ECT',
            },
          ],
        },
      ],
    },
  ];
  tempEvent!: MbscCalendarEvent;
  getCostString(cost: any): any {
    return cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  getRevenue(args: any): any {
    const events = args.events;
    let costs = 0;

    if (events) {
      for (const event of events) {
        costs += event.cost;
      }
    }
    return 'Total revenue: $' + this.getCostString(costs);
  }
  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: 'double',
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    dragTimeStep: 30,
    view: {
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
      },
    },
    onEventClick: (args) => {
      this.isEdit = true;
      this.tempEvent = args.event;
      // fill popup form with event data
      this.loadPopupForm(args.event);
      // set popup options
      this.popupHeaderText = 'Edit event';
      this.popupButtons = this.popupEditButtons;
      this.popupAnchor = args.domEvent.currentTarget;
      // open the popup
      this.popup.open();
    },
    onEventCreated: (args) => {
      setTimeout(() => {
        this.isEdit = false;
        this.tempEvent = args.event;
        // fill popup form with event data
        this.loadPopupForm(args.event);
        // set popup options
        this.popupHeaderText = 'New work order';
        this.popupButtons = this.popupAddButtons;
        this.popupAnchor = args.target;
        // open the popup
        this.popup.open();
      });
    },
    onEventDeleted: (args) => {
      setTimeout(() => {
        this.deleteEvent(args.event);
      });
    },
    onEventUpdated: () => {
      // here you can update the event in your storage as well, after drag & drop or resize
      // ...
    },
  };
  popupHeaderText!: string;
  popupAnchor: HTMLElement | undefined;
  popupAddButtons = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Add',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupEditButtons = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Save',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupButtons: any = [];
  popupOptions: MbscPopupOptions = {
    display: 'bottom',
    contentPadding: false,
    fullScreen: true,
    onClose: () => {
      if (!this.isEdit) {
        // refresh the list, if add popup was canceled, to remove the temporary event
        this.myEvents = [...this.myEvents];
      }
    },
    responsive: {
      medium: {
        display: 'anchored',
        width: 520,
        fullScreen: false,
        touchUi: false,
      },
    },
  };
  datePickerOptions: MbscDatepickerOptions = {
    controls: ['time'],
    select: 'range',
    showRangeLabels: false,
    touchUi: false,
    stepMinute: 30,
    minTime: '06:00',
    maxTime: '22:00',
  };
  isEdit = false;
  loadPopupForm(event: MbscCalendarEvent): void {
    this.popupEventTitle = event.title;
    this.popupEventLocation = event['location'];
    this.popupEventBill = +event['cost'] || 0;
    this.popupEventNotes = event['notes'];
    this.popupEventDates = [event.start, event.end];
    this.setCheckboxes(event.resource);
  }
  saveEvent(): void {
    this.tempEvent.title = this.popupEventTitle;
    this.tempEvent['location'] = this.popupEventLocation;
    this.tempEvent['cost'] = +this.popupEventBill! || 0;
    this.tempEvent['notes'] = this.popupEventNotes;
    this.tempEvent.start = this.popupEventDates[0];
    this.tempEvent.end = this.popupEventDates[1];
    this.tempEvent.resource = this.getCheckedResources();
    if (this.isEdit) {
      // update the event in the list
      this.myEvents = [...this.myEvents];
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      this.myEvents = [...this.myEvents, this.tempEvent];
      // here you can add the event to your storage as well
      // ...
    }
    // navigate the calendar
    this.calendar.navigateToEvent(this.tempEvent);
    // close the popup
    this.popup.close();
  }
  deleteEvent(event: MbscCalendarEvent): void {
    this.myEvents = this.myEvents.filter((item) => item.id !== event.id);
    this.notify.snackbar({
      button: {
        action: () => {
          this.myEvents = [...this.myEvents, event];
        },
        text: 'Undo',
      },
      message: 'Event deleted',
    });
    // here you can delete the event from your storage as well
    // ...
  }
  onDeleteClick(): void {
    this.deleteEvent(this.tempEvent);
    this.popup.close();
  }
  extendDefaultEvent(): MbscCalendarEvent {
    return {
      title: 'Work order',
      cost: 0,
    };
  }
  setCheckboxes(resource: any): void {
    for (const resources of this.myResources) {
      if (resources.children) {
        for (const res of resources.children) {
          if (res.children) {
            for (const r of res.children) {
              r['checked'] = resource.indexOf(r.id) !== -1;
            }
          }
        }
      }
    }
  }
  getCheckedResources(): any {
    const checkedResources = [];
    const startResource = this.tempEvent.resource;
    for (const resources of this.myResources) {
      if (resources.children) {
        for (const res of resources.children) {
          if (res.children) {
            for (const r of res.children) {
              if (r['checked']) {
                checkedResources.push(r.id);
              }
            }
          }
        }
      }
    }
    return checkedResources.findIndex((e) => e === startResource) === -1
      ? [...checkedResources, this.tempEvent.resource]
      : checkedResources;
  }
}
