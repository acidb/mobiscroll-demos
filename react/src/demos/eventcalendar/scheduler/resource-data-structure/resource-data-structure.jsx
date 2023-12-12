import React from 'react';
//<demo-only>import { Eventcalendar, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions; //</extra>

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

  const renderCustomResource = (resource) => {
    return (
      <div>
        <div className="resource-name">{resource.name}</div>
        <div className="md-resource-data-structure-title">{resource.title}</div>
      </div>
    );
  };

  return <Eventcalendar view={myView} data={myEvents} resources={myResources} renderResource={renderCustomResource} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
