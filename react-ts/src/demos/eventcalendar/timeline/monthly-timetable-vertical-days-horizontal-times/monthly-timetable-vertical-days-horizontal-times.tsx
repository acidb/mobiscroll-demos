import React from 'react';
import { Eventcalendar, setOptions, formatDate, getJson, MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/react';
import './monthly-timetable-vertical-days-horizontal-times.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    };
  }, []);

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
