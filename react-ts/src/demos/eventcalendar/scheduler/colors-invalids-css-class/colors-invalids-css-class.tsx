import React from 'react';
import { Eventcalendar, getJson, setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import './colors-invalids-css-class.css';

setOptions({
  // localeJs,
  // themeJs
});

const myInvalid = [
  {
    start: '12:00',
    end: '13:00',
    title: 'Lunch break',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR',
    },
    cssClass: 'md-lunch-break-class mbsc-flex',
  },
];

const myColors = [
  {
    start: '03:00',
    end: '10:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO',
    },
    cssClass: 'md-rect-bg',
  },
  {
    start: '16:00',
    end: '22:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TH',
    },
    cssClass: 'md-rect-bg',
  },
  {
    start: '15:00',
    end: '21:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO',
    },
    cssClass: 'md-stripes-bg',
  },
  {
    start: '04:00',
    end: '10:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'FR',
    },
    cssClass: 'md-stripes-bg',
  },
  {
    start: '02:00',
    end: '09:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TU',
    },
    cssClass: 'md-dots-bg',
  },
  {
    start: '14:00',
    end: '20:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'WE',
    },
    cssClass: 'md-dots-bg',
  },
];

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: {
        allDay: false,
        type: 'week',
        startDay: 1,
        endDay: 5,
      },
    };
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/workday-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar view={view} data={myEvents} invalid={myInvalid} colors={myColors} />;
};
export default App;
