import { Eventcalendar, getJson, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const responsive = React.useMemo(
    () => ({
      xsmall: {
        view: {
          schedule: { type: 'day' },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          schedule: { type: 'week' },
        },
      },
    }),
    [],
  );

  return (
    <Eventcalendar
      // locale
      // theme
      // drag
      data={myEvents}
      responsive={responsive}
    />
  );
};
export default App;
