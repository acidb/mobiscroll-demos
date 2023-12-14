import React from 'react';
import { Eventcalendar, getJson, Toast, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import './load-events-on-demand.css';

const App: React.FC = () => {
  const [events, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onPageLoading = React.useCallback((event, inst) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();
    const day = event.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data: MbscCalendarEvent[]) => {
        const newEvents = [];

        for (const value of data) {
          newEvents.push({
            start: value.start,
            end: value.end || '',
            allDay: value.allDay,
            title: value.title,
            color: value.color,
          });
        }

        setEvents(newEvents);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { labels: 'month' },
    };
  }, []);

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        data={events}
        view={view}
        onPageLoading={onPageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
};
export default App;
