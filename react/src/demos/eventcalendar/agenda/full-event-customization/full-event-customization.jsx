import { Eventcalendar, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './full-event-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(() => ({ agenda: { type: 'month' } }), []);

  const customEvent = useCallback(
    (data) => (
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
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/agenda-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar renderEvent={customEvent} view={myView} data={myEvents} />;
}

export default App;
