import React from 'react';
import { Eventcalendar, getJson /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const responsive = React.useMemo(() => {
    return {
      xsmall: {
        view: {
          schedule: { type: 'day' },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          schedule: { type: 'week' },
        },
      },
    };
  }, []);

  return (
    <Eventcalendar
      // locale
      // theme
      data={myEvents}
      responsive={responsive}
    />
  );
}

export default App;
