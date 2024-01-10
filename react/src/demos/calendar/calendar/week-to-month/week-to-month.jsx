import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Datepicker,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useState } from 'react';
import './week-to-month.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [calendarType, setCalendarType] = useState('week');

  const handleChange = useCallback((event) => {
    setCalendarType(event.target.value);
  }, []);

  const calendarHeaderSwitch = useCallback(() => {
    return (
      <>
        <CalendarNav className="custom-view-nav" />
        <div className="custom-view">
          <SegmentedGroup value={calendarType} onChange={handleChange}>
            <SegmentedItem value="week" icon="material-date-range" />
            <SegmentedItem value="month" icon="material-event-note" />
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </>
    );
  }, [calendarType, handleChange]);

  return (
    <div>
      <Datepicker display="inline" calendarType={calendarType} calendarSize={1} renderCalendarHeader={calendarHeaderSwitch} />
    </div>
  );
}

export default App;
