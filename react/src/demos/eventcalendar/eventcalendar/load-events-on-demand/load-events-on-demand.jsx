import React from 'react';
import { Page, Eventcalendar, getJson, Toast /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [events, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onPageLoading = React.useCallback((event, inst) => {
    const year = event.month.getFullYear();
    const month = event.month.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data) => {
        setEvents(data);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return (
    <Page>
      <Eventcalendar
        // theme
        // locale
        data={events}
        view={view}
        onPageLoading={onPageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={closeToast} />
    </Page>
  );
}

export default App;
