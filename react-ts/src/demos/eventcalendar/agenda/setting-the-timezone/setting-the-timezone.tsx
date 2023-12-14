import React from 'react';
import { Eventcalendar, MbscEventcalendarView, MbscCalendarEvent, momentTimezone /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment-timezone';

momentTimezone.moment = moment;

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([
    {
      start: '2021-06-08T07:00:00Z',
      end: '2021-06-08T09:00:00Z',
      title: 'Stakeholder mtg.',
      color: '#d64646',
    },
    {
      start: '2021-06-11T18:00:00Z',
      end: '2021-06-11T19:30:00Z',
      title: 'Wrapup mtg.',
      color: '#ecbc72',
    },
    {
      start: '2021-06-08T14:00:00Z',
      end: '2021-06-08T18:00:00Z',
      title: 'Business of Software Conference',
      color: '#ff6d42',
    },
    {
      start: '2021-06-09T20:00:00Z',
      end: '2021-06-09T21:50:00Z',
      title: 'Product Team mtg.',
      color: '#913aa7',
    },
    {
      start: '2021-06-07T13:00:00Z',
      end: '2021-06-07T15:00:00Z',
      title: 'Decision Making mtg.',
      color: '#46c3d6',
    },
    {
      start: '2021-06-09T13:00:00Z',
      end: '2021-06-09T14:00:00Z',
      title: 'Quick mtg. with Martin',
      color: '#50b166',
    },
    {
      start: '2021-06-11T12:00:00Z',
      end: '2021-06-11T16:00:00Z',
      color: '#5bb7c5',
      title: 'Team-Building',
    },
  ]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'week' },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      dataTimezone="utc"
      displayTimezone="local"
      timezonePlugin={momentTimezone}
      data={myEvents}
      view={view}
    />
  );
};
export default App;
