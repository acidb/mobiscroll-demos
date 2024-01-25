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
import React from 'react';

const App: React.FC = () => {
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

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Gregorian calendar</div>
              <Eventcalendar
                // locale
                // theme
                data={myEvents}
                view={view}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Jalali calendar</div>
              <Eventcalendar
                // theme
                data={myEvents}
                calendarSystem={jalaliCalendar}
                locale={localeFa}
                view={view}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Hijri calendar</div>
              <Eventcalendar
                // theme
                data={myEvents}
                calendarSystem={hijriCalendar}
                locale={localeAr}
                view={view}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
