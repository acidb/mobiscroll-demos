import React from 'react';
//<demo-only>import { Eventcalendar, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson; //</extra>

function App() {
  const [myEvents, setEvents] = React.useState([]);

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        timeCellStep: 60,
        timeLabelStep: 60,
      },
    };
  }, []);

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Flatiron Room',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        color: '#ff4600',
      },
      {
        id: 5,
        name: 'King’s Landing',
        color: '#239a21',
      },
      {
        id: 6,
        name: 'Gathering Field',
        color: '#8f1ed6',
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
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
