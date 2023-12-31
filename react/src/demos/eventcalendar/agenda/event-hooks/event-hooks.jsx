import React from 'react';
import { Eventcalendar, getJson /* localeImport */ } from '@mobiscroll/react';

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      agenda: {
        type: 'month',
      },
    };
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      data={myEvents}
      view={view}
      onDestroy={(event, inst) => {
        // Your custom event handler goes here
      }}
      onEventClick={(event, inst) => {
        // Logic for event click
      }}
      onEventDoubleClick={(event, inst) => {
        // Logic for event double click
      }}
      onEventHoverIn={(event, inst) => {
        // Logic for event hover in
      }}
      onEventHoverOut={(event, inst) => {
        // Logic for event hover out
      }}
      onEventRightClick={(event, inst) => {
        // Logic for event right click
      }}
      onInit={(event, inst) => {
        // Logic running on component init
      }}
      onPageChange={(event, inst) => {
        // Your custom event handler goes here
      }}
      onPageLoaded={(event, inst) => {
        // Use it to inject custom markup & attach custom listeners
      }}
      onPageLoading={(event, inst) => {
        // Use it to load data on demand
      }}
      onSelectedDateChange={(event, inst) => {
        // Use it to keep track of the selected date externally
      }}
    />
  );
}

export default App;
