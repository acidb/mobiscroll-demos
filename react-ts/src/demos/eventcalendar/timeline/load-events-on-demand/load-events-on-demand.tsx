import React from 'react';
import { Eventcalendar, getJson, setOptions, toast, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [events, setEvents] = React.useState<MbscCalendarEvent[]>([]);
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

  const onPageLoading = React.useCallback((event, inst) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();
    const day = event.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
      (data: MbscCalendarEvent[]) => {
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

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  return <Eventcalendar data={events} view={view} resources={myResources} onPageLoading={onPageLoading} />;
};
export default App;
