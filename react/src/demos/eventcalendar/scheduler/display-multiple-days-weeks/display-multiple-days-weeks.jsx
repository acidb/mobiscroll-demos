import React from 'react';
//<demo-only>import { Eventcalendar, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson; //</extra>

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

ReactDOM.render(<App />, document.getElementById('content'));
