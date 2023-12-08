import React from 'react';
import { Eventcalendar, getJson, Toast, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();
  const inv = [
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'SA,SU',
      },
    },
    {
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
    {
      start: '00:00',
      end: '08:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
    {
      start: '17:00',
      end: '23:59',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/workday-events/',
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

  const onEventCreateFailed = React.useCallback((event) => {
    setToastText("Can't create event on this date");
    setToastOpen(true);
  });

  const onEventUpdateFailed = React.useCallback((event) => {
    setToastText("Can't add event on this date");
    setToastOpen(true);
  });

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        data={myEvents}
        view={view}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        invalidateEvent="strict"
        invalid={inv}
        onEventCreateFailed={onEventCreateFailed}
        onEventUpdateFailed={onEventUpdateFailed}
      />
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
