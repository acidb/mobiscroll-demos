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
          controls={['date']}
          defaultValue={now}
          inputProps={{
            label: 'Default',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="DD.MM.YYYY"
          inputProps={{
            label: 'Separator',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="MMMM"
          inputProps={{
            label: 'Month only',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="D MMMM YYYY"
          inputProps={{
            label: 'Month name',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="MM/YYYY"
          inputProps={{
            label: 'Month/year',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="DDD DD MMM, YYYY"
          inputProps={{
            label: 'Day of week',
          }}
        />
        <Datepicker
          controls={['date']}
          defaultValue={now}
          dateFormat="YYYY-MM-DD"
          inputProps={{
            label: 'ATOM',
          }}
        />
        <Datepicker
          controls={['date']}
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
          defaultValue={now}
          inputProps={{
            label: 'Default time',
          }}
        />
        <Datepicker
          controls={['time']}
          defaultValue={now}
          timeFormat="hh:mm A"
          inputProps={{
            label: '12h',
          }}
        />
        <Datepicker
          controls={['time']}
          defaultValue={now}
          timeFormat="HH:mm"
          inputProps={{
            label: '24h',
          }}
        />
        <Datepicker
          controls={['time']}
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
          controls={['date', 'time']}
          defaultValue={now}
          inputProps={{
            label: 'Default date & time',
          }}
        />
        <Datepicker
          controls={['date', 'time']}
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
