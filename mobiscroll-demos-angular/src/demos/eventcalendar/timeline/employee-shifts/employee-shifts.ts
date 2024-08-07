import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscDatepickerValue,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource,
  MbscSlot,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-employee-shifts',
  styleUrl: './employee-shifts.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './employee-shifts.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  deletedShift!: MbscCalendarEvent;
  isEdit = false;
  minTime = '';
  maxTime = '';
  shift!: MbscCalendarEvent;
  shiftDates?: MbscDatepickerValue;
  shiftNotes?: string;

  popupHeader = '';
  popupButtons: Array<MbscPopupButton | 'cancel'> = [];

  popupResponsive: { [key: string]: MbscPopupOptions } = {
    medium: {
      display: 'center',
      fullScreen: false,
      touchUi: false,
      width: 400,
    },
  };

  staff: MbscResource[] = [
    {
      id: 1,
      name: 'Ryan',
      color: '#e20000',
      title: 'Cloud System Engineer',
      img: 'https://img.mobiscroll.com/demos/m1.png',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#60e81a',
      title: 'Help Desk Specialist',
      img: 'https://img.mobiscroll.com/demos/f1.png',
    },
    {
      id: 3,
      name: 'John',
      color: '#3ba7ff',
      title: 'Application Developer',
      img: 'https://img.mobiscroll.com/demos/m2.png',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#e25dd2',
      title: 'Network Administrator',
      img: 'https://img.mobiscroll.com/demos/m3.png',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#f1e920',
      title: 'Data Quality Manager',
      img: 'https://img.mobiscroll.com/demos/f2.png',
    },
    {
      id: 6,
      name: 'Emma',
      color: '#1ac38d',
      title: 'Product Tactics Agent',
      img: 'https://img.mobiscroll.com/demos/f3.png',
    },
  ];

  shifts: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-2,7'),
      end: dyndatetime('y,m,d-2,13'),
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-2,7'),
      end: dyndatetime('y,m,d-2,13'),
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-2,7'),
      end: dyndatetime('y,m,d-2,13'),
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-2,12'),
      end: dyndatetime('y,m,d-2,18'),
      title: '12:00 - 18:00',
      resource: 4,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,12'),
      end: dyndatetime('y,m,d-2,18'),
      title: '12:00 - 18:00',
      resource: 5,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,7'),
      end: dyndatetime('y,m,d-1,13'),
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,7'),
      end: dyndatetime('y,m,d-1,13'),
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,7'),
      end: dyndatetime('y,m,d-1,13'),
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,18'),
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,18'),
      title: '12:00 - 18:00',
      resource: 5,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,13'),
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,13'),
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,13'),
      title: '07:00 - 13:00',
      resource: 4,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,18'),
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,18'),
      title: '12:00 - 18:00',
      resource: 6,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,13'),
      title: '07:00 - 13:00',
      resource: 5,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,13'),
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,18'),
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,18'),
      title: '12:00 - 18:00',
      resource: 4,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,7'),
      end: dyndatetime('y,m,d+2,13'),
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+2,7'),
      end: dyndatetime('y,m,d+2,13'),
      title: '07:00 - 13:00',
      resource: 5,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+2,12'),
      end: dyndatetime('y,m,d+2,18'),
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,12'),
      end: dyndatetime('y,m,d+2,18'),
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,12'),
      end: dyndatetime('y,m,d+2,18'),
      title: '12:00 - 18:00',
      resource: 6,
      slot: 2,
    },
  ];

  mySlots: MbscSlot[] = [
    { id: 1, name: 'Morning' },
    { id: 2, name: 'Afternoon' },
  ];

  myInvalids: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d+1,0'),
      end: dyndatetime('y,m,d+1,23,59'),
      resource: 4,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,0'),
      end: dyndatetime('y,m,d-1,23,59'),
      resource: 2,
      slot: 2,
    },
  ];

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      eventList: true,
      startDay: 1,
      endDay: 5,
    },
  };

  getShiftTimes(event: MbscCalendarEvent) {
    const d = event.start as Date;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start: start,
      end: end,
    };
  }

  fillPopup(event: MbscCalendarEvent, isEdit: boolean) {
    this.isEdit = isEdit;
    this.minTime = event.slot === 1 ? '07:00' : '12:00';
    this.maxTime = event.slot === 1 ? '13:00' : '18:00';
    this.shift = event;
    this.shiftDates = [new Date(event.start as Date), new Date(event.end as Date)];
    this.shiftNotes = event['notes'];
  }

  deleteEvent(event: MbscCalendarEvent) {
    this.shifts = this.shifts.filter((s) => s.id !== event.id);
    this.notify.snackbar({
      button: {
        action: () => {
          this.shifts = [...this.shifts, event];
        },
        text: 'Undo',
      },
      message: 'Shift deleted',
    });
  }

  updateEvent(event: MbscCalendarEvent) {
    const index = this.shifts.findIndex((s) => s.id === event.id);
    const newShifts = [...this.shifts];

    newShifts.splice(index, 1, event);

    this.shifts = newShifts;
  }

  saveEvent(event: MbscCalendarEvent) {
    const dates = this.shiftDates as Date[];
    const start = dates[0];
    const end = dates[1] ? dates[1] : dates[0];

    const shiftStart = new Date(event.start as Date);
    const shiftEnd = new Date(event.end as Date);

    shiftStart.setHours(start.getHours(), start.getMinutes(), 0, 0);
    shiftEnd.setHours(end.getHours(), end.getMinutes(), 0, 0);

    event.start = shiftStart;
    event.end = shiftEnd;
    event.title = formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end);
    event['notes'] = this.shiftNotes;

    if (this.isEdit) {
      this.updateEvent(event);
    } else {
      // Add the new event to the list
      this.shifts = [...this.shifts, event];
    }
    this.popup.close();
  }

  handleEventClick(args: MbscEventClickEvent) {
    const event = args.event;
    const resource = args.resourceObj!;
    const slot = args.slotObj!;

    this.fillPopup(event, true);
    this.popupButtons = [
      'cancel',
      {
        handler: () => {
          this.saveEvent(event);
        },
        keyCode: 'enter',
        text: 'Save',
        cssClass: 'mbsc-popup-button-primary',
      },
    ];
    this.popupHeader =
      '<div>Edit ' +
      resource.name +
      '\'s hours</div><div class="mds-employee-shifts-header">' +
      formatDate('DDDD', new Date(event.start as Date)) +
      ' ' +
      slot.name +
      ', ' +
      formatDate('D MMMM YYYY', new Date(event.start as Date)) +
      '</div>';
    this.popup.open();
  }

  handleEventCreated(args: MbscEventCreatedEvent) {
    setTimeout(() => {
      const event = args.event;
      const slot = args.slotObj;

      this.fillPopup(event, false);
      this.popupButtons = [
        'cancel',
        {
          handler: () => {
            this.saveEvent(event);
          },
          keyCode: 'enter',
          text: 'Add',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
      this.popupHeader =
        '<div>New shift</div><div class="mds-employee-shifts-header">' +
        formatDate('DDDD', new Date(event.start as Date)) +
        ' ' +
        slot.name +
        ', ' +
        formatDate('D MMMM YYYY', new Date(event.start as Date)) +
        '</div>';
      this.popup.open();
    });
  }

  handleEventCreateFailed() {
    this.notify.toast({ message: "Can't create shift" });
  }

  handleEventDeleted(args: MbscEventDeletedEvent) {
    setTimeout(() => {
      this.deleteEvent(args.event);
    });
  }

  handleEventUpdated(args: MbscEventUpdatedEvent) {
    setTimeout(() => {
      const shift = args.event;
      if (shift.slot !== args.oldEvent!.slot) {
        const data = this.getShiftTimes(shift);
        shift.start = data.start;
        shift.end = data.end;
        shift.title = data.title;
        this.updateEvent(shift);
      }
    });
  }

  handleEventUpdateFailed() {
    this.notify.toast({ message: "Can't move shift" });
  }

  handlePopupClose() {
    if (!this.isEdit) {
      // Remove event if popup is cancelled
      this.shifts = [...this.shifts];
    }
  }

  handleShiftDeleteClick() {
    this.deleteEvent(this.shift);
    this.popup.close();
  }
}
