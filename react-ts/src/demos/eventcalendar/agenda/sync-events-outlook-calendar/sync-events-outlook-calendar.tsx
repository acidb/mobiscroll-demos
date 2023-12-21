import React from 'react';
import {
  Eventcalendar,
  Popup,
  setOptions,
  Page,
  Button,
  Switch,
  CalendarNav,
  CalendarPrev,
  CalendarNext,
  toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
} from '@mobiscroll/react';
import { outlookCalendarSync } from '@mobiscroll/calendar-integration';
import './sync-events-outlook-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [myCalendars, setCalendars] = React.useState<any>([]);
  const [calendarIds, setCalendarIds] = React.useState<any>([]);
  const [calendarData, setCalendarData] = React.useState<any>([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const buttonRef = React.useRef<any>(null);
  const [myAnchor, setAnchor] = React.useState<any>(null);
  const [mySelectedDate, setSelectedDate] = React.useState<any>(new Date());

  const { current: view } = React.useRef<MbscEventcalendarView>({ agenda: { type: 'month' } });

  const debounce: any = React.useRef();
  const startDate: any = React.useRef();
  const endDate: any = React.useRef();

  const onError = React.useCallback((resp) => {
    toast({
      message: resp.message,
    });
  }, []);

  React.useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      outlookCalendarSync
        .getCalendars()
        .then((calendars: any) => {
          const newCalendarIds = [];
          const calData: any = {};

          calendars.sort((c: { isDefaultCalendar: boolean }) => (c.isDefaultCalendar ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            calData[c.id] = { checked: true };
          }

          setCalendarIds(newCalendarIds);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);
          return outlookCalendarSync.getEvents(newCalendarIds, startDate.current, endDate.current);
        })
        .then((events: any) => {
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

    // init outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
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
    outlookCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = React.useCallback(() => {
    outlookCalendarSync.signOut().catch(onError);
  }, [onError]);

  const toggleCalendar = React.useCallback(
    (ev) => {
      const checked = ev.target.checked;
      const calendarId = ev.target.value;
      calendarData[calendarId].checked = checked;
      if (checked) {
        setLoading(true);
        setCalendarIds((calIds: any) => [...calIds, calendarId]);
        outlookCalendarSync
          .getEvents([calendarId], startDate.current, endDate.current)
          .then((events: any) => {
            setLoading(false);
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setCalendarIds((calIds: any) => calIds.filter((item: any) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.outlookCalendarId !== calendarId));
      }
    },
    [calendarData, onError],
  );

  const renderMyHeader = React.useCallback(() => {
    return (
      <React.Fragment>
        <CalendarNav className="md-sync-events-outlook-nav" />
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
        <div className="md-outlook-calendar-buttons">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup} className="md-sync-events-outlook-button">
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn} className="md-sync-events-outlook-button">
              Sync my outlook calendars
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
        if (outlookCalendarSync.isSignedIn()) {
          setLoading(true);
          outlookCalendarSync
            .getEvents(calendarIds, startDate.current, endDate.current)
            .then((resp: any) => {
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
    <Page className={'md-sync-events-outlook-cont ' + (isLoading ? 'md-loading-events' : '')}>
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
        <div className="mbsc-form-group-inset md-sync-events-outlook-inset">
          <div className="mbsc-form-group-title">My Calendars</div>
          {myCalendars.map((cal: any) => {
            return <Switch label={cal.name} key={cal.id} value={cal.id} checked={calendarData[cal.id].checked} onChange={toggleCalendar} />;
          })}
        </div>
        <div className="mbsc-form-group-inset">
          <Button className="md-sync-events-outlook-button mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
    </Page>
  );
};
export default App;
