import { Eventcalendar, Button, Select, Page, getJson, formatDate, Confirm, Toast, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
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

function App() {
  const [myEvents, setMyEvents] = useState([]);
  const [mySelectedEvents, setSelectedEvents] = useState([]);
  const [eventTitles, setEventTitles] = useState([]);

  const [firstDay, setFirstDay] = useState();
  const [lastDay, setLastDay] = useState();
  const [menuAnchor, setMenuAnchor] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedValue, setSelected] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setToastOpen] = useState(false);
  const calRef = useRef();

  const myView = useMemo(() => ({ timeline: { type: 'week' } }), []);
  const myResources = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Ryan',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#ff4600',
      },
      {
        id: 3,
        name: 'John',
        color: '#ff0101',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Ashley',
        color: '#01adff',
      },
    ];
  }, []);

  const getSelectedEventTitles = useCallback((events) => {
    let titles = [];

    for (const event of events) {
      titles = [...titles, event.title];
    }
    return titles;
  }, []);

  const refreshSelectedEvents = useCallback(
    (events) => {
      setSelectedEvents(events);
      setEventTitles(getSelectedEventTitles(events));
    },
    [getSelectedEventTitles],
  );

  const deleteSelectedEvents = useCallback(() => {
    setConfirmOpen(true);
  }, []);

  const updateSelectedEvents = useCallback(() => {
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
    setToastMessage("All selected event's color changed to orange");
    setToastOpen(true);
    setMyEvents(eventsToUpdate);
    refreshSelectedEvents([]);
  }, [myEvents, mySelectedEvents, refreshSelectedEvents]);

  const handleEventUpdate = useCallback(
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

  const handleEventDelete = useCallback(() => {
    if (!confirmOpen) {
      deleteSelectedEvents();
      return false;
    }
  }, [confirmOpen, deleteSelectedEvents]);

  const handlePageLoading = useCallback(() => {
    setTimeout(() => {
      setFirstDay(firstDay);
      setLastDay(lastDay);
    });
  }, [firstDay, lastDay]);

  const handleSelectedEventsChange = useCallback(
    (args) => {
      refreshSelectedEvents(args.events);
    },
    [refreshSelectedEvents],
  );

  const handleEventRightClick = useCallback((args) => {
    args.domEvent.preventDefault();
    setMenuAnchor(args.domEvent.target);
    setTimeout(() => {
      setMenuOpen(true);
    });
  }, []);

  const selectAllEvents = useCallback(() => {
    const selectedEvents = calRef.current.getEvents(firstDay, lastDay);
    refreshSelectedEvents(selectedEvents);
    setToastMessage('All events selected from view');
    setToastOpen(true);
  }, [firstDay, lastDay, refreshSelectedEvents]);

  const resetSelection = useCallback(() => {
    refreshSelectedEvents([]);
    setToastMessage('Selection cleared');
    setToastOpen(true);
  }, [refreshSelectedEvents]);

  const selectChange = useCallback(
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

  const menuClose = useCallback(() => {
    setSelected('');
    setMenuOpen(false);
  }, []);

  const closeToast = useCallback(() => setToastOpen(false), []);

  const handleConfirmClose = useCallback(
    (result) => {
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

        setToastMessage('Deleted');
        setToastOpen(true);
      }
      setConfirmOpen(false);
    },
    [myEvents, mySelectedEvents, refreshSelectedEvents],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setMyEvents(events);
      },
      'jsonp',
    );
    document.querySelector('.md-bulk-operations').addEventListener('keydown', (ev) => {
      if (!confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
        deleteSelectedEvents();
      }
    });
  }, [confirmOpen, deleteSelectedEvents]);

  return (
    <Page className="md-bulk-operations">
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-9 mbsc-push-sm-3">
            <Eventcalendar
              className="md-bulk-operations-border"
              // drag
              ref={calRef}
              view={myView}
              data={myEvents}
              resources={myResources}
              selectMultipleEvents={true}
              selectedEvents={mySelectedEvents}
              onEventDelete={handleEventDelete}
              onEventUpdate={handleEventUpdate}
              onPageLoading={handlePageLoading}
              onSelectedEventsChange={handleSelectedEventsChange}
              onEventRightClick={handleEventRightClick}
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
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={closeToast} />
      <Confirm
        isOpen={confirmOpen}
        title="Are you sure you want to delete the following events?"
        message={getSelectedEventTitles(mySelectedEvents).join(', ')}
        okText="Delete"
        onClose={handleConfirmClose}
      />
    </Page>
  );
}

export default App;
