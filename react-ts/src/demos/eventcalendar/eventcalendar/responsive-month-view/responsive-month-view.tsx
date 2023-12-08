import React from 'react';
import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

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

  const responsive = React.useMemo(() => {
    return {
      xsmall: {
        view: {
          calendar: {
            type: 'week',
          },
          agenda: {
            type: 'day',
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: {
            labels: true,
          },
        },
      },
    };
  }, []);

  return (
    <Eventcalendar
      // locale
      // theme
      data={myEvents}
      responsive={responsive}
    />
  );
};
