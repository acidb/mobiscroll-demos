import { Eventcalendar, getJson, setOptions, toast /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useCallback, useEffect } from 'react';
import './disallow-past-event-creation.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

function App() {
  const [myEvents, setEvents] = useState([]);
  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'daily',
          until: yesterday,
        },
      },
      {
        start: yesterday,
        end: today,
      },
    ],
    [],
  );
  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: 'Resource A',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#1dab2f',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#d6d145',
      },
    ],
    [],
  );

  const myView = useMemo(() => ({ timeline: { type: 'month' } }), []);

  const handleEventCreateFailed = useCallback((args) => {
    if (!args.originEvent) {
      toast({
        message: "Can't create event in the past",
      });
    }
  }, []);

  const handleEventUpdateFailed = useCallback((args) => {
    if (!args.oldEventOccurrence) {
      toast({
        message: "Can't move event in the past",
      });
    }
  }, []);

  const handleEventCreate = useCallback((args) => {
    const oldEvent = args.originEvent;
    const start = oldEvent && oldEvent.start ? oldEvent.start : null;

    // handle recurring events
    if (start && start < today) {
      toast({
        message: "Can't move past event",
      });
      return false;
    }
  }, []);

  const handleEventUpdate = useCallback((args) => {
    const oldEvent = args.oldEvent;
    const start = oldEvent && oldEvent.start ? oldEvent.start : null;
    const oldEventOccurrence = args.oldEventOccurrence;
    const occurrenceStart = oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null;

    // handle recurring events
    if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
      return false;
    }
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        for (const event of events) {
          // convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;
          // mark past events as fixed by setting the event.editable property to false
          event.editable = event.start && today < event.start;
        }
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      className="md-disallow-past-event-creation"
      view={myView}
      data={myEvents}
      resources={myResources}
      invalid={myInvalid}
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      onEventCreateFailed={handleEventCreateFailed}
      onEventUpdateFailed={handleEventUpdateFailed}
      onEventCreate={handleEventCreate}
      onEventUpdate={handleEventUpdate}
    />
  );
}

export default App;
