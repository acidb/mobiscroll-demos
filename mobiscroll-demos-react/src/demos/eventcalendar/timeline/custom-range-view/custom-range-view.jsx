import {
  Button,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  Eventcalendar,
  formatDate,
  getJson,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './custom-range-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#e20000',
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#76e083',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2',
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#1dab2f',
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#d6d145',
  },
];

function App() {
  const [myEvents, setEvents] = useState([]);
  const [myRefDate, setMyRefDate] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rangeVal, setRangeVal] = useState([]);
  const [buttonText, setButtonText] = useState([]);
  const [calView, setCalView] = useState({
    timeline: {
      type: 'day',
      size: 14,
      eventList: true,
    },
  });

  const startDate = useRef();
  const endDate = useRef();

  const buttonProps = useMemo(() => {
    const content = <span className="mbsc-calendar-title">{buttonText}</span>;

    return {
      children: content,
      className: 'mbsc-calendar-button',
      variant: 'flat',
    };
  }, [buttonText]);

  // returns the number of days between two dates
  const getNrDays = useCallback(
    (start, end) => Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1,
    [],
  );

  // returns the formatted date
  const getFormattedRange = useCallback(
    (start, end) =>
      formatDate('MMM D, YYYY', new Date(start)) +
      (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : ''),
    [getNrDays],
  );

  const onChange = useCallback((args) => {
    const date = args.value;
    setRangeVal(date);
    if (date[0] && date[1]) {
      startDate.current = date[0];
      endDate.current = date[1];
    }
  }, []);

  const onClose = useCallback(() => {
    if (startDate.current && endDate.current) {
      // navigate the calendar
      setCurrentDate(startDate.current);
      // set calendar view
      setMyRefDate(startDate.current);
      setCalView({
        timeline: {
          type: 'day',
          size: getNrDays(startDate.current, endDate.current),
          eventList: true,
        },
      });
    }
    setRangeVal([startDate.current, endDate.current]);
  }, [getNrDays]);

  const handlePageLoaded = useCallback(
    (args) => {
      const sDate = args.firstDay;
      const end = args.lastDay;
      const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
      startDate.current = sDate;
      endDate.current = eDate;
      setTimeout(() => {
        // set button text
        setButtonText(getFormattedRange(sDate, eDate));
        // set range value
        setRangeVal([sDate, eDate]);
        // navigate the calendar
        setCurrentDate(sDate);
      });
    },
    [getFormattedRange],
  );

  const handleSelectedDateChange = useCallback(
    (event) => {
      setCurrentDate(event.date);
    },
    [setCurrentDate],
  );

  const customWithNavButtons = useCallback(
    () => (
      <>
        <div>
          <Datepicker
            select="range"
            display="anchored"
            showOverlay={false}
            touchUi={true}
            buttons={[]}
            inputComponent={Button}
            inputProps={buttonProps}
            onClose={onClose}
            onChange={onChange}
            value={rangeVal}
          />
        </div>
        <div className="md-custom-range-view-controls">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </>
    ),
    [buttonProps, onChange, onClose, rangeVal],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
      resources={myResources}
      onPageLoaded={handlePageLoaded}
      onSelectedDateChange={handleSelectedDateChange}
      refDate={myRefDate}
    />
  );
}

export default App;
