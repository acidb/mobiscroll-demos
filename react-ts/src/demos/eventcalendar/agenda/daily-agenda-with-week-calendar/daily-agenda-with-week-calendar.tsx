import React from 'react';
import { Eventcalendar, getJson, Toast, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

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

  const onEventClick = React.useCallback((event) => {
    toast({
      //<hidden>
      // theme, //</hidden>
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    };
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
