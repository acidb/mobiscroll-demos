import React from 'react';
//<demo-only>import { Eventcalendar, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const getJson = mobiscroll.getJson; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Ashley',
      color: '#01adff',
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      data={myEvents}
      view={view}
      resources={myResources}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
