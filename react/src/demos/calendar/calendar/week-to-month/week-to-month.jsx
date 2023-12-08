import React from 'react';
import {
  Datepicker,
  CalendarPrev,
  CalendarNav,
  CalendarNext,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import './week-to-month.css';

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
