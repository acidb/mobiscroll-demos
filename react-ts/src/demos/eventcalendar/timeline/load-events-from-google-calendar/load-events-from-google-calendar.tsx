import React from 'react';
import { googleCalendarSync, Eventcalendar, MbscEventcalendarView, toast /* localeImport */ } from '@mobiscroll/react';
import './load-events-from-google-calendar.css';

const App: React.FC = () => {
  const [events, setEvents] = React.useState([]);
  const firstDay = React.useRef<Date>();
  const lastDay = React.useRef<Date>();

  const calView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'month',
        eventList: true,
      },
    };
  }, []);

  const calendars = React.useMemo(() => {
    return [
      { id: 'en.french#holiday@group.v.calendar.google.com', name: 'Holidays in France', color: '#D81B60' },
      { id: 'en.german#holiday@group.v.calendar.google.com', name: 'Holidays in Germany', color: '#F4511E' },
      { id: 'en.hungarian#holiday@group.v.calendar.google.com', name: 'Holidays in Hungary', color: '#AD1457' },
      { id: 'en.indian#holiday@group.v.calendar.google.com', name: 'Holidays in India', color: '#E4C441' },
      { id: 'en.romanian#holiday@group.v.calendar.google.com', name: 'Holidays in Romania', color: '#0B8043' },
      { id: 'en.uk#holiday@group.v.calendar.google.com', name: 'Holidays in United Kingdom', color: '#3F51B5' },
      { id: 'en.usa#holiday@group.v.calendar.google.com', name: 'Holidays in United States', color: '#8E24AA' },
    ];
  }, []);

  const calendarIds = React.useMemo(() => {
    return calendars.map(function (cal) {
      return cal.id;
    });
  }, [calendars]);

  const onError = React.useCallback((resp) => {
    toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }, []);

  const loadEvents = React.useCallback(() => {
    googleCalendarSync
      .getEvents(calendarIds, firstDay.current, lastDay.current)
      .then(function (resp) {
        resp.forEach(function (event) {
          event.resource = event.googleCalendarId;
        });
        setEvents(resp);
      })
      .catch(onError);
  }, [calendarIds, firstDay, lastDay, onError]);

  const onPageLoading = React.useCallback(
    (args) => {
      const start = args.firstDay;
      const end = args.lastDay;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      firstDay.current = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate());
      lastDay.current = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate());

      loadEvents();
    },
    [loadEvents],
  );

  React.useEffect(() => {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: loadEvents,
    });
  }, [loadEvents]);

  return (
    <Eventcalendar
      // locale
      // theme
      clickToCreate={false}
      dragToCreate={false}
      exclusiveEndDates={true}
      resources={calendars}
      view={calView}
      data={events}
      onPageLoading={onPageLoading}
    />
  );
};
export default App;
