import { Eventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useEffect } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(() => {
    return {
      schedule: {
        type: 'week',
        size: 2,
      },
    };
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
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
