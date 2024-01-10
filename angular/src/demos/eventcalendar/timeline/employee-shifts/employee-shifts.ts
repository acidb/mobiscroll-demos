import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'employee-shifts',
  styleUrl: './employee-shifts.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './employee-shifts.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;
  shiftNotes: string | undefined;
  shiftDate: any;
  tempShift!: MbscCalendarEvent;
  minTime = '';
  maxTime = '';
  popupHeader!: string;
  staff = [
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
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-2,7)',
      end: 'dyndatetime(y,m,d-2,13)',
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-2,12)',
      end: 'dyndatetime(y,m,d-2,18)',
      title: '12:00 - 18:00',
      resource: 4,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d-2,12)',
      end: 'dyndatetime(y,m,d-2,18)',
      title: '12:00 - 18:00',
      resource: 5,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d-1,7)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,7)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: '07:00 - 13:00',
      resource: 2,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,7)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,18)',
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,18)',
      title: '12:00 - 18:00',
      resource: 5,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,13)',
      title: '07:00 - 13:00',
      resource: 3,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d,7)',
      end: 'dyndatetime(y,m,d,13)',
      title: '07:00 - 13:00',
      resource: 4,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
      title: '12:00 - 18:00',
      resource: 6,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+1,7)',
      end: 'dyndatetime(y,m,d+1,13)',
      title: '07:00 - 13:00',
      resource: 5,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+1,7)',
      end: 'dyndatetime(y,m,d+1,13)',
      title: '07:00 - 13:00',
      resource: 6,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+1,12)',
      end: 'dyndatetime(y,m,d+1,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+1,12)',
      end: 'dyndatetime(y,m,d+1,18)',
      title: '12:00 - 18:00',
      resource: 4,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,7)',
      end: 'dyndatetime(y,m,d+2,13)',
      title: '07:00 - 13:00',
      resource: 1,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+2,7)',
      end: 'dyndatetime(y,m,d+2,13)',
      title: '07:00 - 13:00',
      resource: 5,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d+2,12)',
      end: 'dyndatetime(y,m,d+2,18)',
      title: '12:00 - 18:00',
      resource: 2,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,12)',
      end: 'dyndatetime(y,m,d+2,18)',
      title: '12:00 - 18:00',
      resource: 3,
      slot: 2,
    },
    {
      start: 'dyndatetime(y,m,d+2,12)',
      end: 'dyndatetime(y,m,d+2,18)',
      title: '12:00 - 18:00',
      resource: 6,
      slot: 2,
    },
  ];
  slots = [
    {
      id: 1,
      name: 'Morning',
    },
    {
      id: 2,
      name: 'Afternoon',
    },
  ];
  invalid = [
    {
      start: 'dyndatetime(y,m,d+1,0)',
      end: 'dyndatetime(y,m,d+1,23,59)',
      resource: 4,
      slot: 1,
    },
    {
      start: 'dyndatetime(y,m,d-1,0)',
      end: 'dyndatetime(y,m,d-1,23,59)',
      resource: 2,
      slot: 2,
    },
  ];
  calendarOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'week',
        eventList: true,
        startDay: 1,
        endDay: 5,
      },
    },
    dragToCreate: false,
    dragToResize: false,
    dragToMove: true,
    clickToCreate: true,
    resources: this.staff,
    invalid: this.invalid,
    slots: this.slots,
    extendDefaultEvent: (ev) => {
      const d = ev.start;
      const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 7 : 12);
      const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 13 : 18);

      return {
        title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
        start,
        end,
        resource: ev.resource,
      };
    },
    onEventClick: (args: any) => {
      const shift: any = args.event;
      const resource: any = this.staff.find((r) => r.id === shift.resource);
      const slot: any = this.slots.find((s) => s.id === shift.slot);

      this.isEdit = true;
      this.tempShift = args.event;
      this.minTime = shift.slot === 1 ? '07:00' : '12:00';
      this.maxTime = shift.slot === 1 ? '13:00' : '18:00';
      // fill popup form with event data
      this.loadPopupForm(args.event);
      // set popup options
      this.popupButtons = this.popupEditButtons;
      this.popupHeader =
        '<div>Edit ' +
        resource.name +
        '\'s hours</div><div class="employee-shifts-day">' +
        formatDate('DDDD', new Date(shift.start)) +
        ' ' +
        slot.name +
        ',' +
        formatDate('DD MMMM YYYY', new Date(shift.start)) +
        '</div>';
      // open the popup
      this.popup.open();
    },
    onEventCreated: (args: any) => {
      setTimeout(() => {
        const shift: any = args.event;
        const start: any = shift.start;
        const slot: any = this.slots.find((s) => s.id === shift.slot);
        this.isEdit = false;
        this.tempShift = shift;
        this.minTime = shift.slot === 1 ? '07:00' : '12:00';
        this.maxTime = shift.slot === 1 ? '13:00' : '18:00';
        // fill popup form with event data
        this.loadPopupForm(shift);
        // set popup options
        this.popupButtons = this.popupAddButtons;
        this.popupHeader =
          '<div>New shift</div><div class="employee-shifts-day">' +
          formatDate('DDDD', new Date(start)) +
          ' ' +
          slot.name +
          ',' +
          formatDate('DD MMMM YYYY', new Date(start)) +
          '</div>';
        // open the popup
        this.popup.open();
      });
    },
    onEventDeleted: (args) => {
      setTimeout(() => {
        this.deleteShift(args.event);
      });
    },
  };
  rangeOptions: MbscDatepickerOptions = {
    controls: ['time'],
    select: 'range',
    display: 'anchored',
    showRangeLabels: false,
    touchUi: false,
    stepMinute: 30,
    timeWheels: '|h:mm A|',
    onChange: (args: any) => {
      const date = args.value;

      // update shift's start/end date
      this.tempShift.start = date[0];
      this.tempShift.end = date[1] ? date[1] : date[0];
      this.tempShift.title = formatDate('HH:mm', date[0]) + ' - ' + formatDate('HH:mm', date[1] ? date[1] : date[0]);
    },
  };
  popupAddButtons = [
    'cancel',
    {
      handler: () => {
        this.saveShift();
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
        this.saveShift();
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
        // refresh the list, if add popup was canceled, to remove the temporary shift
        this.shifts = [...this.shifts];
      }
    },
    responsive: {
      medium: {
        display: 'center',
        width: 400,
        fullScreen: false,
        touchUi: false,
        showOverlay: false,
      },
    },
  };

  isEdit = false;

  loadPopupForm(shift: any): void {
    this.shiftNotes = shift.notes;
    this.shiftDate = [shift.start, shift.end];
  }

  saveShift(): void {
    const start = new Date(this.shiftDate[0]);
    const end = new Date(this.shiftDate[1]);
    this.tempShift.title = formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end);
    this.tempShift['notes'] = this.shiftNotes;
    this.tempShift.start = start;
    this.tempShift.end = end;

    if (this.isEdit) {
      // update the shift in the list
      this.shifts = [...this.shifts];
    } else {
      // add the new shift to the list
      this.shifts = [...this.shifts, this.tempShift];
    }
    // close the popup
    this.popup.close();
  }

  deleteShift(shift: MbscCalendarEvent): void {
    this.shifts = this.shifts.filter((item) => item.id !== shift.id);
    this.notify.snackbar({
      button: {
        action: () => {
          this.shifts = [...this.shifts, shift];
        },
        text: 'Undo',
      },
      message: 'Shift deleted',
    });
  }

  onDeleteClick(): void {
    this.deleteShift(this.tempShift);
    this.popup.close();
  }

  defaultShift(args: any): any {
    const d = args.start;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start,
      end,
      resource: args.resource,
    };
  }
}
