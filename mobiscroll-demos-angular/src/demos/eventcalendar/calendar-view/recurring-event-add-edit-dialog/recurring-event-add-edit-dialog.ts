import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  setOptions,
  updateRecurringEvent /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const days = [
  {
    name: 'Sunday',
    short: 'SU',
    checked: true,
  },
  {
    name: 'Monday',
    short: 'MO',
    checked: false,
  },
  {
    name: 'Tuesday',
    short: 'TU',
    checked: false,
  },
  {
    name: 'Wednesday',
    short: 'WE',
    checked: false,
  },
  {
    name: 'Thursday',
    short: 'TH',
    checked: false,
  },
  {
    name: 'Friday',
    short: 'FR',
    checked: false,
  },
  {
    name: 'Saturday',
    short: 'SA',
    checked: false,
  },
];

const ordinalList: any = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth' };

function getWeekDayNum(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  let count = 0;

  for (let d = firstDayOfMonth; d < lastDayOfMonth; d.setDate(d.getDate() + 7)) {
    if (date >= d) {
      count++;
    } else {
      break;
    }
  }

  return Math.max(1, count);
}

@Component({
  selector: 'app-eventcalendar-recurring-event-add-edit-dialog',
  styleUrl: './recurring-event-add-edit-dialog.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './recurring-event-add-edit-dialog.html',
})
export class AppComponent implements OnInit {
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;
  popupEventTitle: string | undefined;
  popupEventDescription = '';
  popupEventAllDay = true;
  popupEventDates: any;
  calendarSelectedDate: any = new Date();
  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      start: 'dyndatetime(y,m,21)',
      end: 'dyndatetime(y,m,24)',
      title: 'Alice OFF',
      allDay: true,
      color: '#67ab0d',
    },
    {
      id: 2,
      start: '18:00',
      end: '20:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO',
      },
      title: 'Football training',
      allDay: false,
      color: '#fd966a',
    },
    {
      id: 3,
      start: '17:00',
      end: '17:30',
      recurring: {
        repeat: 'monthly',
        day: 1,
      },
      title: 'Rent payment',
      allDay: false,
      color: '#3ea39e',
    },
    {
      id: 4,
      recurring: {
        repeat: 'yearly',
        day: 6,
        month: 5,
      },
      title: 'Dexter BD',
      allDay: true,
      color: '#d00f0f',
    },
  ];
  repeatData = [
    {
      value: 'norepeat',
      text: 'Does not repeat',
    },
    {
      value: 'daily',
      text: 'Daily',
    },
    {
      value: 'weekly',
      text: 'Weekly',
    },
    {
      value: 'monthly',
      text: 'Monthly',
    },
    {
      value: 'monthly-pos',
      text: 'Monthly',
    },
    {
      value: 'yearly',
      text: 'Yearly',
    },
    {
      value: 'yearly-pos',
      text: 'Yearly',
    },
    {
      value: 'weekday',
      text: 'Every weekday (Monday to Friday)',
    },
    {
      value: 'custom',
      text: 'Custom',
    },
  ];
  selectedRepeat = 'norepeat';
  selectResponsive = {
    xsmall: {
      touchUi: true,
    },
    small: {
      touchUi: false,
    },
  };
  weekDays = ['SU'];
  showCustomRepeat = false;
  repeatType = 'daily';
  repeatNr = 1;
  monthlyDays = [1];
  monthlyDay = 1;
  yearlyDays = [1];
  yearlyDay = 1;
  months = [
    {
      value: 1,
      text: 'January',
    },
    {
      value: 2,
      text: 'February',
    },
    {
      value: 3,
      text: 'March',
    },
    {
      value: 4,
      text: 'April',
    },
    {
      value: 5,
      text: 'May',
    },
    {
      value: 6,
      text: 'June',
    },
    {
      value: 7,
      text: 'July',
    },
    {
      value: 8,
      text: 'August',
    },
    {
      value: 9,
      text: 'September',
    },
    {
      value: 10,
      text: 'October',
    },
    {
      value: 11,
      text: 'November',
    },
    {
      value: 12,
      text: 'December',
    },
  ];
  selectedMonth = 1;
  untilDate: any;
  occurrences = 10;
  condition = 'never';
  tempEvent: any;

  @ViewChild('recurringEditModePopup', { static: false })
  recurringEditModePopup!: MbscPopup;

  recurringEditMode: any = 'current';
  newEvent: MbscCalendarEvent = {};
  originalRecurringEvent: any;
  eventOccurrence: MbscCalendarEvent = {};
  editFromPopup = false;
  recurringDelete = false;
  recurringActionText = 'Edit';

  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: 'double',
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      calendar: { labels: true },
    },
    onEventClick: (args: any) => {
      const event = args.event;
      this.isEdit = true;
      this.tempEvent = args.event;

      // recurring event
      if (event.recurring) {
        this.originalRecurringEvent = event['original'];
        this.eventOccurrence = { ...event };

        // fill popup form with event data
        this.loadPopupForm(event);
      } else {
        this.originalRecurringEvent = {};
        // fill popup form with event data
        this.loadPopupForm(event);
      }

      // set popup options
      this.popupHeaderText = 'Edit event';
      this.popupButtons = this.popupEditButtons;
      this.popupAnchor = args.domEvent.currentTarget;
      // open the popup
      this.popup.open();
    },
    onEventUpdate: (args: any) => {
      const event = args.event;
      if (event.recurring) {
        this.originalRecurringEvent = args.oldEvent;
        // we need this on delete
        this.tempEvent = event;
        this.eventOccurrence = args.oldEventOccurrence;
        if (args.domEvent.keyCode === 46) {
          this.recurringActionText = 'Delete';
          this.recurringDelete = true;
          this.recurringEditModePopup.open();
        } else {
          this.recurringActionText = 'Edit';
          this.recurringDelete = false;
          this.recurringEditModePopup.open();
        }
        return false;
      } else {
        return true;
      }
    },
    onEventCreate: (args: any) => {
      const originEvent = args.originEvent;
      if (originEvent && originEvent.recurring) {
        this.newEvent = args.event;
        return false;
      } else {
        return true;
      }
    },
    onEventCreated: (args: any) => {
      setTimeout(() => {
        this.isEdit = false;
        this.tempEvent = args.event;
        // fill popup form with event data
        this.loadPopupForm(args.event);
        // set popup options
        this.popupHeaderText = 'New Event';
        this.popupButtons = this.popupAddButtons;
        this.popupAnchor = args.target;
        this.resetCustomValues();
        // open the popup
        this.popup.open();
      });
    },
    onEventDeleted: (args: any) => {
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
        if (Object.keys(this.originalRecurringEvent).length !== 0) {
          this.editFromPopup = true;
          this.recurringActionText = 'Edit';
          this.recurringDelete = false;
          this.recurringEditModePopup.open();
        } else {
          this.saveEvent();
        }
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
    scrollLock: false,
    height: 500,
    onClose: () => {
      this.repeatData = this.repeatData.filter((item) => item.value !== 'custom-value');
      if (!this.isEdit) {
        // refresh the list, if add popup was canceled, to remove the temporary event
        this.myEvents = [...this.myEvents];
      }
      this.editFromPopup = false;
    },
    responsive: {
      medium: {
        display: 'anchored',
        width: 510,
        fullScreen: false,
        touchUi: false,
      },
    },
    cssClass: 'md-recurring-event-editor-popup',
  };
  editModePopupOptions: MbscPopupOptions = {
    display: 'bottom',
    contentPadding: false,
    buttons: [
      'cancel',
      {
        text: 'Ok',
        keyCode: 'enter',
        handler: () => {
          if (this.recurringDelete) {
            this.deleteRecurringEvent();
          } else {
            if (this.editFromPopup) {
              this.setTempEvent();
            }

            if (this.recurringEditMode === 'current') {
              delete this.tempEvent.id;
              delete this.tempEvent.recurring;
              delete this.tempEvent.recurringException;
            }

            const events = updateRecurringEvent(
              this.originalRecurringEvent,
              this.eventOccurrence,
              this.editFromPopup ? null : this.newEvent,
              this.editFromPopup ? this.tempEvent : null,
              this.recurringEditMode,
            );

            // update event
            let newEventList = [...this.myEvents];
            const index = newEventList.findIndex((x) => x.id === events.updatedEvent.id);
            newEventList[index] = events.updatedEvent;

            // add new event
            if (events.newEvent) {
              newEventList = [...newEventList, events.newEvent];
            }

            this.myEvents = newEventList;

            this.popup.close();
            this.recurringEditModePopup.close();
          }
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    onClose: () => {
      this.recurringEditMode = 'current';
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
  deleteRecurringEvent(): void {
    switch (this.recurringEditMode) {
      case 'following': {
        let followingExceptions = this.tempEvent.recurringException || [];
        followingExceptions = [...followingExceptions, this.tempEvent.start];
        this.originalRecurringEvent.recurringException = followingExceptions;
        this.originalRecurringEvent.recurring.until = this.tempEvent.start;
        this.myEvents = [...this.myEvents];
        break;
      }
      case 'all':
        this.myEvents = this.myEvents.filter((item) => item.id !== this.tempEvent.id);
        break;
      case 'current':
      default: {
        let currentExceptions = this.tempEvent.recurringException || [];
        currentExceptions = [...currentExceptions, this.tempEvent.start];
        this.originalRecurringEvent.recurringException = currentExceptions;
        this.myEvents = [...this.myEvents];
        break;
      }
    }
    this.popup.close();
    this.recurringEditModePopup.close();
  }
  loadPopupForm(event: MbscCalendarEvent): void {
    const startDate = new Date(event.start as any);
    this.popupEventTitle = event.title;
    this.popupEventDescription = event['description'];
    this.popupEventDates = [startDate, event.end];
    this.untilDate = formatDate('YYYY-MM-DD', new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1));
    this.popupEventAllDay = event.allDay || false;
    this.updateCustomForm();
  }
  getCustomRule(): any {
    let recurringRule: any;
    const d = this.editFromPopup ? this.popupEventDates[0] : new Date(this.tempEvent.start);
    const weekday = d.getDay();
    const monthday = d.getDate();
    const weekNr = getWeekDayNum(d);

    if (this.editFromPopup && this.tempEvent.start && this.tempEvent.recurring) {
      switch (this.selectedRepeat) {
        default:
        case 'daily':
          recurringRule = {
            repeat: 'daily',
          };
          break;
        case 'weekly':
          recurringRule = {
            repeat: 'weekly',
            weekDays: days[weekday].short,
          };
          break;
        case 'monthly':
          recurringRule = {
            repeat: 'monthly',
            day: monthday,
          };
          break;
        case 'monthly-pos':
          recurringRule = {
            repeat: 'monthly',
            weekDays: days[weekday].short,
            pos: weekNr,
          };
          break;
        case 'yearly':
          recurringRule = {
            repeat: 'yearly',
            day: monthday,
            month: d.getMonth() + 1,
          };
          break;
        case 'yearly-pos':
          recurringRule = {
            repeat: 'yearly',
            month: d.getMonth() + 1,
            weekDays: days[weekday].short,
            pos: weekNr,
          };
          break;
      }
    } else {
      switch (this.selectedRepeat) {
        case 'daily':
          recurringRule = { repeat: 'daily' };
          break;
        case 'weekly':
          recurringRule = { repeat: 'weekly', weekDays: days[d.getDay()].short };
          break;
        case 'monthly':
          recurringRule = { repeat: 'monthly', day: d.getDate() };
          break;
        case 'monthly-pos':
          recurringRule = { repeat: 'monthly', weekDays: days[weekday].short, pos: weekNr };
          break;
        case 'yearly':
          recurringRule = { repeat: 'yearly', month: d.getMonth() + 1 };
          break;
        case 'yearly-pos':
          recurringRule = { repeat: 'yearly', month: d.getMonth() + 1, weekDays: days[weekday].short, pos: weekNr };
          break;
        case 'weekday':
          recurringRule = { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' };
          break;
        case 'custom':
        case 'custom-value':
          recurringRule = {
            repeat: this.repeatType,
            interval: this.repeatNr,
          };
          switch (this.repeatType) {
            case 'weekly':
              recurringRule.weekDays = this.weekDays.join(',');
              break;
            case 'monthly':
              recurringRule.day = this.monthlyDay;
              break;
            case 'yearly':
              recurringRule.day = this.yearlyDay;
              recurringRule.month = this.selectedMonth;
              break;
          }

          switch (this.condition) {
            case 'until':
              recurringRule.until = this.untilDate;
              break;
            case 'count':
              recurringRule.count = this.occurrences;
              break;
          }
          break;
      }
    }
    return recurringRule;
  }
  setTempEvent(): void {
    this.tempEvent.title = this.popupEventTitle;
    this.tempEvent.description = this.popupEventDescription;
    this.tempEvent.start = this.popupEventDates[0];
    this.tempEvent.end = this.popupEventDates[1];
    this.tempEvent.allDay = this.popupEventAllDay;
    this.tempEvent.recurring = this.getCustomRule();
  }
  saveEvent(): void {
    this.setTempEvent();

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
    this.navigateTo();
    // close the popup
    this.popup.close();
  }
  deleteEvent(event: MbscCalendarEvent): void {
    this.myEvents = this.myEvents.filter((item) => item.id !== event.id);
  }
  onDeleteClick(): void {
    if (this.tempEvent.recurring) {
      this.recurringActionText = 'Delete';
      this.recurringDelete = true;
      this.recurringEditModePopup.open();
    } else {
      this.deleteEvent(this.tempEvent);
      this.popup.close();
    }
  }

  // set custom values to default
  resetCustomValues(): void {
    this.repeatType = 'daily';
    this.repeatNr = 1;
    this.condition = 'never';
    this.occurrences = 10;
    this.selectedMonth = 1;
    this.monthlyDay = 1;
    this.yearlyDay = 1;
    this.weekDays = ['SU'];
    this.selectedRepeat = 'norepeat';
    this.showCustomRepeat = false;
    this.repeatData = this.repeatData.filter((item) => item.value !== 'custom-value');
  }

  updateCustomForm(): void {
    const d = new Date(this.tempEvent.start);
    const weekday = d.getDay();
    const monthday = d.getDate();
    const newData = [...this.repeatData];
    const weekNr = getWeekDayNum(d);

    // update select texts by selected date
    for (const item of newData) {
      switch (item.value) {
        case 'weekly':
          item.text = 'Weekly on ' + days[weekday].name;
          break;
        case 'monthly':
          item.text = 'Monthly on day ' + monthday;
          break;
        case 'yearly':
          item.text = 'Annually on ' + this.months[d.getMonth()].text + ' ' + monthday;
          break;
        case 'monthly-pos':
          item.text = 'Monthly on the ' + ordinalList[weekNr] + ' ' + days[weekday].name;
          break;
        case 'yearly-pos':
          item.text = 'Annually on the ' + ordinalList[weekNr] + ' ' + days[weekday].name + ' of ' + this.months[d.getMonth()].text;
          break;
        default:
      }
    }

    this.repeatData = newData;

    const rec = this.tempEvent.recurring;

    if (rec) {
      this.repeatType = rec.repeat;
      this.weekDays = rec.repeat === 'weekly' ? rec.weekDays.split(',') : ['SU'];
      if (rec.interval) {
        // set custom text
        let customText = '';

        this.repeatNr = rec.interval;

        switch (rec.repeat) {
          case 'daily':
            customText = this.repeatNr > 1 ? 'Every ' + this.repeatNr + ' days' : 'Daily';
            break;
          case 'weekly':
            customText = this.repeatNr > 1 ? 'Every ' + this.repeatNr + ' weeks' : 'Weekly';
            customText += ' on ' + rec.weekDays;
            break;
          case 'monthly':
            this.monthlyDay = rec.day;
            customText = this.repeatNr > 1 ? 'Every ' + this.repeatNr + ' months' : 'Monthly';
            customText += ' on day ' + this.monthlyDay;
            break;
          case 'yearly':
            this.yearlyDay = rec.day;
            this.selectedMonth = rec.month;
            customText = this.repeatNr > 1 ? 'Every ' + this.repeatNr + ' years' : 'Annualy';
            customText += ' on ' + this.months[this.selectedMonth - 1].text + ' ' + this.yearlyDay;
            break;
        }

        if (rec.until) {
          this.condition = 'until';
          this.untilDate = rec.until;
          customText += ' until ' + formatDate('MMMM D, YYYY', new Date(this.untilDate));
        } else if (rec.count) {
          this.condition = 'count';
          this.occurrences = rec.count;
          customText += ', ' + this.occurrences + ' times';
        } else {
          this.condition = 'never';
        }

        // add custom value
        this.repeatData = [...this.repeatData, { value: 'custom-value', text: customText }];
        // set custom value
        this.selectedRepeat = 'custom-value';
      } else if (rec.weekDays === 'MO,TU,WE,TH,FR') {
        this.selectedRepeat = 'weekday';
      } else {
        this.selectedRepeat = rec.repeat;
      }
    } else {
      this.resetCustomValues();
    }
    this.showCustomRepeat = this.selectedRepeat === 'custom' || this.selectedRepeat === 'custom-value';
  }

  // popuplate data for months
  populateMonthDays(month: number, type: string): void {
    const day30 = [2, 4, 6, 9, 11];
    const newValues = [];

    for (let i = 1; i <= 31; i++) {
      if (!(i === 31 && day30.includes(month)) && !(i === 30 && month === 2)) {
        newValues.push(i);
      }
    }

    if (type === 'monthly') {
      this.monthlyDays = newValues;
      this.monthlyDay = 1;
    } else {
      this.yearlyDays = newValues;
      this.yearlyDay = 1;
    }
  }

  monthChange(ev: any): void {
    this.selectedMonth = ev.value;
    this.yearlyDay = 1;
    this.populateMonthDays(ev.value, 'yearly');
  }

  navigateTo(): void {
    const rec = this.tempEvent.recurring;
    const d = new Date(this.tempEvent.start);
    let nextYear = 0;

    // navigate the calendar to the correct view
    if (rec && rec.repeat === 'yearly') {
      if (d.getMonth() + 1 > +rec.month && d.getDay() > +rec.day) {
        nextYear = 1;
      }
      this.calendarSelectedDate = new Date(d.getFullYear() + nextYear, rec.month - 1, rec.day);
    } else {
      this.calendarSelectedDate = d;
    }
  }

  ngOnInit(): void {
    this.populateMonthDays(1, 'monthly');
    this.populateMonthDays(1, 'yearly');
  }
}
