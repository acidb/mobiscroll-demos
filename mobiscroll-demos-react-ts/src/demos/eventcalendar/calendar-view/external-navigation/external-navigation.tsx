import {
  Datepicker,
  // Button,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerPageLoadedEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  setOptions,
} from '@mobiscroll/react';

import { useCallback, useEffect, useMemo, useState } from 'react';
import './external-navigation.css';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

function App() {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>();
  const monthView = useMemo<MbscEventcalendarView>(() => ({ calendar: { type: 'week' }, agenda: { type: 'day' } }), []);

  const handleDateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    if (args.value) {
      setSelectedDate(args.value);
    }
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(args.date);
  }, []);

  const handlePageChange = useCallback((args: MbscDatepickerPageLoadedEvent) => {
    if (args.month) {
      setSelectedDate(args.month);
    }
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div className="mbsc-grid mds-external-nav-calendar">
      <div className="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
        <div className="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
          <Datepicker value={mySelectedDate} display="inline" onChange={handleDateChange} onPageLoaded={handlePageChange} />
        </div>
        <div className="mds-external-nav-ec mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
          <Eventcalendar data={myEvents} selectedDate={mySelectedDate} view={monthView} onSelectedDateChange={handleSelectedDateChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
