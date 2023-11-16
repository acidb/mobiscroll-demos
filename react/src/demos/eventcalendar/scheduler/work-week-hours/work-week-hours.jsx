import { useCallback, useEffect, useMemo, useState } from 'react';
import { Eventcalendar, getJson, Toast /* localeImport */ } from '@mobiscroll/react';
import './work-week-hours.css';

function WorkWeekHours() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();
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

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com//workday-events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const onEventCreateFailed = useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't create this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const onEventUpdateFailed = useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't schedule this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const view = useMemo(() => {
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

  const closeToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
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
    </>
  );
}

export default WorkWeekHours;
