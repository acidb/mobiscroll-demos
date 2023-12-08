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

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return (
    <Eventcalendar
      // locale
      data={myEvents}
      view={view}
      theme="material" // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
      themeVariant="dark" // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
