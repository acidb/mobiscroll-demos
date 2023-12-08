import React from 'react';
import { Eventcalendar, getJson, setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

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

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: {
        type: 'week',
        allDay: false,
      },
    };
  }, []);

  return <Eventcalendar data={myEvents} view={view} />;
};
