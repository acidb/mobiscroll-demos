import React from 'react';
import { Eventcalendar, getJson, Toast, MbscCalendarEvent, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
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
      (events: MbscCalendarEvent[]) => {
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

  const onEventCreateFailed = React.useCallback(() => {
    setToastText("Can't create event on this date");
    setToastOpen(true);
  }, []);

  const onEventUpdateFailed = React.useCallback(() => {
    setToastText("Can't add event on this date");
    setToastOpen(true);
  }, []);

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
};
export default App;
