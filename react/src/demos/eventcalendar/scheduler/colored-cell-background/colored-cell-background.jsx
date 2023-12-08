import React from 'react';
import { Eventcalendar, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  return (
    <Eventcalendar
      data={myEvents}
      view={view}
      colors={[
        {
          date: 'dyndatetime(y,m,d-2)',
          background: '#f3c3d480',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,14)',
          background: '#fde4c880',
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+2, 20)',
          background: '#d5f1ea80',
        },
        {
          start: 'dyndatetime(y,m,d+6,6)',
          end: 'dyndatetime(y,m,d+6,8)',
          background: '#d5eaf780',
        },
        {
          start: 'dyndatetime(y,m,d+10)',
          end: 'dyndatetime(y,m,d+13)',
          allDay: true,
          background: '#e7ffe280',
        },
        {
          start: 'dyndatetime(y,m,d+16,10)',
          end: 'dyndatetime(y,m,d+17,8)',
          background: '#fbedd080',
        },
        {
          start: '12:00',
          end: '13:00',
          background: '#ffdbdb80',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
          title: 'Lunch',
        },
      ]}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
