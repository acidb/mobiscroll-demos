import React from 'react';
import { Eventcalendar, setOptions /* localeImport */ } from '@mobiscroll/react';
import './resource-data-structure.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const myResources = [
    {
      // base properties
      id: 1,
      name: 'Ryan',
      color: '#ca4747',
      eventCreation: true,
      // add any property you'd like
      title: 'UX Designer',
      job: 'Apollo Project',
    },
    {
      // base properties
      id: 2,
      name: 'Kate',
      color: '#cc9900',
      eventCreation: true,
      // add any property you'd like
      title: 'Product Developer',
      job: 'Yorick Project',
    },
    {
      // base properties
      id: 3,
      name: 'John',
      color: '#01adff',
      eventCreation: true,
      // add any property you'd like
      title: 'Network Administrator',
      job: 'Titus Project',
    },
  ];

  const myView = React.useMemo(() => {
    return {
      schedule: {
        type: 'day',
      },
    };
  }, []);

  const myEvents = [
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,18)',
      title: 'General orientation',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,11)',
      text: 'Stakeholder mtg.',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d,13,30)',
      end: 'dyndatetime(y,m,d,15)',
      text: "Lunch @ Butcher's",
      resource: 3,
    },
  ];

  return <Eventcalendar view={myView} data={myEvents} resources={myResources} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
