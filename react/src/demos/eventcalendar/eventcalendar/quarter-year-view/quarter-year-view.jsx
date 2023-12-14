import React from 'react';
import {
  Eventcalendar,
  CalendarPrev,
  CalendarNav,
  CalendarNext,
  CalendarToday,
  SegmentedGroup,
  SegmentedItem,
  getJson,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import './quarter-year-view.css';

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

export default App;
