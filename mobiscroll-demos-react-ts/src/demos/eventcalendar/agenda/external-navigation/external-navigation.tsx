import {
  Datepicker,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerControl,
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
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>(new Date());
  const dayView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'day' } }), []);
  const calView = useMemo<MbscDatepickerControl[]>(() => ['calendar'], []);

  const handleDateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    if (args.value) {
      setSelectedDate(args.value);
    }
  }, []);

  const handlePageChange = useCallback((args: MbscDatepickerPageLoadedEvent) => {
    if (args.month) {
      setSelectedDate(args.month);
    }
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(args.date);
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
    <div className="mbsc-grid mds-external-nav-agenda">
      <div className="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
        <div className="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
          <Datepicker
            display="inline"
            value={mySelectedDate}
            controls={calView}
            onChange={handleDateChange}
            onPageLoaded={handlePageChange}
          />
        </div>
        <div className="mds-external-nav-ec mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
          <Eventcalendar data={myEvents} selectedDate={mySelectedDate} view={dayView} onSelectedDateChange={handleSelectedDateChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
