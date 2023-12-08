import React from 'react';
import {
  Eventcalendar,
  getJson,
  setOptions,
  CalendarPrev,
  CalendarNext,
  CalendarToday,
  Button,
  Datepicker,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import './custom-range-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [refDate, setRefDate] = React.useState<any>();
  const [currentDate, setCurrentDate] = React.useState<any>(new Date());
  const [rangeVal, setRangeVal] = React.useState<any>([]);
  const [buttonText, setButtonText] = React.useState<string>();
  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    schedule: {
      type: 'day',
      size: 14,
    },
  });

  const startDate: any = React.useRef();
  const endDate: any = React.useRef();

  // returns the number of days between two dates
  const getNrDays = React.useCallback((start, end) => {
    return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1;
  }, []);

  // returns the formatted date
  const getFormattedRange = React.useCallback(
    (start, end) => {
      return (
        formatDate('MMM D, YYYY', new Date(start)) +
        (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : '')
      );
    },
    [getNrDays],
  );

  const onChange = React.useCallback((args) => {
    const date = args.value;
    setRangeVal(date);
    if (date[0] && date[1]) {
      startDate.current = date[0];
      endDate.current = date[1];
    }
  }, []);

  const onClose = React.useCallback(() => {
    if (startDate.current && endDate.current) {
      // navigate the calendar
      setCurrentDate(startDate.current);
      // set calendar view
      setRefDate(startDate.current);
      setCalView({
        schedule: {
          type: 'day',
          size: getNrDays(startDate.current, endDate.current),
        },
      });
    }
    setRangeVal([startDate.current, endDate.current]);
  }, [getNrDays]);

  const onPageLoading = React.useCallback(
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

  const buttonProps = React.useMemo(() => {
    const content = <span className="mbsc-calendar-title">{buttonText}</span>;
    return {
      children: content,
      className: 'mbsc-calendar-button',
      variant: 'flat',
    };
  }, [buttonText]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
      onPageLoading={onPageLoading}
      refDate={refDate}
    />
  );
};
