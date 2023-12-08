import React from 'react';
import { Eventcalendar, getJson, Toast /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [events, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onPageLoading = React.useCallback((event, inst) => {
    const year = event.month.getFullYear();
    const month = event.month.getMonth();
    const day = event.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
      (data) => {
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

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'day' },
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
}

ReactDOM.render(<App />, document.getElementById('content'));
