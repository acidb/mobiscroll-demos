import React from 'react';
import {
  Eventcalendar,
  getJson,
  toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent /* localeImport */,
} from '@mobiscroll/react';

const App: React.FC = () => {
  const [events, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onPageLoading = React.useCallback((event: MbscPageLoadingEvent) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data: MbscCalendarEvent[]) => {
        setEvents(data);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return (
    <>
      <Eventcalendar
        // theme
        // locale
        data={events}
        view={view}
        onPageLoading={onPageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={closeToast} />
    </>
  );
};
