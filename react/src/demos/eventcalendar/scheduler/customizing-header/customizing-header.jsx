import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions, CalendarNav, Button, CalendarToday, SegmentedGroup, SegmentedItem/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions;
const CalendarNav = mobiscroll.CalendarNav;
const Button = mobiscroll.Button;
const CalendarToday = mobiscroll.CalendarToday;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [view, setView] = React.useState('schedule');
  const [myEvents, setEvents] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [calView, setCalView] = React.useState({
    schedule: {
      type: 'week',
    },
  });

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const changeView = React.useCallback(
    (event) => {
      let calendarView;
      switch (event.target.value) {
        case 'calendar':
          calendarView = {
            calendar: {
              labels: true,
            },
          };
          break;
        case 'schedule':
          calendarView = {
            schedule: {
              type: 'week',
            },
          };
          break;
      }
      setView(event.target.value);
      setCalView(calendarView);
    },
    [setView, setCalView],
  );

  const onSelectedDateChange = React.useCallback(
    (event) => {
      setCurrentDate(event.date);
    },
    [setCurrentDate],
  );

  const getFirstDayOfWeek = React.useCallback((d, prev) => {
    const day = d.getDay();
    const diff = d.getDate() - day + (prev ? -7 : 7);
    return new Date(d.setDate(diff));
  }, []);

  const navigatePage = React.useCallback(
    (prev) => {
      if (view == 'calendar') {
        const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
        setCurrentDate(prevNextPage);
      } else {
        const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
        setCurrentDate(prevNextSunday);
      }
    },
    [view, currentDate, setCurrentDate, getFirstDayOfWeek],
  );

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-custom-header-nav" />
        <div className="md-custom-header-controls">
          <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="md-custom-header-button"></Button>
          <CalendarToday className="md-custom-header-today" />
          <Button
            onClick={() => navigatePage(false)}
            icon="material-arrow-forward"
            variant="flat"
            className="md-custom-header-button"
          ></Button>
        </div>
        <div className="md-custom-header-view">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="schedule" icon="material-list" />
            <SegmentedItem value="calendar" icon="calendar" />
          </SegmentedGroup>
        </div>
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      className="md-custom-header"
      onSelectedDateChange={onSelectedDateChange}
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
