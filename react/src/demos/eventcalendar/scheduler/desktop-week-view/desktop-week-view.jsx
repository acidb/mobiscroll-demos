import React from 'react';
import { Page, Eventcalendar, getJson, Toast /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();
  const inst = React.useRef();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onEventClick = React.useCallback((event) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  const test = React.useCallback(() => {
    const ins = inst.current;
    console.log('test', inst, ins._selectedDateTime, ins._active, inst.current.getViewDate());
  }, []);

  return (
    <Page>
      <Eventcalendar
        ref={inst}
        // locale
        // theme

        data={myEvents}
        view={view}
        onEventClick={onEventClick}
        height={500}
      />
      <Toast
        // locale
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
      <button onClick={test}>Test</button>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
