import React from 'react';
//<demo-only>import { Datepicker, momentTimezone } from '@mobiscroll/react';
import moment from 'moment-timezone'; //</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const momentTimezone = mobiscroll.momentTimezone; //</extra>

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

function App() {
  const [selected, setSelected] = React.useState(null);
  const selectedChange = (ev) => {
    setSelected(ev.value);
  };
  return (
    <Datepicker
      value={selected}
      onChange={selectedChange}
      dataTimezone="utc"
      displayTimezone="local"
      timezonePlugin={momentTimezone}
      controls={['datetime']}
    />
  );
}
