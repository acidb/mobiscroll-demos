import { getJson, Eventcalendar, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const myView = useMemo(() => ({ agenda: { type: 'month' } }), []);

  const onEventClick = useCallback((event) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  const closeToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar data={myEvents} view={myView} onEventClick={onEventClick} />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
}

export default App;
