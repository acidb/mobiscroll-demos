import {
  Eventcalendar,
  getJson,
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeFa,
  MbscCalendarEvent,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useState } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Gregorian calendar</div>
              <Eventcalendar data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Jalali calendar</div>
              <Eventcalendar data={myEvents} calendarSystem={jalaliCalendar} locale={localeFa} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Hijri calendar</div>
              <Eventcalendar data={myEvents} calendarSystem={hijriCalendar} locale={localeAr} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
