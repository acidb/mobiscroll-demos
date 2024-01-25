import { Eventcalendar, Page, getJson, setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

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

  const oneWeekView = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
    }),
    [],
  );

  const twoWeekView = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week', size: 2 },
    }),
    [],
  );

  const threeWeekView = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week', size: 3 },
    }),
    [],
  );

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">One week view</div>
              <Eventcalendar view={oneWeekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Two week view</div>
              <Eventcalendar view={twoWeekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Three week view</div>
              <Eventcalendar view={threeWeekView} data={myEvents} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
