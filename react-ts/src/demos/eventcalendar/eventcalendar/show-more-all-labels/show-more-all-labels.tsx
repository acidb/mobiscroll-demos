import { Eventcalendar, getJson, toast, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
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

  const { current: allLabelsView } = React.useRef<MbscEventcalendarView>({ calendar: { type: 'month', labels: 'all' } });
  const { current: nrLabelsView } = React.useRef<MbscEventcalendarView>({ calendar: { type: 'month', labels: 3 } });
  const { current: fitLabelsView } = React.useRef<MbscEventcalendarView>({ calendar: { labels: true } });
  const { current: allLabelsWeekView } = React.useRef<MbscEventcalendarView>({ calendar: { type: 'week', labels: 'all' } });
  const { current: nrLabelsWeekView } = React.useRef<MbscEventcalendarView>({ calendar: { type: 'week', labels: 3 } });
  const { current: fitLabelsWeekView } = React.useRef<MbscEventcalendarView>({ calendar: { type: 'week', labels: true } });

  return (
    <div className="mbsc-grid">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">All labels</div>
            <Eventcalendar data={myEvents} view={allLabelsView} />
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Up to 3 labels</div>
            <Eventcalendar data={myEvents} view={nrLabelsView} />
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Labels fitting the row</div>
            <Eventcalendar data={myEvents} view={fitLabelsView} />
          </div>
        </div>
      </div>
      <div className="mbsc-row">
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">All labels</div>
            <Eventcalendar data={myEvents} view={allLabelsWeekView} />
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Up to 3 labels</div>
            <Eventcalendar data={myEvents} view={nrLabelsWeekView} />
          </div>
        </div>
        <div className="mbsc-col-sm-12 mbsc-col-md-4">
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Labels fitting the row</div>
            <Eventcalendar data={myEvents} view={fitLabelsWeekView} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
