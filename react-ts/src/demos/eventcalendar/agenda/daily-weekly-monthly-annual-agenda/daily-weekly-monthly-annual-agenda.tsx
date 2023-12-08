import React from 'react';
import { Eventcalendar, Page, getJson, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/react';

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

  const dayView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'day' },
    };
  }, []);

  const weekView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'week' },
    };
  }, []);

  const monthView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: { type: 'month' },
    };
  }, []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Daily schedule</div>
              <Eventcalendar view={dayView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Weekly schedule</div>
              <Eventcalendar view={weekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Monthly schedule</div>
              <Eventcalendar view={monthView} data={myEvents} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
