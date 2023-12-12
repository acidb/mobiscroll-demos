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
        selectMultiple={false}
        inputProps={{
          label: 'Date',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar', 'time']}
        selectMultiple={false}
        inputProps={{
          label: 'Date & time',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar', 'timegrid']}
        selectMultiple={false}
        inputProps={{
          label: 'Date & timegrid',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
