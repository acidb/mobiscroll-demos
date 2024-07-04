import { Button, Eventcalendar, formatDate, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(
    () => ({
      agenda: {
        type: 'month',
        showEmptyDays: true,
      },
    }),
    [],
  );

  const addEvent = useCallback(
    (date) => {
      const newEvent = {
        title: 'Event',
        start: date,
      };

      setEvents([...myEvents, newEvent]);
    },
    [myEvents],
  );

  const renderCustomDay = useCallback(
    (events, date) => (
      <div className="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">
        <div className="mbsc-flex-1-1">
          <div>{formatDate('D MMM YYYY', date)}</div>
        </div>
        <Button variant="outline" icon="plus" onClick={() => addEvent(date)}></Button>
      </div>
    ),
    [addEvent],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar view={myView} data={myEvents} renderDay={renderCustomDay} />;
}

export default App;
