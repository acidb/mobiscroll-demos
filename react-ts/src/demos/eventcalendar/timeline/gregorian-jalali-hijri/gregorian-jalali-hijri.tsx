import React from 'react';
import {
  Eventcalendar,
  Page,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  jalaliCalendar,
  hijriCalendar,
  localeFa,
  localeAr /* localeImport */,
} from '@mobiscroll/react';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Ashley',
      color: '#01adff',
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Gregorian calendar</div>
        <Eventcalendar
          // locale
          // theme
          data={myEvents}
          view={view}
          resources={myResources}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Jalali calendar</div>
        <Eventcalendar
          // theme
          data={myEvents}
          view={view}
          resources={myResources}
          calendarSystem={jalaliCalendar}
          locale={localeFa}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Hijri calendar</div>
        <Eventcalendar
          // theme
          data={myEvents}
          view={view}
          resources={myResources}
          calendarSystem={hijriCalendar}
          locale={localeAr}
        />
      </div>
    </Page>
  );
};
export default App;
