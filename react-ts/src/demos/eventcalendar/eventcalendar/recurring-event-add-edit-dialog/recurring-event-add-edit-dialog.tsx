import React from 'react';
import {
  Eventcalendar,
  Select,
  setOptions,
  Popup,
  Button,
  Input,
  Textarea,
  Switch,
  Radio,
  RadioGroup,
  Datepicker,
  SegmentedGroup,
  SegmentedItem,
  formatDate,
  updateRecurringEvent,
  MbscCalendarEvent,
  MbscEventcalendarView,
} from '@mobiscroll/react';
import './recurring-event-add-edit-dialog.css';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

const defaultEvents: MbscCalendarEvent[] = [
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

const viewSettings: MbscEventcalendarView = {
  calendar: { labels: true },
};
const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 510,
    fullScreen: false,
    touchUi: false,
  },
};

const selectResponsive = {
  xsmall: {
    touchUi: true,
  },
  small: {
    touchUi: false,
  },
};

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

const months = [
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

const ordinalList = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth' };

const dayInputProps = {
  className: 'custom-repeat-input custom-repeat-select-nr',
  inputStyle: 'outline',
};

const monthInputProps = {
  className: 'custom-repeat-input custom-repeat-select-month',
  inputStyle: 'outline',
};

const dateInputProps = {
  className: 'custom-repeat-input custom-specific-date',
  inputStyle: 'outline',
};

// returns the weeknumber of the passed date
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

const App: React.FC = () => {
  const [myEvents, setMyEvents] = React.useState<MbscCalendarEvent[]>(defaultEvents);
  const [tempEvent, setTempEvent] = React.useState<any>(null);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isEdit, setEdit] = React.useState<boolean>(false);
  const [anchor, setAnchor] = React.useState<any>(null);
  const [start, startRef] = React.useState<any>(null);
  const [end, endRef] = React.useState<any>(null);
  const [popupEventTitle, setTitle] = React.useState<string | undefined>('');
  const [popupEventDescription, setDescription] = React.useState<string>('');
  const [popupEventAllDay, setAllDay] = React.useState<boolean>(true);
  const [popupEventDate, setDate] = React.useState<any>([]);
  const [mySelectedDate, setSelectedDate] = React.useState<any>();

  // recurring editor data
  const [repeatData, setRepeatData] = React.useState([
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
  ]);
  const [selectedRepeat, setSelectedRepeat] = React.useState<string>('norepeat');
  const [repeatType, setRepeatType] = React.useState<string>('daily');
  const [repeatNr, setRepeatNr] = React.useState<string>('1');
  const [condition, setCondition] = React.useState<string>('never');
  const [untilDate, setUntilDate] = React.useState<string>();
  const [occurrences, setOccurrences] = React.useState<string>('10');
  const [selectedMonth, setMonth] = React.useState<number>(1);
  const [monthlyDays, setMonthlyDays] = React.useState<number[]>(['1']);
  const [monthlyDay, setMonthlyDay] = React.useState<number>('1');
  const [yearlyDays, setYearlyDays] = React.useState<number[]>(['1']);
  const [yearlyDay, setYearlyDay] = React.useState<number>('1');
  const [weekDays, setWeekDays] = React.useState<any>(['SU']);

  const [originalRecurringEvent, setOriginalRecurringEvent] = React.useState<any>();
  const [eventOccurrence, setEventOccurrence] = React.useState<any>();
  const [recurringText, setRecurringText] = React.useState<string>();
  const [recurringDelete, setRecurringDelete] = React.useState<boolean>();
  const [isRecurringEditOpen, setRecurringEditOpen] = React.useState<boolean>();
  const [newEvent, setNewEvent] = React.useState<MbscCalendarEvent>();
  const [recurringEditMode, setRecurringEditMode] = React.useState<string>('current');
  const [editFromPopup, setEditFromPopup] = React.useState<boolean>(false);

  // set custom values to default
  const resetCustomValues = React.useCallback(() => {
    setRepeatType('daily');
    setRepeatNr('1');
    setCondition('never');
    setOccurrences('10');
    setMonth(1);
    setMonthlyDay('1');
    setYearlyDay('1');
    setWeekDays(['SU']);
    setSelectedRepeat('norepeat');
    setRepeatData(repeatData.filter((item) => item.value !== 'custom-value'));
  }, [repeatData]);

  const navigateTo = React.useCallback(() => {
    const rec = tempEvent.recurring;
    const d = new Date(tempEvent.start);
    let nextYear = 0;

    // navigate the calendar to the correct view
    if (rec && rec.repeat === 'yearly') {
      if (d.getMonth() + 1 > +rec.month && d.getDay() > +rec.day) {
        nextYear = 1;
      }
      setSelectedDate(new Date(d.getFullYear() + nextYear, rec.month - 1, rec.day));
    } else {
      setSelectedDate(d);
    }
  }, [tempEvent]);

  const deleteRecurringEvent = React.useCallback(() => {
    switch (recurringEditMode) {
      case 'current':
      default:
        let currentExceptions = tempEvent.recurringException || [];
        currentExceptions = [...currentExceptions, tempEvent.start];

        const newEv = { ...originalRecurringEvent, recurringException: currentExceptions };
        const index = myEvents.findIndex((x) => x.id === originalRecurringEvent.id);
        const newEventList = [...myEvents];

        newEventList.splice(index, 1, newEv);
        setMyEvents(newEventList);
        break;
      case 'following':
        let exceptions = tempEvent.recurringException || [];
        exceptions = [...exceptions, tempEvent.start];

        const newE = { ...originalRecurringEvent, recurringException: exceptions };
        newE.recurring.until = tempEvent.start;
        const i = myEvents.findIndex((x) => x.id === originalRecurringEvent.id);
        const newEvList = [...myEvents];

        newEvList.splice(i, 1, newE);
        setMyEvents(newEvList);
        break;
      case 'all':
        setMyEvents(myEvents.filter((item) => item.id !== tempEvent.id));
        break;
    }
    setOpen(false);
    setRecurringEditOpen(false);
  }, [myEvents, originalRecurringEvent, recurringEditMode, tempEvent]);

  const getCustomRule = React.useCallback(() => {
    let recurringRule: any;
    const d = editFromPopup ? popupEventDate[0] : new Date(tempEvent.start);
    const weekday = d.getDay();
    const monthday = d.getDate();
    const weekNr = getWeekDayNum(d);

    if (editFromPopup && tempEvent.start && tempEvent.recurring) {
      switch (selectedRepeat) {
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
          tempEvent.recurring = {
            repeat: 'yearly',
            month: d.getMonth() + 1,
            weekDays: days[weekday].short,
            pos: weekNr,
          };
          break;
        default:
      }
    } else {
      switch (selectedRepeat) {
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
            repeat: repeatType,
            interval: repeatNr,
          };

          switch (repeatType) {
            case 'weekly':
              recurringRule.weekDays = weekDays.join(',');
              break;
            case 'monthly':
              recurringRule.day = monthlyDay;
              break;
            case 'yearly':
              recurringRule.day = yearlyDay;
              recurringRule.month = selectedMonth;
              break;

            default:
          }

          switch (condition) {
            case 'until':
              recurringRule.until = untilDate;
              break;
            case 'count':
              recurringRule.count = occurrences;
              break;
            default:
          }
          break;
        default:
      }
    }
    return recurringRule;
  }, [
    selectedRepeat,
    deleteRecurringEvent,
    editFromPopup,
    repeatType,
    weekDays,
    eventOccurrence,
    myEvents,
    newEvent,
    originalRecurringEvent,
    recurringDelete,
    recurringEditMode,
    tempEvent,
  ]);

  const saveEvent = React.useCallback(() => {
    const newEv = {
      id: tempEvent.id,
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      allDay: popupEventAllDay,
      color: tempEvent.color,
      recurring: getCustomRule(),
    };

    if (isEdit) {
      // update the event in the list
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEv);
      setMyEvents(newEventList);
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      setMyEvents([...myEvents, newEv]);
      // here you can add the event to your storage as well
      // ...
    }

    // navigate the calendar
    navigateTo();
    // close the popup
    setOpen(false);
  }, [tempEvent, popupEventTitle, popupEventDescription, popupEventDate, popupEventAllDay, getCustomRule, isEdit, navigateTo, myEvents]);

  const deleteEvent = React.useCallback(
    (event) => {
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
    },
    [myEvents],
  );

  const updateOptionDates = React.useCallback(
    (d) => {
      const weekday = d.getDay();
      const monthday = d.getDate();
      const newData = repeatData.slice(0);
      const weekNr = getWeekDayNum(d);

      for (let i = 0; i < newData.length; ++i) {
        const item = newData[i];
        switch (item.value) {
          case 'weekly':
            item.text = 'Weekly on ' + days[weekday].name;
            break;
          case 'monthly':
            item.text = 'Monthly on day ' + monthday;
            break;
          case 'monthly-pos':
            item.text = 'Monthly on the ' + ordinalList[weekNr] + ' ' + days[weekday].name;
            break;
          case 'yearly':
            item.text = 'Annually on ' + months[d.getMonth()].text + ' ' + monthday;
            break;
          case 'yearly-pos':
            item.text = 'Annually on the ' + ordinalList[weekNr] + ' ' + days[weekday].name + ' of ' + months[d.getMonth()];
            break;
          default:
        }
      }
      setRepeatData(newData);
    },
    [repeatData],
  );

  const loadPopupForm = React.useCallback(
    (event) => {
      const startDate = new Date(event.start);
      setTitle(event.title);
      setDescription(event.description);
      setDate([startDate, event.end]);
      setUntilDate(formatDate('YYYY-MM-DD', new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1)));
      setAllDay(event.allDay || false);

      const d = new Date(event.start);
      const weekday = d.getDay();
      const monthday = d.getDate();
      const newData = repeatData.slice(0);
      const weekNr = getWeekDayNum(d);

      // update select texts by selected date
      for (let i = 0; i < newData.length; ++i) {
        const item = newData[i];
        switch (item.value) {
          case 'weekly':
            item.text = 'Weekly on ' + days[weekday].name;
            break;
          case 'monthly':
            item.text = 'Monthly on day ' + monthday;
            break;
          case 'monthly-pos':
            item.text = 'Monthly on the ' + ordinalList[weekNr] + ' ' + days[weekday].name;
            break;
          case 'yearly':
            item.text = 'Annually on ' + months[d.getMonth()].text + ' ' + monthday;
            break;
          case 'yearly-pos':
            item.text = 'Annually on the ' + ordinalList[weekNr] + ' ' + days[weekday].name + ' of ' + months[d.getMonth()];
            break;
          default:
        }
      }

      setRepeatData(newData);

      const rec = event.recurring;

      if (rec) {
        setRepeatType(rec.repeat);
        setWeekDays(rec.repeat === 'weekly' ? rec.weekDays.split(',') : ['SU']);
        if (rec.interval) {
          // set custom text
          let customText = '';
          const nr = rec.interval;

          setRepeatNr(nr);

          switch (rec.repeat) {
            case 'daily':
              customText = nr > 1 ? 'Every ' + nr + ' days' : 'Daily';
              break;
            case 'weekly':
              customText = nr > 1 ? 'Every ' + nr + ' weeks' : 'Weekly';
              customText += ' on ' + rec.weekDays;
              break;
            case 'monthly':
              setMonthlyDay(rec.day);
              customText = nr > 1 ? 'Every ' + nr + ' months' : 'Monthly';
              customText += ' on day ' + rec.day;
              break;
            case 'yearly':
              setYearlyDay(rec.day);
              setMonth(rec.month);
              customText = nr > 1 ? 'Every ' + nr + ' years' : 'Annualy';
              customText += ' on ' + months[rec.month - 1].text + ' ' + rec.day;
              break;
            default:
          }

          if (rec.until) {
            setCondition('until');
            setUntilDate(rec.until);
            customText += ' until ' + formatDate('MMMM D, YYYY', new Date(rec.until));
          } else if (rec.count) {
            setCondition('count');
            setOccurrences(rec.count);
            customText += ', ' + rec.count + ' times';
          } else {
            setCondition('never');
          }

          // add custom value
          setRepeatData([...repeatData, { value: 'custom-value', text: customText }]);
          // set custom value
          setSelectedRepeat('custom-value');
        } else if (rec.weekDays === 'MO,TU,WE,TH,FR') {
          setSelectedRepeat('weekday');
        } else {
          setSelectedRepeat(rec.repeat + (rec.pos ? '-pos' : ''));
        }
      } else {
        resetCustomValues();
      }
    },
    [repeatData, weekDays, resetCustomValues],
  );

  // handle popup form changes

  const titleChange = React.useCallback((ev) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = React.useCallback((ev) => {
    setDescription(ev.target.value);
  }, []);

  const allDayChange = React.useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);

  const dateChange = React.useCallback(
    (args) => {
      const d = args.value;
      setDate(d);
      updateOptionDates(d[0]);
    },
    [updateOptionDates],
  );

  const onDeleteClick = React.useCallback(() => {
    if (tempEvent.recurring) {
      setRecurringText('Delete');
      setRecurringDelete(true);
      setRecurringEditOpen(true);
    } else {
      deleteEvent(tempEvent);
      setOpen(false);
    }
  }, [deleteEvent, tempEvent]);

  // populate data for months
  const populateMonthDays = React.useCallback(
    (month, type) => {
      const day30 = [2, 4, 6, 9, 11];
      let newValues: any = [];

      for (let i = 1; i <= 31; i++) {
        if (!(i === 31 && day30.includes(month)) && !(i === 30 && month === 2)) {
          newValues.push(i.toString());
        }
      }

      if (type === 'monthly') {
        setMonthlyDays(newValues);
        setMonthlyDay(1);
      } else {
        setYearlyDays(newValues);
        setYearlyDay(1);
      }
    },
    [setMonthlyDays, setYearlyDays],
  );

  const repeatChange = React.useCallback((ev) => {
    setSelectedRepeat(ev.value);
  }, []);

  const repeatTypeChange = React.useCallback((ev) => {
    setRepeatType(ev.target.value);
  }, []);

  const repeatNrChange = React.useCallback((ev) => {
    setRepeatNr(ev.target.value);
  }, []);

  const conditionChange = React.useCallback((ev) => {
    setCondition(ev.target.value);
  }, []);

  const untilDateChange = React.useCallback((ev) => {
    setUntilDate(ev.value);
  }, []);

  const occurrancesChange = React.useCallback((ev) => {
    setOccurrences(ev.target.value);
  }, []);

  const monthsChange = React.useCallback(
    (ev) => {
      setMonth(ev.value);
      populateMonthDays(ev.value, 'yearly');
    },
    [populateMonthDays],
  );

  const monthlyDayChange = React.useCallback((ev) => {
    setMonthlyDay(ev.value);
  }, []);

  const yearlyDayChange = React.useCallback((ev) => {
    setYearlyDay(ev.value);
  }, []);

  const weekDayChange = React.useCallback(
    (ev) => {
      const value = ev.target.value;
      if (ev.target.checked) {
        setWeekDays([...weekDays, ev.target.value]);
      } else {
        setWeekDays(weekDays.filter((item) => item !== value));
      }
    },
    [weekDays],
  );

  // scheduler options

  const onSelectedDateChange = React.useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const onEventClick = React.useCallback(
    (args) => {
      const event = args.event;

      setEdit(true);
      setTempEvent({ ...args.event });

      // recurring event
      if (event.recurring) {
        setOriginalRecurringEvent(event.original);
        setEventOccurrence({ ...event });
        loadPopupForm(event);
      } else {
        setOriginalRecurringEvent({});
        loadPopupForm(event);
      }

      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm],
  );

  const onEventUpdate = React.useCallback((args) => {
    const event = args.event;
    if (event.recurring) {
      setOriginalRecurringEvent(args.oldEvent);
      setTempEvent(event);
      setEventOccurrence(args.oldEventOccurrence);
      if (args.domEvent.keyCode === 46) {
        setRecurringText('Delete');
        setRecurringDelete(true);
        setRecurringEditOpen(true);
      } else {
        setRecurringText('Edit');
        setRecurringDelete(false);
        setRecurringEditOpen(true);
      }
      return false;
    }
  }, []);

  const onEventCreate = React.useCallback((args) => {
    const originEvent = args.originEvent;
    if (originEvent && originEvent.recurring) {
      setNewEvent(args.event);
      return false;
    }
  }, []);

  const onEventCreated = React.useCallback(
    (args) => {
      setEdit(false);
      resetCustomValues();
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm, resetCustomValues],
  );

  const onEventDeleted = React.useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent],
  );

  const onEventUpdated = React.useCallback((args) => {
    // here you can update the event in your storage as well, after drag & drop or resize
    // ...
  }, []);

  // datepicker options
  const controls = React.useMemo<any>(() => (popupEventAllDay ? ['calendar'] : ['calendar', 'time']), [popupEventAllDay]);
  const respSetting = React.useMemo(
    () =>
      popupEventAllDay
        ? {
            xsmall: {
              controls: ['date'],
            },
            medium: {
              controls: ['calendar'],
              touchUi: false,
            },
          }
        : {
            xsmall: {
              controls: ['datetime'],
            },
            medium: {
              controls: ['calendar', 'time'],
              touchUi: false,
            },
          },
    [popupEventAllDay],
  );

  // popup options
  const headerText = React.useMemo(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);
  const popupButtons = React.useMemo<any>(() => {
    if (isEdit) {
      return [
        'cancel',
        {
          handler: () => {
            if (Object.keys(originalRecurringEvent).length !== 0) {
              setEditFromPopup(true);
              setRecurringText('Edit');
              setRecurringDelete(false);
              setRecurringEditOpen(true);
            } else {
              saveEvent();
            }
          },
          keyCode: 'enter',
          text: 'Save',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    } else {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Add',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    }
  }, [isEdit, originalRecurringEvent, saveEvent]);

  const onPopupClose = React.useCallback(() => {
    setRepeatData(repeatData.filter((item) => item.value !== 'custom-value'));
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setEditFromPopup(false);
    setOpen(false);
  }, [isEdit, myEvents, repeatData]);

  const recurringEditButtons = React.useMemo<any>(() => {
    return [
      'cancel',
      {
        handler: () => {
          if (recurringDelete) {
            deleteRecurringEvent();
          } else {
            if (editFromPopup) {
              tempEvent.title = popupEventTitle;
              tempEvent.description = popupEventDescription;
              tempEvent.start = popupEventDate[0];
              tempEvent.end = popupEventDate[1];
              tempEvent.allDay = popupEventAllDay;
              tempEvent.recurring = getCustomRule();
            }

            if (recurringEditMode === 'current') {
              delete tempEvent.id;
              delete tempEvent.recurring;
              delete tempEvent.recurringException;
            }

            const events = updateRecurringEvent(
              originalRecurringEvent,
              eventOccurrence,
              editFromPopup ? null : newEvent,
              editFromPopup ? tempEvent : null,
              recurringEditMode,
            );

            // update event
            let newEventList = [...myEvents];
            const index = newEventList.findIndex((x) => x.id === events.updatedEvent.id);
            newEventList[index] = events.updatedEvent;

            // add new event
            if (events.newEvent) {
              newEventList = [...newEventList, events.newEvent];
            }

            setMyEvents(newEventList);

            setOpen(false);
            setRecurringEditOpen(false);
          }
        },
        keyCode: 'enter',
        text: 'Ok',
        cssClass: 'mbsc-popup-button-primary',
      },
    ];
  }, [
    deleteRecurringEvent,
    editFromPopup,
    eventOccurrence,
    getCustomRule,
    myEvents,
    newEvent,
    originalRecurringEvent,
    popupEventAllDay,
    popupEventDate,
    popupEventDescription,
    popupEventTitle,
    recurringDelete,
    recurringEditMode,
    tempEvent,
  ]);

  const recurringEditModeChange = React.useCallback((ev) => {
    setRecurringEditMode(ev.target.value);
  }, []);

  const onRecurringEditClose = React.useCallback(() => {
    setRecurringEditMode('current');
    setRecurringEditOpen(false);
  }, []);

  React.useEffect(() => {
    populateMonthDays(1, 'monthly');
    setMonthlyDay(1);
    populateMonthDays(1, 'yearly');
    setYearlyDay(1);
  }, [populateMonthDays]);

  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={myEvents}
        clickToCreate="double"
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        selectedDate={mySelectedDate}
        onSelectedDateChange={onSelectedDateChange}
        onEventClick={onEventClick}
        onEventUpdate={onEventUpdate}
        onEventCreate={onEventCreate}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        onEventUpdated={onEventUpdated}
      />
      <Popup
        display="bottom"
        contentPadding={false}
        fullScreen={true}
        scrollLock={false}
        height={500}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onPopupClose}
        responsive={responsivePopup}
        cssClass="md-recurring-event-editor-popup"
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
        </div>
        <div className="mbsc-form-group">
          <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker
            select="range"
            controls={controls}
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            responsive={respSetting}
            onChange={dateChange}
            value={popupEventDate}
          />
          <Select data={repeatData} label="Repeats" value={selectedRepeat} responsive={selectResponsive} onChange={repeatChange} />
        </div>
        <div className="mbsc-form-group">
          {(selectedRepeat === 'custom' || selectedRepeat === 'custom-value') && (
            <div>
              <div>
                <SegmentedGroup onChange={repeatTypeChange}>
                  <SegmentedItem value="daily" checked={repeatType === 'daily'}>
                    Daily
                  </SegmentedItem>
                  <SegmentedItem value="weekly" checked={repeatType === 'weekly'}>
                    Weekly
                  </SegmentedItem>
                  <SegmentedItem value="monthly" checked={repeatType === 'monthly'}>
                    Monthly
                  </SegmentedItem>
                  <SegmentedItem value="yearly" checked={repeatType === 'yearly'}>
                    Yearly
                  </SegmentedItem>
                </SegmentedGroup>

                <div className="md-recurrence-options">
                  <span>Repeat every</span>
                  <span className="md-recurrence-input md-recurrence-input-nr">
                    <Input min="1" value={repeatNr} onChange={repeatNrChange} inputStyle="outline" />
                  </span>
                  {repeatType === 'daily' && <span>days</span>}
                  {repeatType === 'weekly' && <span>weeks</span>}
                  {repeatType === 'monthly' && (
                    <span>
                      month(s) on day
                      <span className="md-recurrence-input md-recurrence-input-nr">
                        <Select data={monthlyDays} value={monthlyDay} onChange={monthlyDayChange} inputProps={dayInputProps} />
                      </span>
                    </span>
                  )}
                  {repeatType === 'yearly' && (
                    <span>
                      year(s) <br />
                      on day
                      <span className="md-recurrence-input md-recurrence-input-nr">
                        <Select data={yearlyDays} value={yearlyDay} onChange={yearlyDayChange} inputProps={dayInputProps} />
                      </span>
                      <span>of</span>
                      <span className="md-recurrence-input">
                        <Select data={months} value={selectedMonth} onChange={monthsChange} inputProps={monthInputProps} />
                      </span>
                    </span>
                  )}

                  {repeatType === 'daily' && (
                    <p className="md-recurrence-desc">The event will be repeated every day or every x days, depending on the value</p>
                  )}
                  {repeatType === 'weekly' && (
                    <p className="md-recurrence-desc">The event will be repeated every x weeks on specific weekdays</p>
                  )}
                  {repeatType === 'monthly' && (
                    <p className="md-recurrence-desc">The event will be repeated every x month on specific day of the month</p>
                  )}
                  {repeatType === 'yearly' && (
                    <p className="md-recurrence-desc">The event will be repeated every x years on specific day of a specific month</p>
                  )}
                </div>

                {repeatType === 'weekly' && (
                  <SegmentedGroup select="multiple" onChange={weekDayChange}>
                    <SegmentedItem value="SU" checked={weekDays.indexOf('SU') >= 0}>
                      Sun
                    </SegmentedItem>
                    <SegmentedItem value="MO" checked={weekDays.indexOf('MO') >= 0}>
                      Mon
                    </SegmentedItem>
                    <SegmentedItem value="TU" checked={weekDays.indexOf('TU') >= 0}>
                      Tue
                    </SegmentedItem>
                    <SegmentedItem value="WE" checked={weekDays.indexOf('WE') >= 0}>
                      Wed
                    </SegmentedItem>
                    <SegmentedItem value="TH" checked={weekDays.indexOf('TH') >= 0}>
                      Thu
                    </SegmentedItem>
                    <SegmentedItem value="FR" checked={weekDays.indexOf('FR') >= 0}>
                      Fri
                    </SegmentedItem>
                    <SegmentedItem value="SA" checked={weekDays.indexOf('SA') >= 0}>
                      Sat
                    </SegmentedItem>
                  </SegmentedGroup>
                )}

                <div className="md-recurrence-ends">Ends</div>

                <div className="mbsc-form-group">
                  <RadioGroup>
                    <Radio
                      label="Never"
                      position="start"
                      description="The event will repeat indefinitely"
                      checked={condition === 'never'}
                      onChange={conditionChange}
                      value="never"
                    />
                    <Radio checked={condition === 'until'} onChange={conditionChange} value="until" position="start">
                      Until
                      <span className="md-recurrence-input">
                        <Datepicker
                          inputProps={dateInputProps}
                          controls={['calendar']}
                          display="anchored"
                          touchUi={false}
                          dateFormat="YYYY-MM-DD"
                          returnFormat="iso8601"
                          value={untilDate}
                          onChange={untilDateChange}
                          onOpen={() => setCondition('until')}
                        />
                      </span>
                      <span className="mbsc-description">The event will run until it reaches a specific date</span>
                    </Radio>
                    <Radio checked={condition === 'count'} onChange={conditionChange} value="count" position="start">
                      After
                      <span className="md-recurrence-input md-recurrence-input-nr">
                        <Input
                          inputStyle="outline"
                          value={occurrences}
                          onChange={occurrancesChange}
                          onClick={() => setCondition('count')}
                        />
                        occurrences
                        <span className="mbsc-description">The event will repeat until it reaches a certain amount of occurrences</span>
                      </span>
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}
          {isEdit && (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
                Delete event
              </Button>
            </div>
          )}
        </div>
      </Popup>
      <Popup
        display="bottom"
        contentPadding={false}
        buttons={recurringEditButtons}
        isOpen={isRecurringEditOpen}
        onClose={onRecurringEditClose}
      >
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">{recurringText} recurring event</div>
          <RadioGroup onChange={recurringEditModeChange}>
            <Radio label="This event only" checked={recurringEditMode === 'current'} onChange={recurringEditModeChange} value="current" />
            <Radio
              label="This and following events"
              checked={recurringEditMode === 'following'}
              onChange={recurringEditModeChange}
              value="following"
            />
            <Radio label="All events" checked={recurringEditMode === 'all'} onChange={recurringEditModeChange} value="all" />
          </RadioGroup>
        </div>
      </Popup>
    </div>
  );
};

export default App;
