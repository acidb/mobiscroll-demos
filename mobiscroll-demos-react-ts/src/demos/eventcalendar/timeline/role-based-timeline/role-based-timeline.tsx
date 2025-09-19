import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '20:00',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(() => [], []);

  const myResources = useMemo<MbscResource[]>(() => [], []);

  return <Eventcalendar view={myView} data={myEvents} resources={myResources} />;
};
export default App;
