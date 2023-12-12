import React from 'react';
//<demo-only>import { Eventcalendar, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, SegmentedGroup, SegmentedItem, getJson, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarNext = mobiscroll.CalendarNext;
const CalendarToday = mobiscroll.CalendarToday;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [calendarType, setCalendarType] = React.useState('quarter');
  const [myEvents, setEvents] = React.useState([]);

  const view = React.useMemo(
    () =>
      calendarType === 'quarter'
        ? {
            calendar: {
              type: 'month',
              size: 3,
            },
          }
        : {
            calendar: {
              type: 'year',
            },
          },
    [calendarType],
  );

  const calHeight = React.useMemo(() => (calendarType === 'quarter' ? 'auto' : 'height:100%'), [calendarType]);

  const calendarHeaderSwitch = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="quarter-year-header-picker">
          <SegmentedGroup value={calendarType} onChange={changeView}>
            <SegmentedItem value="quarter">Quarter</SegmentedItem>
            <SegmentedItem value="year">Year</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </React.Fragment>
    );
  };

  const changeView = (event) => {
    setCalendarType(event.target.value);
  };

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar data={myEvents} view={view} height={calHeight} renderHeader={calendarHeaderSwitch} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
