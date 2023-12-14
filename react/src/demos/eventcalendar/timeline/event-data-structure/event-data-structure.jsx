import React from 'react';
import { Eventcalendar, toast, Button /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [myEvents, setEvents] = React.useState([
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'General orientation',
      resource: 2,
    },
  ]);

  const myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'day',
      },
    };
  }, []);

  const addEvent = () => {
    const newEvent = {
      // base properties
      title: 'Product planning',
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 4,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    setEvents([...myEvents, newEvent]);

    toast({
      //<hidden>
      // theme,//</hidden>
      // context,
      message: 'Event added',
    });
  };

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        view={view}
        resources={myResources}
      />
      <div className="mbsc-button-group-block">
        <Button onClick={addEvent}>Add event to calendar</Button>
      </div>
    </div>
  );
}

export default App;
