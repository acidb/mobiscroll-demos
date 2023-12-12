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

  const responsive = React.useMemo(() => {
    return {
      xsmall: {
        view: {
          calendar: {
            type: 'week',
          },
          agenda: {
            type: 'day',
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: {
            labels: true,
          },
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

ReactDOM.render(<App />, document.getElementById('content'));
