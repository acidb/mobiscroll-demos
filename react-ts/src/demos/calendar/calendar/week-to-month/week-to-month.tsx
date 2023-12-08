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

const App: React.FC = () => {
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
    <Datepicker
      controls={['calendar']}
      display="inline"
      calendarType={calendarType}
      calendarSize={1}
      renderCalendarHeader={calendarHeaderSwitch}
    />
  );
};
