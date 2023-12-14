import React from 'react';
import { Eventcalendar /* localeImport */ } from '@mobiscroll/react';

declare global {
  interface Window {
    [type: string]: any;
  }
}

const App: React.FC = () => {
  let API_KEY = '<YOUR_API_KEY>';
  let CLIENT_ID = '<YOUR_CLIENT_ID>';
  //<hidden>
  API_KEY = 'AIzaSyBl-coDjS7vmf0AdIsFAlno_l_GyIHfJcs';
  CLIENT_ID = '767695417406-9fdch44qs8d0g2pu18cqpe8cvnnu4o8a.apps.googleusercontent.com'; //</hidden>

  const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';
  const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
  const now = new Date();
  let calApiLoaded: boolean;
  let firstDay = new Date(now.getFullYear(), now.getMonth() - 1, -7);
  let lastDay = new Date(now.getFullYear(), now.getMonth() + 2, 14);

  const [events, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  React.useEffect(() => {
    // Load the Google API Client
    window.onGoogleLoad = () => {
      window.gapi.load('client', initClient);
    };
    loadGoogleSDK();
  });

  // Load the SDK asynchronously
  const loadGoogleSDK = () => {
    (function (d: any, s: any, id: any) {
      let js;
      let fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        window.onGoogleLoad();
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/api.js?onload=onGoogleLoad';
      js.onload = 'onGoogleLoad';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  };

  // Init the Google API client
  const initClient = () => {
    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(() => {
        calApiLoaded = true;
        loadEvents(firstDay, lastDay);
      });
  };

  // Load events from Google Calendar between 2 dates
  const loadEvents = React.useCallback(
    (firstDay, lastDay) => {
      // Only load events if the Google API finished loading
      if (calApiLoaded) {
        window.gapi.client.calendar.events
          .list({
            calendarId: CALENDAR_ID,
            timeMin: firstDay.toISOString(),
            timeMax: lastDay.toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 100,
            orderBy: 'startTime',
          })
          .then((response: any) => {
            let event;
            let events = response.result.items;
            let eventList = [];
            // Process event list
            for (let i = 0; i < events.length; ++i) {
              event = events[i];
              eventList.push({
                start: new Date(event.start.date || event.start.dateTime),
                end: new Date(event.end.date || event.end.dateTime),
                title: event.summary || 'No Title',
              });
            }
            // Pass the processed events to the calendar
            setEvents(eventList);
          });
      }
    },
    [events, firstDay, lastDay],
  );

  const onPageLoading = React.useCallback(
    (event) => {
      const year = event.firstDay.getFullYear();
      const month = event.firstDay.getMonth();

      // Calculate dates
      // (pre-load events for previous and next months as well)
      firstDay = new Date(year, month - 1, -7);
      lastDay = new Date(year, month + 2, 14);

      loadEvents(firstDay, lastDay);
    },
    [firstDay, lastDay],
  );

  return (
    <Eventcalendar
      // locale
      // theme
      view={view}
      data={events}
      onPageLoading={onPageLoading}
    />
  );
};
export default App;
