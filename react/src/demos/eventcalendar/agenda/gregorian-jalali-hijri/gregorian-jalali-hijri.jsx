import React from 'react';
//<demo-only>import { Eventcalendar, Page, getJson, jalaliCalendar, hijriCalendar, localeFa, localeAr/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Page = mobiscroll.Page;
const getJson = mobiscroll.getJson;
const jalaliCalendar = mobiscroll.jalaliCalendar;
const hijriCalendar = mobiscroll.hijriCalendar;
const localeFa = mobiscroll.locale.fa;
const localeAr = mobiscroll.locale.fa; //</extra>

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: {
        type: 'week',
      },
      agenda: {
        type: 'day',
      },
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
}

ReactDOM.render(<App />, document.getElementById('content'));
