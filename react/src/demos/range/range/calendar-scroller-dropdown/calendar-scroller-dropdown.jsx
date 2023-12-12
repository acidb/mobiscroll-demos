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
        controls={['calendar']}
        select="range"
        inputProps={{
          label: 'Calendar',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date']}
        select="range"
        inputProps={{
          label: 'Date',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['datetime']}
        select="range"
        inputProps={{
          label: 'Date & Time',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar', 'time']}
        select="range"
        inputProps={{
          label: 'Calendar & Time',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        select="range"
        inputProps={{
          label: 'Time',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
