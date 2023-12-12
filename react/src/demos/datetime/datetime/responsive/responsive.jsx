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
  const [responsiveDrop] = React.useState([
    {
      xsmall: {
        display: 'bottom',
      },
      small: {
        display: 'anchored',
      },
      custom: {
        // Custom breakpoint
        breakpoint: 800,
        display: 'anchored',
        touchUi: false,
      },
    },
  ]);

  const [responsiveCal] = React.useState([
    {
      xsmall: {
        controls: ['date'],
        display: 'bottom',
        touchUi: true,
      },
      small: {
        controls: ['date'],
        display: 'anchored',
        touchUi: true,
      },
      custom: {
        // Custom breakpoint
        breakpoint: 800,
        controls: ['calendar'],
        display: 'anchored',
        touchUi: false,
      },
    },
  ]);

  return (
    <Page>
      <Datepicker
        controls={['date']}
        responsive={responsiveDrop}
        inputProps={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date']}
        responsive={responsiveCal}
        inputProps={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
