import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendarView,
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
  selector: 'app-popup-add-event-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-event-modal.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('popup', { static: false }) popup!: MbscPopup;

  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: dyndatetime('y, m, 8, 13'),
      end: dyndatetime('y, m, 8, 13, 45'),
      title: "Lunch @ Butcher's",
      description: '',
      allDay: false,
      bufferBefore: 15,
      free: true,
      color: '#009788',
    },
    {
      id: 2,
      start: dyndatetime('y, m, d, 15'),
      end: dyndatetime('y, m, d, 16'),
      title: 'Conference',
      description: '',
      allDay: false,
      bufferBefore: 30,
      free: false,
      color: '#ff9900',
    },
    {
      id: 3,
      start: dyndatetime('y, m, d - 1, 18'),
      end: dyndatetime('y, m, d - 1, 22'),
      title: 'Site Visit',
      description: '',
      allDay: false,
      bufferBefore: 60,
      free: true,
      color: '#3f51b5',
    },
    {
      id: 4,
      start: dyndatetime('y, m, d + 1, 10, 30'),
      end: dyndatetime('y, m, d + 1, 11, 30'),
      title: 'Stakeholder mtg.',
      description: '',
      allDay: false,
      free: false,
      color: '#f44437',
    },
  ];

  myView: MbscEventcalendarView = { calendar: { type: 'month' } };

  popupEventTitle: string | undefined;
  popupEventDescription = '';
  popupEventAllDay = true;
  popupEventDates: any;
  popupEventStatus = false;
  mySelectedDate: any;

  datePickerControls = ['calendar'];
  datetimePickerControls = ['calendar', 'time'];

  datePickerOptions: MbscDatepickerOptions = {
    select: 'range',
    showRangeLabels: false,
    touchUi: true,
    display: 'anchored',
  };

  popupOptions: MbscPopupOptions = {
    width: 400,
    contentPadding: false,
    headerText: 'Add new event',
    display: 'center',
    buttons: [
      'cancel',
      {
        text: 'Add',
        keyCode: 'enter',
        handler: () => {
          const newEvent = {
            title: this.popupEventTitle,
            description: this.popupEventDescription,
            allDay: this.popupEventAllDay,
            status: this.popupEventStatus,
            start: this.popupEventDates[0],
            end: this.popupEventDates[1],
          };

          this.myEvents = [...this.myEvents, newEvent];
          this.mySelectedDate = this.popupEventDates[0];

          this.popup.close();
          this.notify.toast({
            message: 'Event added',
          });
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    showOverlay: false,
  };

  addEvent(): void {
    this.popupEventTitle = 'New Event';
    this.popupEventDescription = '';
    this.popupEventAllDay = false;
    this.popupEventStatus = false;
    this.popupEventDates = [new Date(), new Date()];
    this.popup.open();
  }
}
