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
      fixed: true,
      id: 'room',
      name: 'Main hall',
      // add any property you'd like
      title: 'Conference room',
    },
    {
      // base properties
      id: 'team',
      name: 'Team 1',
      eventCreation: false,
      children: [
        {
          // base properties
          id: 1,
          name: 'Ryan',
          color: '#e20000',
          // add any property you'd like
          title: 'UX Designer',
          job: 'Apollo Project',
        },
        {
          // base properties
          id: 2,
          name: 'Kate',
          color: '#60e81a',
          // add any property you'd like
          title: 'Product Developer',
          job: 'Yorick Project',
        },
        {
          // base properties
          id: 3,
          name: 'John',
          color: '#3ba7ff',
          // add any property you'd like
          title: 'Data Analyst',
          job: 'Titus Project',
        },
        {
          // base properties
          id: 4,
          name: 'Mark',
          color: '#e25dd2',
          // add any property you'd like
          title: 'Network Administrator',
          job: 'Yorick Project',
        },
        {
          // base properties
          id: 5,
          name: 'Sharon',
          color: '#f1e920',
          // add any property you'd like
          title: 'Data Quality Manager',
          job: 'Apollo Project',
        },
        {
          // base properties
          id: 6,
          name: 'Emma',
          color: '#1ac38d',
          // add any property you'd like
          title: 'Product Tactics Agent',
          job: 'Titus Project',
        },
        {
          // base properties
          id: 7,
          name: 'Phil',
          color: '#1ac38d',
          // add any property you'd like
          title: 'UX Designer',
          job: 'Titus Project',
        },
        {
          // base properties
          id: 8,
          name: 'Vic',
          color: '#1ac38d',
          // add any property you'd like
          title: 'Product Developer',
          job: 'Yorick Project',
        },
        {
          // base properties
          id: 9,
          name: 'Pam',
          color: '#1ac38d',
          // add any property you'd like
          title: 'Help Desk Specialist',
          job: 'Apollo Project',
        },
        {
          // base properties
          id: 10,
          name: 'Suzie',
          color: '#1ac38d',
          // add any property you'd like
          title: 'Data Analyst',
          job: 'Apollo Project',
        },
        {
          // base properties
          id: 11,
          name: 'Nina',
          color: '#1ac38d',
          // add any property you'd like
          title: 'Network Administrator',
          job: 'Titus Project',
        },
      ],
    },
  ];

  const myView = React.useMemo(() => {
    return {
      timeline: {
        type: 'day',
      },
    };
  }, []);

  const myEvents = [
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,16)',
      title: 'General orientation',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,10)',
      text: 'Stakeholder mtg.',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d,13,30)',
      end: 'dyndatetime(y,m,d,14,30)',
      text: "Lunch @ Butcher's",
      resource: 5,
    },
  ];

  return <Eventcalendar view={myView} data={myEvents} height={600} resources={myResources} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
