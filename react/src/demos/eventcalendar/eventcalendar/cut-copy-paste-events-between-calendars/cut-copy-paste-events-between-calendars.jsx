import React from 'react';
import { Eventcalendar, Page, Select, SegmentedGroup, Segmented, toast, snackbar, setOptions /* localeImport */ } from '@mobiscroll/react';
import './cut-copy-paste-events-between-calendars.css';

setOptions({
  // localeJs,
  // themeJs
});

const viewSettings = {
  calendar: { labels: 'all' },
};
const today = new Date();
const menu = [
  { text: 'Copy', value: 'c' },
  { text: 'Cut', value: 'x' },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete' },
];
const disabledMenu = [
  { text: 'Copy', value: 'c', disabled: true },
  { text: 'Cut', value: 'x', disabled: true },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete', disabled: true },
];

function App() {
  const [selectValue, setSelectValue] = React.useState();
  const [menuAnchor, setMenuAnchor] = React.useState();
  const [activeCalendar, setActiveCalendar] = React.useState('first');
  const [cutCalendar, setCutCalendar] = React.useState('first');
  const [toDate, setToDate] = React.useState(new Date());
  const [firstToDate, setFirstToDate] = React.useState(today);
  const [secondToDate, setSecondToDate] = React.useState(today);
  const [originDate, setOriginDate] = React.useState(today);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuData, setMenuData] = React.useState(menu);
  const [firstSelectedEvents, setFirstSelectedEvents] = React.useState([]);
  const [secondSelectedEvents, setSecondSelectedEvents] = React.useState([]);
  const [selectedEvents, setSelectedEvents] = React.useState([]);
  const [moveEvents, setMoveEvents] = React.useState([]);
  const [pastedEvents, setPastedEvents] = React.useState([]);
  const [deletedEvents, setDeletedEvents] = React.useState([]);
  const dummyRef = React.useRef();
  const isMenuOpen = React.useRef();
  const action = React.useRef();

  const [firstEvents, setFirstEvents] = React.useState([
    {
      start: 'dyndatetime(y,m,2,9)',
      end: 'dyndatetime(y,m,6,18)',
      title: 'Business of Software Conference',
      color: '#ff6d42',
    },
    {
      start: 'dyndatetime(y,m,10,7)',
      end: 'dyndatetime(y,m,10,8)',
      title: 'Green box to post office',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,15,9,30)',
      end: 'dyndatetime(y,m,15,10,30)',
      title: 'Product team mtg.',
      color: '#f67944',
    },
    {
      start: 'dyndatetime(y,m,23,11,0)',
      end: 'dyndatetime(y,m,23,11,45)',
      title: 'Stakeholder mtg.',
      color: '#a144f6',
    },
    {
      start: 'dyndatetime(y,m,28,13,0)',
      end: 'dyndatetime(y,m,28,13,45)',
      title: "Lunch @ Butcher's",
      color: '#00aabb',
    },
  ]);

  const [secondEvents, setSecondEvents] = React.useState([
    {
      start: 'dyndatetime(y,m,4,8,45)',
      end: 'dyndatetime(y,m,4,10)',
      title: 'Quick mtg. with Martin',
      color: '#de3d83',
    },
    {
      start: 'dyndatetime(y,m,8,15,0)',
      end: 'dyndatetime(y,m,8,16,0)',
      title: 'General orientation',
      color: '#a71111',
    },
    {
      start: 'dyndatetime(y,m,10,13)',
      end: 'dyndatetime(y,m,14,21)',
      title: 'Friends binge marathon',
      color: '#7bde83',
    },
    {
      start: 'dyndatetime(y,m,23,8)',
      end: 'dyndatetime(y,m,27,9)',
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ]);

  const onPageLoading = React.useCallback(
    (args) => {
      setTimeout(() => {
        if (activeCalendar === 'first') {
          setFirstToDate(args.month);
        } else {
          setSecondToDate(args.month);
        }
        setToDate(args.month);
      });
    },
    [activeCalendar],
  );

  const onCellRightClick = React.useCallback(
    (args) => {
      if (!isMenuOpen.current) {
        args.domEvent.preventDefault();
        setMenuData(disabledMenu);
        setMenuAnchor(args.domEvent.target);
        setTimeout(() => {
          setMenuOpen(true);
        });
      }
    },
    [isMenuOpen],
  );

  const onEventRightClick = React.useCallback(
    (args) => {
      const activeEvents = activeCalendar === 'first' ? firstEvents : secondEvents;
      if (activeEvents.length <= 1) {
        if (activeCalendar === 'first') {
          setFirstEvents([args.event]);
        } else {
          setSecondEvents([args.event]);
        }
      }
      if (activeCalendar === 'first' && firstSelectedEvents.length <= 1) {
        setFirstSelectedEvents([args.event]);
      }
      if (activeCalendar === 'second' && secondSelectedEvents.length <= 1) {
        setSecondSelectedEvents([args.event]);
      }
      args.domEvent.preventDefault();
      setMenuData(menu);
      setMenuAnchor(args.domEvent.target);
      setTimeout(() => {
        setMenuOpen(true);
      });
      isMenuOpen.current = true;
    },
    [activeCalendar, firstEvents, secondEvents, firstSelectedEvents, secondSelectedEvents],
  );

  const onEventDeleted = React.useCallback(
    (args) => {
      setDeletedEvents(args.events);
      action.current = 'delete';
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              const activeEvents = activeCalendar === 'first' ? firstEvents : secondEvents;
              let eventsToUpdate = [...activeEvents];
              for (const event of deletedEvents) {
                eventsToUpdate = eventsToUpdate.filter((ev) => {
                  return ev.id !== event.id;
                });
              }

              if (activeCalendar === 'first') {
                setFirstEvents(eventsToUpdate);
              } else {
                setSecondEvents(eventsToUpdate);
              }

              setDeletedEvents([]);
            },
            text: 'Undo',
          },
          duration: 3000,
          message: 'Event' + (deletedEvents.length === 1 ? '' : 's') + ' deleted',
        });
      });
      dummyRef.current.focus();
    },
    [activeCalendar, deletedEvents, firstEvents, secondEvents],
  );

  const getActiveEvents = React.useCallback(() => {
    return activeCalendar === 'first' ? firstEvents : secondEvents;
  }, [activeCalendar, firstEvents, secondEvents]);

  const getActiveSelectedEvents = React.useCallback(() => {
    return activeCalendar === 'first' ? firstSelectedEvents : secondSelectedEvents;
  }, [activeCalendar, firstSelectedEvents, secondSelectedEvents]);

  const monthDiff = React.useCallback((d1, d2) => {
    return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
  }, []);

  const pasteEvents = React.useCallback(() => {
    const activeEvents = getActiveEvents();
    const activeSelectedEvents = selectedEvents;
    let eventsToUpdate = [...activeEvents];
    if (activeSelectedEvents.length > 0) {
      for (const event of activeSelectedEvents) {
        const newEvent = Object.assign({}, event);
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);
        const diff = Math.abs(endDate - startDate);

        newEvent.start = startDate.setMonth(startDate.getMonth() - monthDiff(toDate, originDate));
        newEvent.end = new Date(startDate.getTime() + diff);

        delete newEvent.id;

        eventsToUpdate = [...eventsToUpdate, newEvent];

        setPastedEvents([...pastedEvents, newEvent]);
      }

      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }

      if (action.current === 'cut') {
        let cutEvs = activeCalendar === cutCalendar ? eventsToUpdate : cutCalendar === 'first' ? firstEvents : secondEvents;
        setMoveEvents([...selectedEvents]);
        for (const event of selectedEvents) {
          cutEvs = cutEvs.filter((ev) => {
            return ev.id !== event.id;
          });
        }
        if (cutCalendar === 'first') {
          setFirstEvents(cutEvs);
        } else {
          setSecondEvents(cutEvs);
        }

        setTimeout(() => {
          snackbar({
            button: {
              action: () => {
                let revertEvs = cutCalendar === 'first' ? firstEvents : secondEvents;
                for (const event of moveEvents) {
                  revertEvs = [...revertEvs, event];
                }
                if (cutCalendar === 'first') {
                  setFirstEvents(revertEvs);
                } else {
                  setSecondEvents(revertEvs);
                }

                let cutEvs = getActiveEvents();
                for (const event of pastedEvents) {
                  cutEvs = cutEvs.filter((ev) => {
                    return ev.id !== event.id;
                  });
                }
                if (activeCalendar === 'first') {
                  setFirstEvents(cutEvs);
                } else {
                  setSecondEvents(cutEvs);
                }

                toast({
                  message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + ' reverted',
                });
              },
              text: 'Undo',
            },
            duration: 3000,
            message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + ' pasted',
          });
        });
        dummyRef.current.focus();
      } else {
        toast({
          message: 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' pasted',
        });
      }
      if (action.current !== 'copy') {
        setSelectedEvents([]);
      }
    }
  }, [
    action,
    activeCalendar,
    cutCalendar,
    firstEvents,
    getActiveEvents,
    monthDiff,
    moveEvents,
    originDate,
    pastedEvents,
    secondEvents,
    selectedEvents,
    toDate,
  ]);

  const deleteEvents = React.useCallback(() => {
    const activeEvents = getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    action.current = 'delete';
    const activeSelectedEvents = getActiveSelectedEvents();

    if (activeSelectedEvents.length > 0) {
      setDeletedEvents(activeSelectedEvents);

      for (const event of activeSelectedEvents) {
        eventsToUpdate = eventsToUpdate.filter((ev) => {
          return ev.id !== event.id;
        });
      }

      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              for (const event of activeSelectedEvents) {
                eventsToUpdate = [...eventsToUpdate, event];
              }
              if (activeCalendar === 'first') {
                setFirstEvents(eventsToUpdate);
              } else {
                setSecondEvents(eventsToUpdate);
              }
              setDeletedEvents([]);
            },
            text: 'Undo',
          },
          duration: 3000,
          message: 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' deleted',
        });
      });
      dummyRef.current.focus();
    }
  }, [activeCalendar, getActiveEvents, getActiveSelectedEvents]);

  const activateAction = React.useCallback(
    (type) => {
      if (selectedEvents.length > 0) {
        const act = type == 'copy' ? ' copied' : ' cut';
        setOriginDate(toDate);
        toast({
          message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + act,
        });
      }
    },
    [selectedEvents, toDate],
  );

  const copyEvents = React.useCallback(() => {
    if (activeCalendar === 'first') {
      if (firstSelectedEvents.length > 0) {
        action.current = 'copy';
        setSelectedEvents(firstSelectedEvents);
        activateAction('copy');
      }
    } else {
      if (secondSelectedEvents.length > 0) {
        action.current = 'copy';
        setSelectedEvents(secondSelectedEvents);
        activateAction('copy');
      }
    }
  }, [activeCalendar, firstSelectedEvents, secondSelectedEvents]);

  const cutEvents = React.useCallback(() => {
    if (activeCalendar === 'first') {
      if (firstSelectedEvents.length > 0) {
        action.current = 'cut';
        setSelectedEvents(firstSelectedEvents);
        setCutCalendar(activeCalendar);
        activateAction('cut');
        setDeletedEvents([]);
      }
    } else {
      if (secondSelectedEvents.length > 0) {
        action.current = 'cut';
        setSelectedEvents(secondSelectedEvents);
        setCutCalendar(activeCalendar);
        activateAction('cut');
        setDeletedEvents([]);
      }
    }
  }, [activeCalendar, firstSelectedEvents, secondSelectedEvents, selectedEvents.length, toDate]);

  const undoEvents = React.useCallback(() => {
    const activeEvents = getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    if (action.current === 'delete') {
      for (const event of deletedEvents) {
        eventsToUpdate = [...eventsToUpdate, event];
      }
      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }
      setDeletedEvents([]);
    } else if (action.current === 'cut') {
      let revertEvs = cutCalendar === 'first' ? firstEvents : secondEvents;
      for (const event of moveEvents) {
        revertEvs = [...revertEvs, event];
      }
      if (cutCalendar === 'first') {
        setFirstEvents(revertEvs);
      } else {
        setSecondEvents(revertEvs);
      }

      let cutEvs = getActiveEvents();
      for (const event of pastedEvents) {
        cutEvs = cutEvs.filter((ev) => {
          return ev.id !== event.id;
        });
      }
      if (activeCalendar === 'first') {
        setFirstEvents(cutEvs);
      } else {
        setSecondEvents(cutEvs);
      }

      setMoveEvents([]);
      setPastedEvents([]);
    }
  }, [action, activeCalendar, cutCalendar, deletedEvents, firstEvents, getActiveEvents, moveEvents, pastedEvents, secondEvents]);

  const detectAction = React.useCallback(
    (key) => {
      switch (key) {
        case 'delete': // delete
          deleteEvents();
          break;
        case 'c': // copy
          copyEvents();
          break;
        case 'x': // cut
          cutEvents();
          break;
        case 'z': // undo
          undoEvents();
          break;
        case 'v': // paste
          pasteEvents();
          break;
        default:
      }
    },
    [copyEvents, cutEvents, deleteEvents, pasteEvents, undoEvents],
  );

  const onFirstSelectedEventsChange = React.useCallback((args) => {
    setFirstSelectedEvents(args.events);
  }, []);

  const onSecondSelectedEventsChange = React.useCallback((args) => {
    setSecondSelectedEvents(args.events);
  }, []);

  const onSelectChange = React.useCallback(
    (args) => {
      setSelectValue(args.value);
      detectAction(args.value);
    },
    [detectAction],
  );

  const onSelectClose = React.useCallback((ev) => {
    isMenuOpen.current = false;
    setMenuOpen(false);
    // clear selection
    setSelectValue(null);
  }, []);

  const switchCalendar = React.useCallback(
    (ev) => {
      setActiveCalendar(ev.target.value);
      if (ev.target.value === 'first') {
        setToDate(firstToDate);
        setSecondSelectedEvents([]);
      } else {
        setToDate(secondToDate);
        setFirstSelectedEvents([]);
      }
    },
    [firstToDate, secondToDate, setFirstSelectedEvents, setSecondSelectedEvents],
  );

  const handleKeyDown = (ev) => {
    if (ev.ctrlKey || ev.metaKey) {
      detectAction(ev.key);
    }
    if (ev.key === 'Delete') {
      detectAction('delete');
    }
  };

  return (
    <Page>
      <div onKeyDown={handleKeyDown}>
        <div className="mbsc-flex-col md-copy-cut-paste">
          <div className="mbsc-flex-none">
            <SegmentedGroup name="controlled" onChange={switchCalendar}>
              <Segmented value="first" checked={activeCalendar === 'first'}>
                First calendar
              </Segmented>
              <Segmented value="second" checked={activeCalendar === 'second'}>
                Second calendar
              </Segmented>
            </SegmentedGroup>
          </div>
          <div className="mbsc-flex-col mbsc-flex-1-1">
            <div id="demo-copy-cut-paste-first-cont" className="mbsc-flex-1-1 md-copy-cut-paste-cont">
              <Eventcalendar
                className={activeCalendar === 'first' ? '' : 'md-hide-calendar'}
                view={viewSettings}
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                selectMultipleEvents={true}
                data={firstEvents}
                selectedEvents={firstSelectedEvents}
                onSelectedEventsChange={onFirstSelectedEventsChange}
                onPageLoading={onPageLoading}
                onCellRightClick={onCellRightClick}
                onEventRightClick={onEventRightClick}
                onEventDeleted={onEventDeleted}
              />
            </div>
            <div id="demo-copy-cut-paste-second-cont" className="mbsc-flex-1-1 md-copy-cut-paste-cont">
              <Eventcalendar
                className={activeCalendar === 'second' ? '' : 'md-hide-calendar'}
                view={viewSettings}
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                selectMultipleEvents={true}
                data={secondEvents}
                selectedEvents={secondSelectedEvents}
                onSelectedEventsChange={onSecondSelectedEventsChange}
                onPageLoading={onPageLoading}
                onCellRightClick={onCellRightClick}
                onEventRightClick={onEventRightClick}
                onEventDeleted={onEventDeleted}
              />
            </div>
            <Select
              touchUi={false}
              display="anchored"
              anchor={menuAnchor}
              isOpen={menuOpen}
              buttons={[]}
              data={menuData}
              value={selectValue}
              onChange={onSelectChange}
              onClose={onSelectClose}
              inputProps={{ type: 'hidden' }}
            />
          </div>
        </div>
        <div tabIndex={-1} ref={dummyRef}></div>
      </div>
    </Page>
  );
}

export default App;
