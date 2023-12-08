import React from 'react';
import { Eventcalendar, Page, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';

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

  const oneWeekView = React.useMemo(() => {
    return {
      calendar: { type: 'week' },
    };
  }, []);

  const twoWeekView = React.useMemo(() => {
    return {
      calendar: { type: 'week', size: 2 },
    };
  }, []);

  const threeWeekView = React.useMemo(() => {
    return {
      calendar: { type: 'week', size: 3 },
    };
  }, []);

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
}

ReactDOM.render(<App />, document.getElementById('content'));
