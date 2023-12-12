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
  const inputProps = {
    placeholder: 'Please Select...',
  };

  const boxInputProps = {
    label: 'Range',
    labelStyle: 'stacked',
    inputStyle: 'outline',
    placeholder: 'Please Select...',
  };

  return (
    <Page>
      <Datepicker controls={['calendar']} inputComponent="input" inputProps={inputProps} />
      <Datepicker controls={['calendar']} inputProps={boxInputProps} />
      <Datepicker controls={['calendar']} display="inline" />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
