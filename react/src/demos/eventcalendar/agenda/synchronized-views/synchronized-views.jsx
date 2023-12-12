import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const getJson = mobiscroll.getJson; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [mySelectedDate, setSelectedDate] = React.useState(new Date());
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const handleDateChange = React.useCallback((event, inst) => {
    setSelectedDate(event.date);
  }, []);

  const monthView = React.useMemo(() => {
    return {
      calendar: { popover: false, labels: false },
    };
  }, []);

  const dayView = React.useMemo(() => {
    return {
      agenda: { type: 'day' },
    };
  }, []);

  return (
    <div className="mbsc-grid md-demo-synchronized-views">
      <div className="mbsc-row mbsc-no-padding">
        <div className="mbsc-col-md-8 mbsc-col-12">
          <Eventcalendar view={monthView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
        <div className="mbsc-col-md-4 mbsc-col-12 md-col-right">
          <Eventcalendar view={dayView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
