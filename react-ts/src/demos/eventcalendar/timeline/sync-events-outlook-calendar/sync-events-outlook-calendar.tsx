import React from 'react';
import {
  outlookCalendarSync,
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
  confirm,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
} from '@mobiscroll/react';
import './sync-events-outlook-calendar.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [myCalendars, setCalendars] = React.useState<any>([]);
  const [calendarIds, setCalendarIds] = React.useState<any>([]);
  const [calendarData, setCalendarData] = React.useState<any>();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [editable, setEditable] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [myResources, setResources] = React.useState<MbscResource[]>([]);
  const [readonlyCalendars, setReadonlyCalendars] = React.useState<string[]>([]);
  const [myInvalids, setInvalids] = React.useState<any>([]);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const buttonRef = React.useRef<any>(null);
  const [myAnchor, setAnchor] = React.useState<any>(null);
  const [mySelectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const { current: view } = React.useRef<MbscEventcalendarView>({
    timeline: {
      type: 'week',
      eventList: true,
    },
  });

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
          const newResources: MbscResource[] = [];
          const calData: any = {};
          const readonlyCals = [];

          calendars.sort((c: { isDefaultCalendar: boolean }) => (c.isDefaultCalendar ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            newResources.push({ id: c.id, name: c.name, color: c.hexColor });
            calData[c.id] = { name: c.name, color: c.hexColor, checked: true };
            if (!c.canEdit) {
              readonlyCals.push(c.id);
            }
          }

          setCalendarIds(newCalendarIds);
          setResources(newResources);
          setCalendarData(calData);
          setReadonlyCalendars(readonlyCals);
          setCalendars(calendars);
          setLoading(true);
          setInvalids([
            {
              recurring: {
                repeat: 'daily',
                interval: 1,
              },
              resource: readonlyCals,
            },
          ]);

          return outlookCalendarSync.getEvents(newCalendarIds, startDate.current, endDate.current);
        })
        .then((events: any) => {
          events.forEach((event: any) => {
            event.resource = event.outlookCalendarId;
          });
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
      setResources([]);
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

  const signIn = React.useCallback(() => {
    outlookCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = React.useCallback(() => {
    outlookCalendarSync.signOut().catch(onError);
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
        setCalendarIds((calIds: any) => [...calIds, calendarId]);
        outlookCalendarSync
          .getEvents([calendarId], startDate.current, endDate.current)
          .then((events: any) => {
            const newResource = calendarData[calendarId];
            setLoading(false);
            setResources((resources) => [...resources, { id: calendarId, name: newResource.name, color: newResource.color }]);
            events.forEach((event: any) => {
              event.resource = event.outlookCalendarId;
            });
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setResources((resources) => resources.filter((item) => item.id !== calendarId));
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
              resp.forEach((event: any) => {
                event.resource = event.outlookCalendarId;
              });
              setEvents(resp);
              setLoading(false);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  const onEventCreate = React.useCallback(
    (args) => {
      if (outlookCalendarSync.isSignedIn()) {
        const event = args.event;
        const calendarId = event.resource;

        if (readonlyCalendars.indexOf(calendarId) !== -1) {
          toast({
            message: 'This calendar is readonly',
          });
        } else {
          outlookCalendarSync
            .addEvent(calendarId, event)
            .then((newEvent: any) => {
              newEvent.resource = event.resource;
              setEvents((oldEvents) => [...oldEvents, newEvent]);
              toast({
                message: 'Event created in "' + calendarData[calendarId].name + '" calendar',
              });
            })
            .catch((error: any) => {
              setEvents((oldEvents) => [...oldEvents]);
              onError(error);
            });
        }
      }
    },
    [calendarData, onError, readonlyCalendars],
  );

  const onEventUpdate = React.useCallback(
    (args) => {
      if (outlookCalendarSync.isSignedIn()) {
        confirm({
          title: 'Are you sure you want to update this event?',
          message: 'This action will affect your outlook Calendar event.',
          okText: 'Update',
        }).then((result) => {
          const event = args.event;
          if (result) {
            const calendarId = event.outlookCalendarId;
            outlookCalendarSync
              .updateEvent(calendarId, event)
              .then(() => {
                toast({
                  message: 'Event updated on "' + calendarData[calendarId].name + '" calendar',
                });
              })
              .catch((error: any) => {
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
      if (outlookCalendarSync.isSignedIn()) {
        confirm({
          title: 'Are you sure you want to delete this event?',
          message: 'This action will remove the event from your outlook Calendar as well.',
          okText: 'Delete',
        }).then((result) => {
          if (result) {
            const event = args.event;
            const calendarId = event.outlookCalendarId;
            outlookCalendarSync
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
    <Page className={'md-sync-events-outlook-cont ' + (isLoading ? 'md-loading-events' : '')}>
      <Eventcalendar
        view={view}
        data={myEvents}
        exclusiveEndDates={true}
        clickToCreate={editable}
        dragToCreate={editable}
        dragToMove={editable}
        dragToResize={editable}
        resources={myResources}
        invalid={myInvalids}
        selectedDate={mySelectedDate}
        renderHeader={renderMyHeader}
        onPageLoading={onPageLoading}
        onEventCreate={onEventCreate}
        onEventUpdate={onEventUpdate}
        onEventDelete={onEventDelete}
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
        <div className="mbsc-form-group-inset mbsc-align-center">
          <p className="mbsc-italic mbsc-txt-muted">
            Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.
          </p>
        </div>
        <div className="mbsc-form-group-inset">
          <Switch label="Enable editing" checked={editable} onChange={toggleEditing} />
        </div>
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
