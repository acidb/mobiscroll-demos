import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';
import './quarter-year-view.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [type, setType] = useState('q4');
  const [selectedDate, setDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const calType = useMemo(() => (type === 'year' ? 'year' : 'month'), [type]);

  const handleTypeChange = useCallback(
    (event) => {
      const tp = event.target.value;
      const year = activeDate.getFullYear();
      let date;
      switch (tp) {
        case 'q1':
          date = new Date(year, 0, 1);
          break;
        case 'q2':
          date = new Date(year, 3, 1);
          break;
        case 'q3':
          date = new Date(year, 6, 1);
          break;
        case 'q4':
          date = new Date(year, 9, 1);
          break;
        case 'year':
          date = new Date(year, activeDate.getMonth(), 1);
          break;
        default:
          break;
      }
      setType(tp);
      setDate(date);
      setActiveDate(date);
    },
    [activeDate],
  );

  const handlePageChange = useCallback(
    (event) => {
      let t = '';
      if (type === 'year') {
        t = 'year';
      } else {
        const month = event.firstDay.getMonth();
        if (month < 3) {
          t = 'q1';
        } else if (month < 6) {
          t = 'q2';
        } else if (month < 9) {
          t = 'q3';
        } else {
          t = 'q4';
        }
      }
      setTimeout(() => {
        setActiveDate(event.firstDay);
        setType(t);
      });
    },
    [type],
  );

  const handleDateChange = useCallback((event) => {
    setDate(event.value);
  }, []);

  const calendarHeaderSwitch = useCallback(() => {
    return (
      <>
        <CalendarNav />
        <div className="quarter-year-header-picker">
          <SegmentedGroup value={type} onChange={handleTypeChange}>
            <SegmentedItem value="q1">Q1</SegmentedItem>
            <SegmentedItem value="q2">Q2</SegmentedItem>
            <SegmentedItem value="q3">Q3</SegmentedItem>
            <SegmentedItem value="q4">Q4</SegmentedItem>
            <SegmentedItem value="year">Year</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    );
  }, [handleTypeChange, type]);

  return (
    <Datepicker
      display="inline"
      calendarType={calType}
      calendarSize={3}
      renderCalendarHeader={calendarHeaderSwitch}
      onPageChange={handlePageChange}
      onChange={handleDateChange}
      showWeekNumbers={true}
      value={selectedDate}
    />
  );
}

export default App;
