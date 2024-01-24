import { Eventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useEffect } from 'react';
import './monthly-timetable-vertical-days-horizontal-times.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(() => {
    return {
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    };
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-vertical-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
    />
  );
}

export default App;
