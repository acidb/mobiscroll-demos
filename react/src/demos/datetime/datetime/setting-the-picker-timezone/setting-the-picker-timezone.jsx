import React from 'react';
import { Datepicker, momentTimezone } from '@mobiscroll/react';
import moment from 'moment-timezone';

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
export default App;
