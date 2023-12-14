import React from 'react';
import { Eventcalendar, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

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

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        allDay: false,
      },
    };
  }, []);

  return <Eventcalendar data={myEvents} view={view} />;
}

export default App;
