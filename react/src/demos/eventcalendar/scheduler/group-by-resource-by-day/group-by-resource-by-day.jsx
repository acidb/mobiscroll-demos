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
        allDay: false,
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '17:00',
      },
    };
  }, []);

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Ryan',
        color: '#f7c4b4',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#c6f1c9',
      },
      {
        id: 3,
        name: 'John',
        color: '#e8d0ef',
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/resource-events/',
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
      resources={myResources}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
