import { Datepicker, momentTimezone } from '@mobiscroll/react';
import moment from 'moment-timezone';
import { useCallback, useState } from 'react';

momentTimezone.moment = moment;

function App() {
  const [selected, setSelected] = useState(null);

  const handleChange = useCallback((ev) => {
    setSelected(ev.value);
  }, []);

  return (
    <Datepicker
      controls={['calendar', 'time']}
      value={selected}
      onChange={handleChange}
      dataTimezone="utc"
      displayTimezone="local"
      inputStyle="outline"
      label="Pick date & time"
      labelStyle="stacked"
      timezonePlugin={momentTimezone}
    />
  );
}
export default App;
