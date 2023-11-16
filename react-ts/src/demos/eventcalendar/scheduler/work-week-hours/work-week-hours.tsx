import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateFailedEvent,
  MbscEventUpdateFailedEvent,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import './work-week-hours.css';

function WorkWeekHours() {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();
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

  const onEventCreateFailed = useCallback((event: MbscEventCreateFailedEvent) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't create this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const onEventUpdateFailed = useCallback((event: MbscEventUpdateFailedEvent) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't schedule this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const view = useMemo<MbscEventcalendarView>(() => {
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
    <div>
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
    </div>
  );
}

export default WorkWeekHours;
