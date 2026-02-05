import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscModule,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResponsiveOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-create-read-update-delete-crud',
  styleUrl: './create-read-update-delete-CRUD.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './create-read-update-delete-CRUD.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('addEditPopup', { static: false })
  addEditPopup!: MbscPopup;

  @ViewChild('colorPicker', { static: false })
  colorPicker!: MbscPopup;

  eventId: string | number | undefined;
  eventTitle: string | undefined;
  eventDescription = '';
  eventAllDay = false;
  eventDates: MbscDateType[] = [];
  eventBuffer = 0;
  eventColor = '';
  eventStatus = false;

  selectedColor = '';
  statusValue = 'busy';
  editedEvent: MbscCalendarEvent | null = null;
  addEditPopupAnchor: HTMLElement | undefined;
  colorPickerAnchor: HTMLElement | undefined;
  isEdit = false;
  isSuccess = false;

  myView: MbscEventcalendarView = { calendar: { labels: true } };

  colors: string[] = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: dyndatetime('y,m,8,13'),
      end: dyndatetime('y,m,8,13,45'),
      title: "Lunch @ Butcher's",
      description: '',
      allDay: false,
      bufferBefore: 15,
      free: true,
      color: '#009788',
    },
    {
      id: 2,
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,16'),
      title: 'Conference',
      description: '',
      allDay: false,
      bufferBefore: 30,
      free: false,
      color: '#ff9900',
    },
    {
      id: 3,
      start: dyndatetime('y,m,d-1,18'),
      end: dyndatetime('y,m,d-1,22'),
      title: 'Site Visit',
      description: '',
      allDay: false,
      bufferBefore: 60,
      free: true,
      color: '#3f51b5',
    },
    {
      id: 4,
      start: dyndatetime('y,m,d+1,10,30'),
      end: dyndatetime('y,m,d+1,11,30'),
      title: 'Stakeholder mtg.',
      description: '',
      allDay: false,
      free: false,
      color: '#f44437',
    },
  ];

  editButtons: (MbscPopupButton | "ok" | "close" | "set" | "cancel")[] = [
    'cancel',
    {
      text: 'Save',
      keyCode: 'enter',
      cssClass: 'mbsc-popup-button-primary',
      handler: () => {
        const updatedEvent: MbscCalendarEvent = this.getEventData();
        const index = this.myEvents.findIndex((x) => x.id === updatedEvent.id);
        const newEventList = [...this.myEvents];

        // Update event in the list
        newEventList.splice(index, 1, updatedEvent);
        this.myEvents = newEventList;

        this.calendar.navigateToEvent(updatedEvent);
        this.addEditPopup.close();
      },
    },
  ];

  addButtons: (MbscPopupButton | "ok" | "close" | "set" | "cancel")[] = [
    'cancel',
    {
      text: 'Add',
      keyCode: 'enter',
      cssClass: 'mbsc-popup-button-primary',
      handler: () => {
        const newEvent: MbscCalendarEvent = this.getEventData();

        // Add new event to the list
        this.myEvents = [...this.myEvents, newEvent];

        this.isSuccess = true;
        this.calendar.navigateToEvent(newEvent);
        this.addEditPopup.close();
      },
    },
  ]

  addEditPopupResponsive: MbscResponsiveOptions<MbscPopupOptions> = {
    medium: {
      display: 'anchored',
      width: 400,
      fullScreen: false,
      touchUi: false,
    }
  }

  colorPickerButtons: (MbscPopupButton | "ok" | "close" | "set" | "cancel")[] = [
    'cancel',
    {
      text: 'Set',
      keyCode: 'enter',
      handler: () => this.applySelectedColor(this.selectedColor),
      cssClass: 'mbsc-popup-button-primary',
    },
  ];

  colorPickerResponsive: MbscResponsiveOptions<MbscPopupOptions> = {
    medium: {
      display: 'anchored',
      buttons: [],
      touchUi: false,
    },
  };

  fillPopup(event: MbscCalendarEvent): void {
    this.eventId = event.id;
    this.eventTitle = event.title || '';
    this.eventDescription = event['description'] || '';
    this.eventAllDay = event.allDay!;
    this.eventDates = [event.start!, event.end!];
    this.eventBuffer = event.bufferBefore || 0;
    this.eventColor = event.color || '';
    this.eventStatus = event['free'] || false;
    this.statusValue = event['free'] ? 'free' : 'busy';
  }

  createEditPopup(event: MbscCalendarEvent, target: HTMLElement): void {
    this.isEdit = true;
    this.editedEvent = event;
    this.addEditPopupAnchor = target;
    this.fillPopup(event);
    this.addEditPopup.open();
  }

  createAddPopup(event: MbscCalendarEvent, target: HTMLElement): void {
    this.isSuccess = false;
    this.isEdit = false;
    this.editedEvent = event;
    this.addEditPopupAnchor = target;
    this.fillPopup(event);
    this.addEditPopup.open();
  }

  getEventData(): (MbscCalendarEvent) {
    return {
      id: this.eventId,
      title: this.eventTitle,
      description: this.eventDescription,
      allDay: this.eventAllDay,
      start: this.eventDates[0],
      end: this.eventDates[1],
      bufferBefore: this.eventBuffer,
      color: this.eventColor,
      free: this.statusValue === 'free',
    }
  }

  handleAddEditPopupClose(): void {
    if (!this.isEdit && !this.isSuccess) {
      // Refresh the list, if add popup was canceled, to remove the temporary event
      this.myEvents = [...this.myEvents];
    }
  }

  handleEventClick(args: MbscEventClickEvent): void {
    this.createEditPopup(args.event, args.domEvent.currentTarget);
  }

  handleEventCreated(args: MbscEventCreatedEvent): void {
    setTimeout(() => {
      this.createAddPopup(args.event, args.target!);
    });
  }

  handleEventDeleted() {
    this.notify.snackbar({
      button: {
        action: () => {
          this.myEvents = [...this.myEvents, this.editedEvent!];
        },
        text: 'Undo',
      },
      message: 'Event deleted',
    });
  }

  handleDeleteButtonClick() {
    const filteredEvents = this.myEvents.filter((e) => e.id !== this.editedEvent!.id);
    this.myEvents = filteredEvents;
    this.addEditPopup.close();
    this.notify.snackbar({
      button: {
        action: () => {
          this.myEvents = [...this.myEvents, this.editedEvent!];
        },
        text: 'Undo',
      },
      message: 'Event deleted',
    });
  }

  handleEventColorClick(ev: MouseEvent): void {
    this.colorPickerAnchor = ev.currentTarget as HTMLElement;
    this.colorPicker.open();
  }

  handleColorChange(ev: MouseEvent): void {
    const color = (ev.currentTarget as HTMLDivElement).getAttribute('data-value') || '';
    this.eventColor = color;
    this.selectedColor = color;
    if (!this.colorPicker.s.buttons!.length) {
      this.applySelectedColor(color);
    }
  }

  applySelectedColor(color: string): void {
    this.eventColor = color;
    this.colorPicker.close();
  }

}
