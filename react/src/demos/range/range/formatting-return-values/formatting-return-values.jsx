import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();

function App() {
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date</div>
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          inputProps={{
            label: 'Default',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="DD.MM.YYYY"
          inputProps={{
            label: 'Separator',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="MMMM"
          inputProps={{
            label: 'Month only',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="D MMMM YYYY"
          inputProps={{
            label: 'Month name',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="MM/YYYY"
          inputProps={{
            label: 'Month/year',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="DDD DD MMM, YYYY"
          inputProps={{
            label: 'Day of week',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="YYYY-MM-DD"
          inputProps={{
            label: 'ATOM',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          defaultValue={now}
          dateFormat="DDD, DD MMM YYYY"
          inputProps={{
            label: 'COOKIE',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Time</div>
        <Datepicker
          controls={['time']}
          select="range"
          defaultValue={now}
          inputProps={{
            label: 'Default time',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          defaultValue={now}
          timeFormat="hh:mm A"
          inputProps={{
            label: '12h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          defaultValue={now}
          timeFormat="HH:mm"
          inputProps={{
            label: '24h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          defaultValue={now}
          timeFormat="HH:mm:ss"
          inputProps={{
            label: 'Hour, min, sec',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date & time</div>
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          defaultValue={now}
          inputProps={{
            label: 'Default date & time',
          }}
        />
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          defaultValue={now}
          dateFormat="DDD D MMM, YYYY"
          timeFormat="H:mm"
          dateWheels="|DDD D MMM, YYYY|"
          inputProps={{
            label: 'Day name',
          }}
        />
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
