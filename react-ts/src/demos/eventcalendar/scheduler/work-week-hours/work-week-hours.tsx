import {
  Eventcalendar,
  Toast,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventUpdateFailedEvent,
  MbscEventCreateFailedEvent /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';
import './work-week-hours.css';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();
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
    getJson(
      'https://trial.mobiscroll.com//workday-events/?vers=5',
      (events: any) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const onEventCreateFailed = React.useCallback((event: MbscEventCreateFailedEvent) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't create this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const onEventUpdateFailed = React.useCallback((event: MbscEventUpdateFailedEvent) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't schedule this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
      },
    }),
    [],
  );

  const handleCloseToast = React.useCallback(() => {
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
        onClose={handleCloseToast}
      />
    </div>
  );
};
export default App;
