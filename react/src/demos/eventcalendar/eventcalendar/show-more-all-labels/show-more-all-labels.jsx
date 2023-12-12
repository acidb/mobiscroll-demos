import React from 'react';
//<demo-only>import { Eventcalendar, getJson, toast, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions;
const toast = mobiscroll.toast; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

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

  const { current: allLabelsView } = React.useRef({ calendar: { type: 'month', labels: 'all' } });
  const { current: nrLabelsView } = React.useRef({ calendar: { type: 'month', labels: 3 } });
  const { current: fitLabelsView } = React.useRef({ calendar: { labels: true } });
  const { current: allLabelsWeekView } = React.useRef({ calendar: { type: 'week', labels: 'all' } });
  const { current: nrLabelsWeekView } = React.useRef({ calendar: { type: 'week', labels: 3 } });
  const { current: fitLabelsWeekView } = React.useRef({ calendar: { type: 'week', labels: true } });

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
}

ReactDOM.render(<App />, document.getElementById('content'));
