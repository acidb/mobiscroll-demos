import React from 'react';
import {
  googleCalendarSync,
  Eventcalendar,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarToday,
  CalendarNext,
  toast /* localeImport */,
} from '@mobiscroll/react';
import './load-events-from-google-calendar.css';

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';

function App() {
  const [events, setEvents] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [view, setView] = React.useState('agenda');
  const [calView, setCalView] = React.useState({
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  });
  const firstDay = React.useRef();
  const lastDay = React.useRef();

  const onError = React.useCallback((resp) => {
    toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }, []);

  const loadEvents = React.useCallback(() => {
    setLoading(true);
    googleCalendarSync
      .getEvents(CALENDAR_ID, firstDay, lastDay)
      .then(function (resp) {
        setLoading(false);
        setEvents(resp);
      })
      .catch(onError);
  }, [firstDay, lastDay, onError]);

  const onPageLoading = React.useCallback(
    (event) => {
      const start = event.viewStart;
      const end = event.viewEnd;

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

  React.useEffect(() => {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: loadEvents,
    });
  }, [loadEvents]);

  const changeView = (event) => {
    let calView;

    switch (event.target.value) {
      case 'month':
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
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
      default:
        calView = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      // locale
      // theme
      className={'md-google-calendar ' + (isLoading ? 'md-loading-events' : '')}
      exclusiveEndDates={true}
      view={calView}
      data={events}
      onPageLoading={onPageLoading}
      renderHeader={customWithNavButtons}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
