import { Eventcalendar, getJson, hijriCalendar, jalaliCalendar, localeAr, localeEn, localeFa, Page, setOptions } from '@mobiscroll/react';
import { useEffect, useMemo, useState } from 'react';

setOptions({
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
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
              <Eventcalendar data={myEvents} locale={localeEn} view={myView} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Jalali calendar</div>
              <Eventcalendar data={myEvents} calendarSystem={jalaliCalendar} locale={localeFa} view={myView} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Hijri calendar</div>
              <Eventcalendar data={myEvents} calendarSystem={hijriCalendar} locale={localeAr} view={myView} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default App;
