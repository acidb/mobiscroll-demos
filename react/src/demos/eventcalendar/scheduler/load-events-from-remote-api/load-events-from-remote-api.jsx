import React from 'react';
//<demo-only>import { Eventcalendar, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson; //</extra>

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
      calendar: { type: 'week' },
      schedule: { type: 'day' },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      data={myEvents}
      view={view}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
