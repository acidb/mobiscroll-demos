import { Datepicker, Eventcalendar, getJson, setOptions } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './external-navigation.css';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [mySelectedDate, setSelectedDate] = useState(new Date());
  const monthView = useMemo(() => ({ calendar: { type: 'week' }, agenda: { type: 'day' } }), []);

  const handleDateChange = useCallback((args) => {
    setSelectedDate(args.value);
  }, []);

  const handleSelectedDateChange = useCallback((args) => {
    setSelectedDate(args.date);
  }, []);

  const handlePageChange = useCallback((args) => {
    setSelectedDate(args.month);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div className="mds-external-nav-calendar mbsc-flex">
      <div className="mds-external-nav-dp">
        <Datepicker value={mySelectedDate} display="inline" onChange={handleDateChange} onPageLoaded={handlePageChange} />
      </div>
      <div className="mds-external-nav-ec mbsc-flex-1-1">
        <Eventcalendar data={myEvents} selectedDate={mySelectedDate} view={monthView} onSelectedDateChange={handleSelectedDateChange} />
      </div>
    </div>
  );
}

export default App;
