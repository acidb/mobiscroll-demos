import React from 'react';
import {
  Eventcalendar,
  Select,
  CalendarNav,
  CalendarPrev,
  CalendarNext,
  CalendarToday,
  momentTimezone /* localeImport */,
} from '@mobiscroll/react';
import './multiple-timezone-support.css';

import moment from 'moment-timezone';

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

function App() {
  const [timezone, setTimezone] = React.useState('utc');
  const myEvents = React.useMemo(() => {
    return [
      {
        start: 'dyndatetime(y,m,d-2,7)',
        end: 'dyndatetime(y,m,d-2,9)',
        title: 'Stakeholder mtg.',
        color: '#408cff',
      },
      {
        start: 'dyndatetime(y,m,d-1,18)',
        end: 'dyndatetime(y,m,d-1,19,30)',
        title: 'Wrapup mtg.',
        color: '#ecbc72',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Business of Software Conference',
        color: '#ff6d42',
      },
      {
        start: 'dyndatetime(y,m,d+1,20)',
        end: 'dyndatetime(y,m,d+1,21,50)',
        title: 'Product Team mtg.',
        color: '#913aa7',
      },
      {
        start: 'dyndatetime(y,m,d+2,13)',
        end: 'dyndatetime(y,m,d+2,15)',
        title: 'Decision Making mtg.',
        color: '#5bb7c5',
      },
      {
        start: 'dyndatetime(y,m,d+3,13)',
        end: 'dyndatetime(y,m,d+3,14)',
        title: 'Quick mtg. with Martin',
        color: '#fd002f',
      },
      {
        start: 'dyndatetime(y,m,d+4,12)',
        end: 'dyndatetime(y,m,d+4,16)',
        color: '#50b166',
        title: 'Team-Building',
      },
    ];
  }, []);

  const timezones = React.useMemo(() => {
    return [
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
    ];
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  const onChange = React.useCallback((ev) => {
    setTimezone(ev.value);
  }, []);

  const myHeader = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-timezone-nav" />
        <div className="md-timezone-header">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
          <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={onChange} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      // theme
      // locale
      dataTimezone="utc"
      displayTimezone={timezone}
      timezonePlugin={momentTimezone}
      data={myEvents}
      view={view}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      renderHeader={myHeader}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
