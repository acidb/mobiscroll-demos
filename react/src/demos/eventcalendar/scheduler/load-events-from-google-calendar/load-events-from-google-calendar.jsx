import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  SegmentedGroup,
  SegmentedItem,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './load-events-from-google-calendar.css';

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [view, setView] = useState('week');
  const [calView, setCalView] = useState({
    schedule: { type: 'week' },
  });
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const firstDay = useRef();
  const lastDay = useRef();

  const onError = useCallback((resp) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const loadEvents = useCallback(() => {
    setLoading(true);
    googleCalendarSync
      .getEvents(CALENDAR_ID, firstDay, lastDay)
      .then(function (resp) {
        setLoading(false);
        setEvents(resp);
      })
      .catch(onError);
  }, [firstDay, lastDay, onError]);

  const handlePageLoading = useCallback(
    (args) => {
      const start = args.viewStart;
      const end = args.viewEnd;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      if (view === 'month') {
        firstDay.current = start;
        lastDay.current = end;
      } else {
        firstDay.current = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
        lastDay.current = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
      }

      loadEvents();
    },
    [loadEvents, view],
  );

  const changeView = (event) => {
    let calView;

    switch (event.target.value) {
      case 'month':
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
      default:
        calView = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        calView = {
          schedule: { type: 'day' },
        };
        break;
      case 'agenda':
        calView = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const closeToast = useCallback(() => setToastOpen(false), []);

  const customWithNavButtons = useCallback(() => {
    return (
      <>
        <CalendarNav className="google-cal-header-nav" />
        <div className="md-spinner">
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
        </div>
        <div className="google-cal-header-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="month">Month</SegmentedItem>
            <SegmentedItem value="week">Week</SegmentedItem>
            <SegmentedItem value="day">Day</SegmentedItem>
            <SegmentedItem value="agenda">Agenda</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="google-cal-header-prev" />
        <CalendarToday className="google-cal-header-today" />
        <CalendarNext className="google-cal-header-next" />
      </>
    );
  }, [view]);

  useEffect(() => {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: loadEvents,
    });
  }, [loadEvents, view]);

  return (
    <>
      <Eventcalendar
        className={'md-google-calendar ' + (isLoading ? 'md-loading-events' : '')}
        exclusiveEndDates={true}
        view={calView}
        data={myEvents}
        onPageLoading={handlePageLoading}
        renderHeader={customWithNavButtons}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={closeToast} />
    </>
  );
}

export default App;
