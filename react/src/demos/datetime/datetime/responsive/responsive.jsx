import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

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

export default App;
