import React from 'react';
//<demo-only>import { Eventcalendar, Page, setOptions, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions;
const getJson = mobiscroll.getJson; //</extra>

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

  const dayView = React.useMemo(() => {
    return {
      agenda: { type: 'day' },
    };
  }, []);

  const weekView = React.useMemo(() => {
    return {
      agenda: { type: 'week' },
    };
  }, []);

  const monthView = React.useMemo(() => {
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
}

ReactDOM.render(<App />, document.getElementById('content'));
