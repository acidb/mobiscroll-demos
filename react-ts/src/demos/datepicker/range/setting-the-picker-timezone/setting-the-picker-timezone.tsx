import React from 'react';
import { Datepicker, momentTimezone } from '@mobiscroll/react';
import moment from 'moment-timezone';

const momentTimezone = mobiscroll.momentTimezone; //</extra>

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

const App: React.FC = () => {
  const [selected, setSelected] = useState<string[] | null>(null);
  const selectedChange = (ev: any) => {
    setSelected(ev.value);
  };
  return (
    <Datepicker
      select="range"
      value={selected}
      onChange={selectedChange}
      dataTimezone="utc"
      displayTimezone="local"
      timezonePlugin={momentTimezone}
      label="Pick Date & Time in Display Timezone"
    />
  );
};
