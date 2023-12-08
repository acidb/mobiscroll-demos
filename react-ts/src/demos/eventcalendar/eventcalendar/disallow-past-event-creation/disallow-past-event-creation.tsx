import React from 'react';
import { Eventcalendar, getJson, setOptions, toast, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import './disallow-past-event-creation.css';

setOptions({
  // localeJs,
  // themeJs
});

const today = new Date();

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const myInvalid = [
    {
      recurring: {
        repeat: 'daily',
        until: today,
      },
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
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

  const { current: view } = React.useRef<MbscEventcalendarView>({ calendar: { labels: true } });

  const onEventCreateFailed = React.useCallback((args: any) => {
    if (!args.originEvent) {
      toast({
        message: "Can't create event in the past",
      });
    }
  }, []);

  const onEventUpdateFailed = React.useCallback((args: any) => {
    if (!args.oldEventOccurrence) {
      toast({
        message: "Can't move event in the past",
      });
    }
  }, []);

  const onEventCreate = React.useCallback((args: any) => {
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

  const onEventUpdate = React.useCallback((args: any) => {
    const oldEvent = args.oldEvent;
    const start = oldEvent && oldEvent.start ? oldEvent.start : null;
    const oldEventOccurrence = args.oldEventOccurrence;
    const occurrenceStart = oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null;

    // handle recurring events
    if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
      return false;
    }
  }, []);

  return (
    <Eventcalendar
      className="md-disallow-past-event-creation"
      view={view}
      data={myEvents}
      invalid={myInvalid}
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      onEventCreateFailed={onEventCreateFailed}
      onEventUpdateFailed={onEventUpdateFailed}
      onEventCreate={onEventCreate}
      onEventUpdate={onEventUpdate}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('content'));
