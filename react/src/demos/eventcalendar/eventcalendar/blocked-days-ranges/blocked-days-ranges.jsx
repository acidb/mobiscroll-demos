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
      allDay: true,
      start: 'dyndatetime(y,m,19)',
      end: 'dyndatetime(y,m,20)',
    },
    {
      allDay: true,
      start: 'dyndatetime(y,m,26)',
      end: 'dyndatetime(y,m,27)',
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/work-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: {
        labels: true,
      },
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
