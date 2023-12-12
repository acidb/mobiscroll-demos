import React from 'react';
import {
  Eventcalendar,
  getJson,
  setOptions,
  MbscCalendarEvent,
  MbscEventcalendarView,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarNext /* localeImport */,
} from '@mobiscroll/react';
import './switching-day-week-month-view.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [view, setView] = React.useState('month');
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    calendar: { type: 'month' },
    agenda: { type: 'month' },
  });

  const changeView = (event: any) => {
    let view = {};
    switch (event.target.value) {
      case 'month':
        view = {
          calendar: { type: 'month' },
          agenda: { type: 'month' },
        };
        break;
      case 'week':
        view = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
      case 'day':
        view = {
          agenda: { type: 'day' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(view);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="cal-header-nav" />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="month" icon="material-event-note" />
            <SegmentedItem value="week" icon="material-date-range" />
            <SegmentedItem value="day" icon="material-view-day" />
          </SegmentedGroup>
        </div>
        <CalendarPrev className="cal-header-prev" />
        <CalendarNext className="cal-header-next" />
      </React.Fragment>
    );
  };

  return (
    <div className="md-switching-view-cont">
      <Eventcalendar renderHeader={customWithNavButtons} view={calView} data={myEvents} />
    </div>
  );
};
