import React from 'react';
import {
  Eventcalendar,
  Button,
  Select,
  Page,
  getJson,
  confirm,
  toast,
  setOptions,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import './event-bulk-actions-edit-delete-update.css';
setOptions({
  // localeJs,
  // themeJs
});

const contextMenu = [
  {
    text: 'Update',
    value: 'update',
  },
  {
    text: 'Delete',
    value: 'delete',
  },
];

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvents, setSelectedEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [eventTitles, setEventTitles] = React.useState<string[]>([]);
  const { current: view } = React.useRef<MbscEventcalendarView>({ calendar: { labels: true } });
  const [firstDay, setFirstDay] = React.useState<any>();
  const [lastDay, setLastDay] = React.useState<any>();
  const [menuAnchor, setMenuAnchor] = React.useState<any>();
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [selectedValue, setSelected] = React.useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = React.useState<boolean>(false);
  const calRef = React.useRef();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const getSelectedEventTitles = React.useCallback((events) => {
    let titles = [];

    for (const event of events) {
      titles = [...titles, event.title];
    }
    return titles;
  }, []);

  const refreshSelectedEvents = React.useCallback(
    (events) => {
      setSelectedEvents(events);
      setEventTitles(getSelectedEventTitles(events));
    },
    [getSelectedEventTitles],
  );

  const deleteSelectedEvents = React.useCallback(() => {
    setConfirmOpen(true);
    confirm({
      title: 'Are you sure you want to delete the following events?',
      message: getSelectedEventTitles(mySelectedEvents).join(', '),
      okText: 'Delete',
      callback: (result) => {
        if (result) {
          let eventsToUpdate = [...myEvents];

          for (const event of mySelectedEvents) {
            if (event.recurring) {
              const origEvent = event.original;
              let exc = origEvent.recurringException || [];
              exc = [...exc, event.start];
              origEvent.recurringException = exc;

              // update the event in the list
              const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
              eventsToUpdate.splice(index, 1, origEvent);
            } else {
              eventsToUpdate = eventsToUpdate.filter((ev) => {
                return ev.id !== event.id;
              });
            }
          }

          setMyEvents(eventsToUpdate);
          refreshSelectedEvents([]);

          toast({
            message: 'Deleted',
          });
        }
        setConfirmOpen(false);
      },
    });
  }, [getSelectedEventTitles, myEvents, mySelectedEvents, refreshSelectedEvents]);

  const updateSelectedEvents = React.useCallback(() => {
    const events = mySelectedEvents.length === 0 ? [mySelectedEvents] : mySelectedEvents;
    let eventsToUpdate = [...myEvents];

    for (const event of events) {
      if (event.recurring) {
        const origEvent = event.original;
        let exc = origEvent.recurringException || [];
        const newEvent = event;

        newEvent.recurring = undefined;
        newEvent.color = 'orange';
        newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start);
        eventsToUpdate = [...eventsToUpdate, newEvent];

        exc = [...exc, event.start];
        origEvent.recurringException = exc;

        // update the event in the list
        const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
        eventsToUpdate.splice(index, 1, origEvent);
      } else {
        const newEv = event;
        newEv.color = 'orange';
        const index = eventsToUpdate.findIndex((x) => x.id === newEv.id);
        eventsToUpdate.splice(index, 1, newEv);
      }
    }

    toast({
      message: "All selected event's color changed to orange",
    });

    setMyEvents(eventsToUpdate);
    refreshSelectedEvents([]);
  }, [myEvents, mySelectedEvents, refreshSelectedEvents]);

  const onEventUpdate = React.useCallback(
    (args) => {
      if (args.isDelete) {
        if (!confirmOpen) {
          deleteSelectedEvents();
        }
        return false;
      }
    },
    [confirmOpen, deleteSelectedEvents],
  );

  const onEventDelete = React.useCallback(() => {
    if (!confirmOpen) {
      deleteSelectedEvents();
      return false;
    }
  }, [confirmOpen, deleteSelectedEvents]);

  const onPageLoading = React.useCallback(
    (args: any) => {
      setTimeout(() => {
        setFirstDay(args.firstDay);
        setLastDay(args.lastDay);
      });
    },
    [firstDay, lastDay],
  );

  const onSelectedEventsChange = React.useCallback(
    (args) => {
      refreshSelectedEvents(args.events);
    },
    [refreshSelectedEvents],
  );

  const onEventRightClick = React.useCallback((args) => {
    args.domEvent.preventDefault();
    setMenuAnchor(args.domEvent.target);
    setTimeout(() => {
      setMenuOpen(true);
    });
  }, []);

  const selectAllEvents = React.useCallback(() => {
    const selectedEvents = calRef.current.getEvents(firstDay, lastDay);
    refreshSelectedEvents(selectedEvents);
    toast({
      message: 'All events selected from view',
    });
  }, [firstDay, lastDay, refreshSelectedEvents]);

  const resetSelection = React.useCallback(() => {
    refreshSelectedEvents([]);
    toast({
      message: 'Selection cleared',
    });
  }, [refreshSelectedEvents]);

  const selectChange = React.useCallback(
    (args) => {
      setSelected(args.value);
      if (args.value === 'update') {
        updateSelectedEvents();
      } else if (args.value === 'delete') {
        deleteSelectedEvents();
      }
    },
    [deleteSelectedEvents, updateSelectedEvents],
  );

  const menuClose = React.useCallback(() => {
    setSelected('');
    setMenuOpen(false);
  }, []);

  return (
    <Page className="md-bulk-operations">
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-9 mbsc-push-sm-3">
            <Eventcalendar
              className="md-bulk-operations-border"
              ref={calRef}
              data={myEvents}
              view={view}
              clickToCreate={true}
              selectMultipleEvents={true}
              selectedEvents={mySelectedEvents}
              onEventDelete={onEventDelete}
              onPageLoading={onPageLoading}
              onSelectedEventsChange={onSelectedEventsChange}
              onEventRightClick={onEventRightClick}
            />
            <Select
              inputProps={{ type: 'hidden' }}
              display="anchored"
              touchUi={false}
              anchor={menuAnchor}
              data={contextMenu}
              value={selectedValue}
              isOpen={menuOpen}
              onChange={selectChange}
              onClose={menuClose}
            />
          </div>
          <div className="mbsc-col-sm-3 mbsc-pull-sm-9">
            <div className="mbsc-form-group">
              <div className="mbsc-button-group-block">
                <Button onClick={selectAllEvents}>Select all this month</Button>
                <Button onClick={resetSelection}>Reset selection</Button>
                <Button onClick={updateSelectedEvents}>Update selected</Button>
              </div>
            </div>
            <div className="mbsc-form-group-title">Currently selected</div>
            <div className="mbsc-padding md-selected-event-list">
              <ul>
                {eventTitles.map((title, index) => {
                  return <li key={index}>{title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
