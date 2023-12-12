import React from 'react';
//<demo-only>import { Eventcalendar, getJson, Toast/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const Toast = mobiscroll.Toast; //</extra>

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();

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
      calendar: { labels: true },
    };
  }, []);

  const renderLabel = React.useCallback((data) => {
    if (data.isMultiDay) {
      return (
        <div style={{ background: data.original.color, color: '#000' }} className="multi-day-event">
          {data.original.title}
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="single-day-event-dot" style={{ background: data.original.color }}></div>
          <div className="single-day-event" style={{ color: '#000' }}>
            {data.original.title}
          </div>
        </React.Fragment>
      );
    }
  });

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        renderLabel={renderLabel}
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
}

ReactDOM.render(<App />, document.getElementById('content'));
