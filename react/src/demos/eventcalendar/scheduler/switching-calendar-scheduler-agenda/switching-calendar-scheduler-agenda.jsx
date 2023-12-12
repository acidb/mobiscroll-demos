import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions, CalendarNav, SegmentedGroup, SegmentedItem, CalendarPrev, CalendarToday, CalendarNext/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions;
const CalendarNav = mobiscroll.CalendarNav;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarToday = mobiscroll.CalendarToday;
const CalendarNext = mobiscroll.CalendarNext; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [view, setView] = React.useState('month');
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

  const [calView, setCalView] = React.useState({
    calendar: { labels: true },
  });

  const changeView = (event) => {
    let calView;

    switch (event.target.value) {
      case 'year':
        calView = {
          calendar: { type: 'year' },
        };
        break;
      case 'month':
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
        calView = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        calView = {
          schedule: { type: 'day' },
        };
        break;
      case 'agenda':
        calView = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="cal-header-nav" />
        <div className="cal-header-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="year">Year</SegmentedItem>
            <SegmentedItem value="month">Month</SegmentedItem>
            <SegmentedItem value="week">Week</SegmentedItem>
            <SegmentedItem value="day">Day</SegmentedItem>
            <SegmentedItem value="agenda">Agenda</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="cal-header-prev" />
        <CalendarToday className="cal-header-today" />
        <CalendarNext className="cal-header-next" />
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar renderHeader={customWithNavButtons} height={750} view={calView} data={myEvents} cssClass="md-switching-view-cont" />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
