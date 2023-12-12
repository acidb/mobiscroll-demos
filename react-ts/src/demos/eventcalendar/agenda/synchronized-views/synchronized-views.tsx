import React from 'react';
import { Eventcalendar, setOptions, getJson, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import './synchronized-views.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [mySelectedDate, setSelectedDate] = React.useState<Date>(new Date());
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

  const handleDateChange = React.useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const monthView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { popover: false },
    };
  }, []);

  const dayView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'day' },
    };
  }, []);

  return (
    <div className="mbsc-grid md-demo-synchronized-views">
      <div className="mbsc-row mbsc-no-padding">
        <div className="mbsc-col-md-8 mbsc-col-12">
          <Eventcalendar view={monthView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
        <div className="mbsc-col-md-4 mbsc-col-12 md-col-right">
          <Eventcalendar view={dayView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
};
