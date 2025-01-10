import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendar,
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
  selector: 'app-timeline-create-read-update-delete-crud',
  styleUrl: './create-read-update-delete-CRUD.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './create-read-update-delete-CRUD.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  @ViewChild('colorPicker', { static: false })
  colorPicker: any;

  popupEventTitle: string | undefined;
  popupEventDescription = '';
  popupEventAllDay = true;
  popupTravelTime = 0;
  popupEventDates: any;
  popupEventStatus = 'busy';
  switchLabel: any = 'All-day';
  tempColor = '';
  selectedColor = '';
  colorAnchor: HTMLElement | undefined;
  colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '#5ac8fa', '#009788', '#4baf4f', '#7e5d4e'];
  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,15'),
      title: "Lunch @ Butcher's",
      description: '',
      allDay: false,
      bufferBefore: 15,
      free: true,
      resource: 3,
    },
    {
      id: 2,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,16'),
      title: 'Conference',
      description: '',
      allDay: false,
      bufferBefore: 30,
      free: false,
      resource: 5,
    },
    {
      id: 3,
      start: dyndatetime('y,m,d,18'),
      end: dyndatetime('y,m,d,22'),
      title: 'Site Visit',
      description: '',
      allDay: false,
      bufferBefore: 60,
      free: true,
      resource: 4,
    },
    {
      id: 4,
      start: dyndatetime('y,m,d,10,30'),
      end: dyndatetime('y,m,d,13'),
      title: 'Stakeholder mtg.',
      description: '',
      allDay: false,
      free: false,
      resource: 1,
    },
  ];
  myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#ffeb3c',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#f44437',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#3f51b5',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#4baf4f',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff9900',
    },
  ];
  tempEvent!: MbscCalendarEvent;
  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: 'double',
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: { type: 'day' },
    },
    onEventClick: (args) => {
      this.isEdit = true;
      this.tempEvent = args.event;
      // fill popup form with event data
      this.loadPopupForm(args.event);
      this.selectedColor = args.event.color || args.resourceObj!.color || '';
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
        this.selectedColor = args.resourceObj!.color || '';
        // set popup options
        this.popupHeaderText = 'New Event';
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
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  };
  datePickerControls = ['date'];
  datePickerResponsive: any = {
    medium: {
      controls: ['calendar'],
      touchUi: false,
    },
  };
  datetimePickerControls = ['datetime'];
  datetimePickerResponsive = {
    medium: {
      controls: ['calendar', 'time'],
      touchUi: false,
    },
  };
  datePickerOptions: MbscDatepickerOptions = {
    select: 'range',
    showRangeLabels: false,
    touchUi: true,
  };
  isEdit = false;
  colorOptions: MbscPopupOptions = {
    display: 'bottom',
    contentPadding: false,
    showArrow: false,
    showOverlay: false,
    buttons: [
      'cancel',
      {
        text: 'Set',
        keyCode: 'enter',
        handler: () => {
          this.selectedColor = this.tempColor;
          this.colorPicker.close();
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    responsive: {
      medium: {
        display: 'anchored',
        buttons: [],
      },
    },
  };
  loadPopupForm(event: MbscCalendarEvent): void {
    this.popupEventTitle = event.title;
    this.popupEventDescription = event['description'];
    this.popupEventDates = [event.start, event.end];
    this.popupEventAllDay = event.allDay || false;
    this.popupTravelTime = event.bufferBefore || 0;
    this.popupEventStatus = event['status'] || 'busy';
  }
  saveEvent(): void {
    this.tempEvent.title = this.popupEventTitle;
    this.tempEvent['description'] = this.popupEventDescription;
    this.tempEvent.start = this.popupEventDates[0];
    this.tempEvent.end = this.popupEventDates[1];
    this.tempEvent.allDay = this.popupEventAllDay;
    this.tempEvent.bufferBefore = this.popupTravelTime;
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

  selectColor(color: string): void {
    this.tempColor = color;
  }

  openColorPicker(ev: any): void {
    this.selectColor(this.selectedColor);
    this.colorAnchor = ev.currentTarget;
    this.colorPicker.open();
  }

  changeColor(ev: any): void {
    const color = ev.currentTarget.getAttribute('data-value');
    this.selectColor(color);

    if (!this.colorPicker.s.buttons.length) {
      this.selectedColor = color;
      this.colorPicker.close();
    }
  }
}
