import React from 'react';
import {
  Eventcalendar,
  getJson,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent /* localeImport */,
} from '@mobiscroll/react';
import './mobile-month-view.css';

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

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { type: 'month' },
      agenda: { type: 'month' },
    };
  }, []);

  const onEventClick = React.useCallback((event: MbscEventClickEvent) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  return (
    <>
      <Eventcalendar
        // locale
        // theme
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </>
  );
};
export default App;