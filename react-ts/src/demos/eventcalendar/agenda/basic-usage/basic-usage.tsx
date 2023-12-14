import React from 'react';
import {
  Eventcalendar,
  getJson,
  toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent /* localeImport */,
} from '@mobiscroll/react';

const App: React.FC = () => {
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const onEventClick = React.useCallback((event: MbscEventClickEvent) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'month' },
    };
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
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
