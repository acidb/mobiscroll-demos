import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-show-task-progress-on-event',
  styleUrl: './show-task-progress-on-event.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-task-progress-on-event.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  popupEventTitle: string | undefined;

  popupEventDates: any;
  popupEventStatus = 'busy';
  calendarSelectedDate: any = new Date();
  switchLabel: any = 'All-day';
  tempColor = '';
  selectedColor = '';
  colorAnchor: HTMLElement | undefined;
  colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];
  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Design Homepage',
      resource: 'alice',
      progress: 100,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Create Wireframes',
      resource: 'bob',
      progress: 100,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+9)',
      title: 'Develop Frontend',
      resource: 'charlie',
      progress: 45,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+9)',
      title: 'Develop Backend',
      resource: 'dave',
      progress: 35,
    },
    {
      start: 'dyndatetime(y,m,d+9)',
      end: 'dyndatetime(y,m,d+13)',
      title: 'Test Website',
      resource: 'erin',
      progress: 0,
    },
    {
      start: 'dyndatetime(y,m,d+6)',
      end: 'dyndatetime(y,m,d+13)',
      title: 'Fix Bugs',
      resource: 'frank',
      progress: 0,
    },
    {
      start: 'dyndatetime(y,m,d+13)',
      end: 'dyndatetime(y,m,d+16)',
      title: 'Deploy Website',
      resource: 'george',
      progress: 0,
    },
  ];
  myResources = [
    {
      id: 'gro1',
      name: 'Designer Team',
      color: '#76e083',
      eventCreation: false,
      children: [
        {
          id: 'alice',
          name: 'Alice',
          title: 'Designer',
          color: '#1dab2f',
        },
        {
          id: 'bob',
          name: 'Bob',
          title: 'Designer',
          color: '#76e083',
        },
      ],
    },
    {
      id: 'gro2',
      name: 'Development Team',
      color: '#ff1717',
      eventCreation: false,
      children: [
        {
          id: 'charlie',
          name: 'Charlie',
          title: 'Frontend Developer',
          color: '#4981d6',
        },
        {
          id: 'dave',
          name: 'Dave',
          title: 'Backend Developer',
          color: '#f7961e',
        },
        {
          id: 'frank',
          name: 'Frank',
          title: 'Full-Stack Developer',
          color: '#34c8e0',
        },
        {
          id: 'george',
          name: 'George',
          title: 'DevOps Engineer',
          color: '#e25dd2',
        },
      ],
    },

    {
      id: 'gro3',
      name: 'QA Team',
      color: '#d6d145',
      eventCreation: false,
      children: [
        {
          id: 'erin',
          name: 'Erin',
          title: 'QA Tester',
          color: '#d6d145',
        },
      ],
    },
  ];

  tempEvent!: MbscCalendarEvent;
  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: { type: 'month', eventList: true },
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
        this.popupHeaderText = 'New Event';
        this.popupButtons = this.popupAddButtons;
        this.popupAnchor = args.target;
        // open the popup
        this.popup.open();
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
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  };
  datePickerControls = ['calendar'];
  datePickerResponsive: any = {
    medium: {
      controls: ['calendar'],
      touchUi: false,
    },
  };
  datetimePickerControls = ['datetime'];
  datetimePickerResponsive = {
    medium: {
      controls: ['calendar'],
      touchUi: false,
    },
  };
  datePickerOptions: MbscDatepickerOptions = {
    select: 'range',
    showRangeLabels: false,
    touchUi: true,
  };
  isEdit = false;

  loadPopupForm(event: MbscCalendarEvent): void {
    this.popupEventTitle = event.title;

    this.popupEventDates = [event.start, event.end];

    this.popupEventStatus = event['status'] || 'busy';
    this.selectedColor = event.color || '';
  }
  saveEvent(): void {
    this.tempEvent.title = this.popupEventTitle;

    this.tempEvent.start = this.popupEventDates[0];
    this.tempEvent.end = this.popupEventDates[1];

    this.tempEvent['status'] = this.popupEventStatus;
    this.tempEvent.color = this.selectedColor;
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
    this.calendarSelectedDate = this.popupEventDates[0];
    // close the popup
    this.popup.close();
  }
}
