import React from 'react';
import { Eventcalendar, setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const myView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { type: 'month' },
    };
  }, []);

  const myEvents = React.useMemo<MbscCalendarEvent[]>(() => {
    return [
      {
        color: 'cyan',
        end: 'dyndatetime(y,m,d-5)',
        start: 'dyndatetime(y,m,d-6)',
        title: 'Event 1',
      },
      {
        color: 'blue',
        dragInTime: false,
        end: 'dyndatetime(y,m,d-1)',
        start: 'dyndatetime(y,m,d-4)',
        title: 'Event 2 (cannot be moved in time)',
      },
      {
        color: 'brown',
        end: 'dyndatetime(y,m,d+3)',
        start: 'dyndatetime(y,m,d)',
        resize: false,
        title: 'Event 3 (cannot be resized)',
      },
      {
        color: 'teal',
        end: 'dyndatetime(y,m,d+4)',
        start: 'dyndatetime(y,m,d+3)',
        title: 'Event 4',
      },
      {
        color: 'yellow',
        end: 'dyndatetime(y,m,d+6)',
        start: 'dyndatetime(y,m,d+5)',
        title: 'Event 5',
      },
    ];
  }, []);

  return <Eventcalendar view={myView} data={myEvents} dragToMove={true} />;
};
export default App;
