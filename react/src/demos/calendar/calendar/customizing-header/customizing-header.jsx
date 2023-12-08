import React from 'react';
import {
  Datepicker,
  CalendarPrev,
  CalendarNav,
  CalendarNext,
  CalendarToday,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import './customizing-header.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const calendarHeaderCustom = () => {
    return (
      <React.Fragment>
        <CalendarPrev className="custom-prev" />
        <CalendarNav className="custom-nav" />
        <CalendarNext className="custom-next" />
      </React.Fragment>
    );
  };
  const calendarHeaderToday = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="custom-buttons">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </React.Fragment>
    );
  };
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
    <div>
      <Datepicker controls={['calendar']} display="inline" calendarType="week" weeks={2} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderCustom} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderToday} />
      <Datepicker
        controls={['calendar']}
        display="inline"
        calendarType={calendarType}
        weeks={2}
        renderCalendarHeader={calendarHeaderSwitch}
      />
      <Datepicker controls={['calendar']} display="inline" calendarType="week" weeks={2} headerText="You selected {value}" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
