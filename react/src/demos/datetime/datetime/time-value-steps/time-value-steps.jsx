import React from 'react';
//<demo-only>import { Datepicker, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions; //</extra>

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

ReactDOM.render(<App />, document.getElementById('content'));
