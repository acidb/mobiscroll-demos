import React from 'react';
import {
  Eventcalendar,
  setOptions,
  Page,
  Button,
  Switch,
  CalendarNav,
  CalendarPrev,
  CalendarNext,
  toast,
  Popup /* localeImport */,
} from '@mobiscroll/react';
import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import './sync-events-google-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [myCalendars, setCalendars] = React.useState([]);
  const [calendarIds, setCalendarIds] = React.useState([]);
  const [calendarData, setCalendarData] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const [myAnchor, setAnchor] = React.useState(null);
  const [mySelectedDate, setSelectedDate] = React.useState(new Date());

  const { current: view } = React.useRef({ agenda: { type: 'month' } });

  const debounce = React.useRef();
  const startDate = React.useRef();
  const endDate = React.useRef();

  const onError = React.useCallback((resp) => {
    toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }, []);

  React.useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      googleCalendarSync
        .getCalendars()
        .then((calendars) => {
          const newCalendarIds = [];
          const calData = {};

          calendars.sort((c) => (c.primary ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            calData[c.id] = { checked: true };
          }

          setCalendarIds(newCalendarIds);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);
          return googleCalendarSync.getEvents(newCalendarIds, startDate.current, endDate.current);
        })
        .then((events) => {
          setEvents(events);
          setLoading(false);
        })
        .catch(onError);
    };

    const onSignedOut = () => {
      setIsLoggedIn(false);
      setCalendars([]);
      setCalendarIds([]);
      setCalendarData({});
      setEvents([]);
      setOpen(false);
    };

    // init google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const openPopup = React.useCallback(() => {
    setAnchor(buttonRef.current.nativeElement);
    setOpen(true);
  }, []);

  const navigate = React.useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const onSelectedDateChange = React.useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const signIn = React.useCallback(() => {
    googleCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = React.useCallback(() => {
    googleCalendarSync.signOut().catch(onError);
  }, [onError]);

  const toggleCalendar = React.useCallback(
    (ev) => {
      const checked = ev.target.checked;
      const calendarId = ev.target.value;
      calendarData[calendarId].checked = checked;
      if (checked) {
        setLoading(true);
        setCalendarIds((calIds) => [...calIds, calendarId]);
        googleCalendarSync
          .getEvents([calendarId], startDate.current, endDate.current)
          .then((events) => {
            setLoading(false);
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setCalendarIds((calIds) => calIds.filter((item) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.googleCalendarId !== calendarId));
      }
    },
    [calendarData, onError],
  );

  const renderMyHeader = React.useCallback(() => {
    return (
      <React.Fragment>
        <CalendarNav className="md-sync-events-google-nav" />
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
        <div className="md-google-calendar-buttons">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup} className="md-sync-events-google-button">
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn} className="md-sync-events-google-button">
              Sync my google calendars
            </Button>
          )}
          <Button onClick={navigate}>Today</Button>
          <CalendarPrev />
          <CalendarNext />
        </div>
      </React.Fragment>
    );
  }, [isLoggedIn, navigate, openPopup, signIn]);

  const onPageLoading = React.useCallback(
    (args) => {
      clearTimeout(debounce.current);
      startDate.current = args.viewStart;
      endDate.current = args.viewEnd;
      debounce.current = setTimeout(() => {
        if (googleCalendarSync.isSignedIn()) {
          setLoading(true);
          googleCalendarSync
            .getEvents(calendarIds, startDate.current, endDate.current)
            .then((resp) => {
              setEvents(resp);
              setLoading(false);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  return (
    <Page className={'md-sync-events-google-cont ' + (isLoading ? 'md-loading-events' : '')}>
      <Eventcalendar
        view={view}
        data={myEvents}
        exclusiveEndDates={true}
        selectedDate={mySelectedDate}
        renderHeader={renderMyHeader}
        onPageLoading={onPageLoading}
        onSelectedDateChange={onSelectedDateChange}
      ></Eventcalendar>
      <Popup
        isOpen={isOpen}
        anchor={myAnchor}
        onClose={onClose}
        width={400}
        touchUi={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        display="anchored"
      >
        <div className="mbsc-form-group-inset md-sync-events-google-inset">
          <div className="mbsc-form-group-title">My Calendars</div>
          {myCalendars.map((cal) => {
            return (
              <Switch label={cal.summary} key={cal.id} value={cal.id} checked={calendarData[cal.id].checked} onChange={toggleCalendar} />
            );
          })}
        </div>
        <div className="mbsc-form-group-inset">
          <Button className="md-sync-events-google-button mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
    </Page>
  );
}
export default App;
