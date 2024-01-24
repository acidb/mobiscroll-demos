import { Eventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useEffect } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myResources = useMemo(
    () => [
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
    ],
    [],
  );

  const myView = useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar data={myEvents} view={myView} resources={myResources} rtl={true} />;
}

export default App;
