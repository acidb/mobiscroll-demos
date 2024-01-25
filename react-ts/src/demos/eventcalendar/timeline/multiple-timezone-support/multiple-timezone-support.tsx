import React from 'react';
import {
  Eventcalendar,
  Select,
  CalendarNav,
  CalendarPrev,
  CalendarNext,
  CalendarToday,
  MbscResource,
  momentTimezone,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import './multiple-timezone-support.css';

import moment from 'moment-timezone';

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

function App() {
  const [timezone, setTimezone] = React.useState<string>('utc');
  const myEvents = React.useMemo(
    () => [
      {
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,9)',
        title: 'Stakeholder mtg.',
        resource: [1, 2, 4],
      },
      {
        start: 'dyndatetime(y,m,d+3,18)',
        end: 'dyndatetime(y,m,d+3,19, 30)',
        title: 'Wrapup mtg.',
        resource: [2, 3, 5],
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Business of Software Conference',
        resource: [1, 3],
      },
      {
        start: 'dyndatetime(y,m,d+1,20)',
        end: 'dyndatetime(y,m,d+1,21, 50)',
        title: 'Product Team mtg.',
        resource: [2, 3, 4],
      },
      {
        start: 'dyndatetime(y,m,d-1,13)',
        end: 'dyndatetime(y,m,d-1,15)',
        title: 'Decision Making mtg.',
        resource: [1, 4, 5],
      },
      {
        start: 'dyndatetime(y,m,d+1,13)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Quick mtg. with Martin',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+3,12)',
        end: 'dyndatetime(y,m,d+3,16)',
        title: 'Team-Building',
        resource: [1, 2, 3, 4, 5],
      },
    ],
    [],
  );

  const myResources = React.useMemo<MbscResource>(
    () => [
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
    ],
    [],
  );

  const timezones = React.useMemo(
    () => [
      {
        text: 'America/Los Angeles',
        value: 'America/Los_Angeles',
      },
      {
        text: 'America/Chicago',
        value: 'America/Chicago',
      },
      {
        text: 'America/New York',
        value: 'America/New_York',
      },
      {
        text: 'UTC',
        value: 'utc',
      },
      {
        text: 'Europe/London',
        value: 'Europe/London',
      },
      {
        text: 'Europe/Berlin',
        value: 'Europe/Berlin',
      },
      {
        text: 'Europe/Bucharest',
        value: 'Europe/Bucharest',
      },
      {
        text: 'Asia/Shanghai',
        value: 'Asia/Shanghai',
      },
      {
        text: 'Asia/Tokyo',
        value: 'Asia/Tokyo',
      },
    ],
    [],
  );

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'week' },
    }),
    [],
  );

  const onChange = React.useCallback((ev) => {
    setTimezone(ev.value);
  }, []);

  const myHeader = () => (
    <React.Fragment>
      <CalendarNav />
      <div className="md-timezone-header">
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
        <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={onChange} />
      </div>
    </React.Fragment>
  );

  return (
    <Eventcalendar
      // theme
      // locale
      dataTimezone="utc"
      displayTimezone={timezone}
      timezonePlugin={momentTimezone}
      data={myEvents}
      view={view}
      resources={myResources}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      renderHeader={myHeader}
    />
  );
}
export default App;
