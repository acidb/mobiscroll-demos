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
      <Datepicker controls={['calendar']} display="inline" />
      <Datepicker
        controls={['calendar']}
        display="anchored"
        inputProps={{
          label: 'Anchored',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        display="top"
        inputProps={{
          label: 'Top',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        display="bottom"
        inputProps={{
          label: 'Bottom',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        display="center"
        inputProps={{
          label: 'Center',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
