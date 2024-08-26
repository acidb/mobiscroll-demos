import {
  Button,
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './customizing-day-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'month',
        showEmptyDays: true,
      },
    }),
    [],
  );

  const addEvent = useCallback(
    (date: Date) => {
      const newEvent = {
        title: 'Event',
        start: date,
      };

      setEvents([...myEvents, newEvent]);
    },
    [myEvents],
  );

  const renderCustomDay = useCallback(
    (events: MbscCalendarEventData[], date: Date) => (
      <>
        <div className="mbsc-flex-1-1">
          <div>{formatDate('D MMM YYYY', date)}</div>
        </div>
        <Button className="mds-custom-day-header-btn" variant="outline" icon="plus" onClick={() => addEvent(date)}></Button>
      </>
    ),
    [addEvent],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar view={myView} data={myEvents} renderDay={renderCustomDay} />;
};
export default App;
