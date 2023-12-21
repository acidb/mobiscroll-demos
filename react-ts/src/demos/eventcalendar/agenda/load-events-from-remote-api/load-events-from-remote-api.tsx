import React from 'react';
import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import './load-events-from-remote-api.css';

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
      agenda: { type: 'month' },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      data={myEvents}
      view={view}
    />
  );
};
export default App;
