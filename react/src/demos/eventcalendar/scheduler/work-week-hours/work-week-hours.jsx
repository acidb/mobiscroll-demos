import React from 'react';
import { Eventcalendar, getJson, Toast, setOptions /* localeImport */ } from '@mobiscroll/react';
import './work-week-hours.css';

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();
  const invalids = [
    {
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      type: 'lunch',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
  ];

  React.useEffect(() => {
    mobiscroll.util.http.getJson(
      'https://trial.mobiscroll.com//workday-events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const onEventCreateFailed = React.useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't create this task on lunch break.");
      setToastOpen(true);
    }
  });

  const onEventUpdateFailed = React.useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't schedule this task on lunch break.");
      setToastOpen(true);
    }
  });

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
      },
    };
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <mobiscroll.Eventcalendar
        // theme
        // locale
        dragToCreate={true}
        dragToMove={true}
        invalid={invalids}
        data={myEvents}
        view={view}
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
