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

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: { type: 'day' },
    };
  }, []);

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
                view={view}
                calendarSystem={jalaliCalendar}
                locale={localeFa}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Hijri calendar</div>
              <Eventcalendar
                // theme
                data={myEvents}
                view={view}
                calendarSystem={hijriCalendar}
                locale={localeAr}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
