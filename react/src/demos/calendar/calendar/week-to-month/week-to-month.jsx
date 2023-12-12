import React from 'react';
//<demo-only>import { Datepicker, CalendarPrev, CalendarNav, CalendarNext, SegmentedGroup, SegmentedItem, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarNext = mobiscroll.CalendarNext;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [calendarType, setCalendarType] = React.useState('week');
  const calendarHeaderSwitch = () => {
    return (
      <React.Fragment>
        <CalendarNav className="custom-view-nav" />
        <div className="custom-view">
          <SegmentedGroup value={calendarType} onChange={changeView}>
            <SegmentedItem value="week" icon="material-date-range" />
            <SegmentedItem value="month" icon="material-event-note" />
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </React.Fragment>
    );
  };
  const changeView = (event) => {
    setCalendarType(event.target.value);
  };
  return (
    <Datepicker
      controls={['calendar']}
      display="inline"
      calendarType={calendarType}
      calendarSize={1}
      renderCalendarHeader={calendarHeaderSwitch}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
