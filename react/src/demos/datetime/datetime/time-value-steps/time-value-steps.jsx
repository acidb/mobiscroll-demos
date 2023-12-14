import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <Datepicker
        controls={['datetime']}
        stepMinute={15}
        inputProps={{
          label: 'Date & Time (every 15 min)',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        stepMinute={5}
        inputProps={{
          label: 'Time (every 5 min)',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        stepHour={2}
        inputProps={{
          label: 'Time (every 2 hours)',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        stepSecond={30}
        timeFormat="HH:mm:ss"
        inputProps={{
          label: 'Time (every 30 seconds)',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

export default App;
