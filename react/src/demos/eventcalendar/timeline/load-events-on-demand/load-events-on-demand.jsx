import { Eventcalendar, getJson, setOptions, toast /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useCallback } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const myResources = useMemo(
    () => [
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
    ],
    [],
  );

  const myView = useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  const handlePageLoading = useCallback((args) => {
    const year = args.month.getFullYear();
    const month = args.month.getMonth();
    const day = args.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
      (data) => {
        const newEvents = [];

        for (const d of data) {
          newEvents.push({
            start: d.start,
            end: d.end,
            title: d.title,
            resource: d.resource,
          });
        }

        setEvents(newEvents);

        toast({
          message: 'New events loaded',
        });
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      view={myView}
      resources={myResources}
      onPageLoading={handlePageLoading}
    />
  );
}

export default App;
