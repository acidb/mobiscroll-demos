import React from 'react';
import { Eventcalendar, getJson /* localeImport */ } from '@mobiscroll/react';
import './load-events-from-remote-api.css';

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
      agenda: { type: 'month' },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      height={600}
      data={myEvents}
      view={view}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
