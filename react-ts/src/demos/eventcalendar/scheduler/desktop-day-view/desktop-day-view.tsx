import {
  Eventcalendar,
  getJson,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const handleCloseToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onEventClick = React.useCallback((args: MbscEventClickEvent) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'day' },
    }),
    [],
  );

  return (
    <>
      <Eventcalendar
        // locale
        // theme
        // drag
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
