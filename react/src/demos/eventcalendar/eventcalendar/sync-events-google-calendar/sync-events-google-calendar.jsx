import React from 'react';
//<demo-only>import { googleCalendarSync, Eventcalendar, setOptions, Page, Button, Switch, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, toast, confirm/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const Page = mobiscroll.Page;
const Button = mobiscroll.Button;
const Switch = mobiscroll.Switch;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNext = mobiscroll.CalendarNext;
const CalendarToday = mobiscroll.CalendarToday;
const toast = mobiscroll.toast; //</extra>

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
  const [editable, setEditable] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isHidden, setHidden] = React.useState(true);
  const [primaryCalendarId, setPrimaryCalendarId] = React.useState();

  const { current: view } = React.useRef({ calendar: { labels: true } });

  const debounce = React.useRef();
  const startDate = React.useRef();
  const endDate = React.useRef();

  const onError = React.useCallback((resp) => {
    toast({
      message: resp.error ? resp.error : resp.result.error.message,
    });
  }, []);

  const extendDefaultEvent = React.useCallback(() => {
    return {
      color: calendarData[primaryCalendarId].color,
    };
  }, [calendarData, primaryCalendarId]);

  React.useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      googleCalendarSync
        .getCalendars()
        .then((calendars) => {
          calendars.sort((c) => (c.primary ? -1 : 1));

          const calData = {};
          const primaryCalId = calendars[0].id;

          for (const c of calendars) {
            calData[c.id] = { name: c.summary, color: c.backgroundColor, checked: c.id === primaryCalId };
          }

          setCalendarIds([primaryCalId]);
          setPrimaryCalendarId(primaryCalId);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);

          return googleCalendarSync.getEvents([primaryCalId], startDate.current, endDate.current);
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
    };

    setHidden(false);

    // init google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  const signIn = React.useCallback(() => {
    googleCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = React.useCallback(() => {
    googleCalendarSync.signOut().catch(onError);
  }, [onError]);

  const toggleEditing = React.useCallback((ev) => {
    setEditable(ev.target.checked);
  }, []);

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
        <CalendarNav />
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
        <div className="md-google-calendar-header">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </React.Fragment>
    );
  }, []);

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
            .then((events) => {
              setLoading(false);
              setEvents(events);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  const onEventCreate = React.useCallback(
    (args) => {
      if (googleCalendarSync.isSignedIn()) {
        const event = args.event;
        googleCalendarSync
          .addEvent(primaryCalendarId, event)
          .then((newEvent) => {
            newEvent.color = event.color;
            setEvents((oldEvents) => [...oldEvents, newEvent]);
            toast({
              message: 'Event created in "' + calendarData[primaryCalendarId].name + '" calendar',
            });
          })
          .catch((error) => {
            setEvents((oldEvents) => [...oldEvents]);
            onError(error);
          });
      }
    },
    [calendarData, onError, primaryCalendarId],
  );

  const onEventUpdate = React.useCallback(
    (args) => {
      if (googleCalendarSync.isSignedIn()) {
        confirm({
          title: 'Are you sure you want to update this event?',
          message: 'This action will affect your Google Calendar event.',
          okText: 'Update',
        }).then((result) => {
          const event = args.event;
          if (result) {
            const calendarId = event.googleCalendarId;
            googleCalendarSync
              .updateEvent(calendarId, event)
              .then(() => {
                toast({
                  message: 'Event updated on "' + calendarData[calendarId].name + '" calendar',
                });
              })
              .catch((error) => {
                setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== event.id), args.oldEvent]);
                onError(error);
              });
          } else {
            setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== event.id), args.oldEvent]);
          }
        });
      }
    },
    [calendarData, onError],
  );

  const onEventDelete = React.useCallback(
    (args) => {
      if (googleCalendarSync.isSignedIn()) {
        confirm({
          title: 'Are you sure you want to delete this event?',
          message: 'This action will remove the event from your Google Calendar as well.',
          okText: 'Delete',
        }).then((result) => {
          if (result) {
            const event = args.event;
            const calendarId = event.googleCalendarId;
            googleCalendarSync
              .deleteEvent(calendarId, event)
              .then(() => {
                setEvents((oldEvents) => oldEvents.filter((item) => item.id !== event.id));
                toast({
                  message: 'Event deleted from "' + calendarData[calendarId].name + '" calendar',
                });
              })
              .catch(onError);
          }
        });
      }
      return false;
    },
    [calendarData, onError],
  );

  return (
    <Page className="md-sync-events-google-cont">
      <div className={'md-sync-events-google-menu ' + (isHidden ? 'mbsc-hidden' : '')}>
        {isLoggedIn ? (
          <div aria-hidden={!isLoggedIn}>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">
                Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.
              </p>
            </div>
            <div className="mbsc-form-group-inset">
              <Switch label="Enable editing" checked={editable} onChange={toggleEditing} />
            </div>
            <div className="mbsc-form-group-inset md-sync-events-google-inset">
              <div className="mbsc-form-group-title">My Calendars</div>
              {myCalendars.map((cal) => {
                return (
                  <Switch
                    label={cal.summary}
                    key={cal.id}
                    value={cal.id}
                    checked={calendarData[cal.id].checked}
                    onChange={toggleCalendar}
                  />
                );
              })}
            </div>
            <div className="mbsc-form-group-inset">
              <Button className="mbsc-button-block" onClick={signOut}>
                Log out of my account
              </Button>
            </div>
          </div>
        ) : (
          <div aria-hidden={isLoggedIn}>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">Log into your Google account to view and edit your Google Calendar events</p>
              <button className="mbsc-reset md-sync-events-google-button" onClick={signIn}>
                Sign in with Google
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={'md-sync-events-google-calendar ' + (isLoading ? 'md-loading-events' : '')}>
        <div className="md-sync-events-overlay"></div>
        <Eventcalendar
          view={view}
          data={myEvents}
          exclusiveEndDates={true}
          clickToCreate={editable}
          dragToCreate={editable}
          dragToMove={editable}
          dragToResize={editable}
          extendDefaultEvent={extendDefaultEvent}
          renderHeader={renderMyHeader}
          onPageLoading={onPageLoading}
          onEventCreate={onEventCreate}
          onEventUpdate={onEventUpdate}
          onEventDelete={onEventDelete}
        ></Eventcalendar>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
