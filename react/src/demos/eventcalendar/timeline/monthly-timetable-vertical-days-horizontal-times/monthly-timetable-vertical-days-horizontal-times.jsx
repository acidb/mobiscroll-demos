import React from 'react';
//<demo-only>import { Eventcalendar, setOptions, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const getJson = mobiscroll.getJson; //</extra>

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

ReactDOM.render(<App />, document.getElementById('content'));
