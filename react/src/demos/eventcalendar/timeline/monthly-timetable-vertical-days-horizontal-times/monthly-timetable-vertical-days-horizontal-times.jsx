import React from 'react';
import { Eventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';
import './monthly-timetable-vertical-days-horizontal-times.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    };
  }, []);

  React.useEffect(() => {
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
      // theme
      // locale
      view={view}
      data={myEvents}
    />
  );
}

export default App;
