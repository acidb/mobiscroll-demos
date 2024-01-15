import { Eventcalendar, getJson, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';
import './load-events-on-demand.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [events, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);

  const myView = useMemo(() => ({ agenda: { labels: 'month' } }), []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePageLoading = useCallback((event) => {
    const year = event.month.getFullYear();
    const month = event.month.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data) => {
        setEvents(data);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar data={events} view={myView} onPageLoading={handlePageLoading} />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
}

export default App;
