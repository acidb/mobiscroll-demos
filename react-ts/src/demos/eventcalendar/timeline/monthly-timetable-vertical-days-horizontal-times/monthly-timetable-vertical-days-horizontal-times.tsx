import { Eventcalendar, formatDate, getJson, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions } from '@mobiscroll/react';
import React from 'react';
import './monthly-timetable-vertical-days-horizontal-times.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    }),
    [],
  );

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-vertical-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar view={view} data={myEvents} />;
};
export default App;
