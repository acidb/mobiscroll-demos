import React from 'react';
import { Eventcalendar, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import './full-event-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [view, setView] = React.useState('month');
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/agenda-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const [calView, setCalView] = React.useState({
    agenda: { type: 'month' },
  });

  const renderEvent = React.useCallback((data) => {
    return (
      <div className="md-full-event">
        <img className="md-full-event-img" src={'https://img.mobiscroll.com/demos/' + data.original.img} />
        <div className="md-full-event-details">
          <div className="md-full-event-title">{data.title}</div>
          <div className="md-full-event-location">
            <div className="md-full-event-label">Location</div>
            <div>{data.original.location}</div>
          </div>
          <div className="md-full-event-time">
            <div className="md-full-event-label">Time</div>
            <div>{data.start}</div>
          </div>
        </div>
      </div>
    );
  });

  return <Eventcalendar renderEvent={renderEvent} view={calView} data={myEvents} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
