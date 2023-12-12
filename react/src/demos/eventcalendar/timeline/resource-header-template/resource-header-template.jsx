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
      },
    };
  }, []);

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Flatiron Room',
        seats: 90,
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        seats: 250,
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        seats: 400,
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        seats: 1200,
        color: '#239a21',
      },
      {
        id: 5,
        name: 'King’s Landing',
        seats: 550,
        color: '#ff4600',
      },
      {
        id: 6,
        name: 'Gathering Field',
        seats: 900,
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

  const renderCustomResource = (resource) => {
    return (
      <div className="md-resource-header-template-cont">
        <div className="md-resource-header-template-name">{resource.name}</div>
        <div className="md-resource-header-template-seats">{resource.seats} seats</div>
      </div>
    );
  };

  const renderCustomHeader = () => {
    return (
      <div className="md-resource-header-template-title">
        <div className="md-resource-header-template-name">Room</div>
        <div className="md-resource-header-template-seats">Capacity</div>
      </div>
    );
  };

  return (
    <Eventcalendar
      // theme
      // locale
      view={view}
      data={myEvents}
      resources={myResources}
      renderResource={renderCustomResource}
      renderResourceHeader={renderCustomHeader}
      cssClass="md-resource-header-template"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
