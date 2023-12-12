import React from 'react';
import {
  Eventcalendar,
  getJson,
  setOptions,
  CalendarNav,
  Button,
  CalendarToday,
  SegmentedGroup,
  SegmentedItem,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import './customizing-header.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [view, setView] = React.useState('calendar');
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    calendar: {
      labels: true,
    },
  });

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const changeView = (event: any) => {
    let calendarView = {};
    switch (event.target.value) {
      case 'calendar':
        calendarView = {
          calendar: {
            labels: true,
          },
        };
        break;
      case 'schedule':
        calendarView = {
          schedule: {
            type: 'week',
          },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calendarView);
  };

  const onSelectedDateChange = React.useCallback(
    (event: any) => {
      setCurrentDate(event.date);
    },
    [setCurrentDate],
  );

  const getFirstDayOfWeek = React.useCallback((d: Date, prev: boolean) => {
    const day = d.getDay();
    const diff = d.getDate() - day + (prev ? -7 : 7);
    return new Date(d.setDate(diff));
  }, []);

  const navigatePage = React.useCallback(
    (prev: boolean) => {
      if (view === 'calendar') {
        const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
        setCurrentDate(prevNextPage);
      } else {
        const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
        setCurrentDate(prevNextSunday);
      }
    },
    [view, currentDate, setCurrentDate, getFirstDayOfWeek],
  );

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-custom-header-nav" />
        <div className="md-custom-header-controls">
          <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="md-custom-header-button"></Button>
          <CalendarToday className="md-custom-header-today" />
          <Button
            onClick={() => navigatePage(false)}
            icon="material-arrow-forward"
            variant="flat"
            className="md-custom-header-button"
          ></Button>
        </div>
        <div className="md-custom-header-view">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="calendar" icon="calendar" />
            <SegmentedItem value="schedule" icon="material-list" />
          </SegmentedGroup>
        </div>
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      className="md-custom-header"
      onSelectedDateChange={onSelectedDateChange}
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
    />
  );
};
