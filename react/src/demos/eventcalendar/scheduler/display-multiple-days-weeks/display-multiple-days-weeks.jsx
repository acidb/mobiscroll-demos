import React from 'react';
import { Eventcalendar, getJson /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [myEvents, setEvents] = React.useState([]);

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        size: 2,
      },
    };
  }, []);

  React.useEffect(() => {
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
      // theme
      // locale
      view={view}
      data={myEvents}
    />
  );
}

export default App;
