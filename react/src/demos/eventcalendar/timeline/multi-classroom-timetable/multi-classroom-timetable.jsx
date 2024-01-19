import React from 'react';
import { Eventcalendar, setOptions, formatDate, getJson /* localeImport */ } from '@mobiscroll/react';
import './multi-classroom-timetable.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '20:00',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    };
  }, []);

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Green Hall',
      },
      {
        id: 2,
        name: 'White Hall',
      },
      {
        id: 3,
        name: 'Red Hall',
      },
      {
        id: 4,
        name: 'Blue Hall',
      },
      {
        id: 5,
        name: 'Yellow Hall',
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timetable-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const myCustomDay = React.useCallback((day) => {
    const date = day.date;
    return (
      <div className="md-timetable-day">
        <div className="md-timetable-day-name">{formatDate('DDDD', date)}</div>
        <div>{formatDate('MM/DD/YYY', date)}</div>
      </div>
    );
  }, []);

  const myCustomEvent = React.useCallback((args) => {
    return (
      <div>
        <div className="md-timetable-event-title">{args.title}</div>
        <div className="md-timetable-event-prop">Prof. {args.original.prof}</div>
        <div className="md-timetable-event-class">{args.original.class} year</div>
      </div>
    );
  }, []);

  const myDefaultEvent = React.useCallback(() => {
    return {
      title: 'New class',
      prof: 'Stacia Jaden',
      class: 'Junior',
      color: '#ff0000',
    };
  }, []);

  return (
    <Eventcalendar
      className="md-timetable"
      // drag
      view={view}
      data={myEvents}
      resources={myResources}
      renderDay={myCustomDay}
      renderScheduleEventContent={myCustomEvent}
      extendDefaultEvent={myDefaultEvent}
    />
  );
}

export default App;
