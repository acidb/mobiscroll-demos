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
  const dayView = useMemo(() => ({ agenda: { type: 'day' } }), []);
  const calView = useMemo(() => ['calendar'], []);

  const handleDateChange = useCallback((args) => {
    setSelectedDate(args.value);
  }, []);

  const handleSelectedDateChange = useCallback((args) => {
    setSelectedDate(args.date);
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
    <div className="mbsc-grid mds-external-nav-agenda">
      <div className="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
        <div className="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
          <Datepicker display="inline" value={mySelectedDate} controls={calView} onChange={handleDateChange} />
        </div>
        <div className="mds-external-nav-cal mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
          <Eventcalendar data={myEvents} selectedDate={mySelectedDate} view={dayView} onSelectedDateChange={handleSelectedDateChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
