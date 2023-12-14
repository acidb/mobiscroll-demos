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

const App: React.FC = () => {
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
  const [calendarType, setCalendarType] = React.useState<any>('week');
  const calendarHeaderSwitch = () => {
    return (
      <React.Fragment>
        <CalendarNav className="custom-nav" />
        <div className="custom-view">
          <SegmentedGroup value={calendarType} onChange={changeView}>
            <SegmentedItem value="week" icon="material-date-range" />
            <SegmentedItem value="month" icon="material-event-note" />
          </SegmentedGroup>
        </div>
        <div className="custom-buttons">
          <CalendarPrev />
          <CalendarNext />
        </div>
      </React.Fragment>
    );
  };
  const changeView = (event: any) => {
    setCalendarType(event.target.value);
  };
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderCustom} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderToday} />
      <Datepicker
        controls={['calendar']}
        display="inline"
        calendarType={calendarType}
        calendarSize={2}
        renderCalendarHeader={calendarHeaderSwitch}
      />
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} headerText="You selected {value}" />
    </div>
  );
};
export default App;
