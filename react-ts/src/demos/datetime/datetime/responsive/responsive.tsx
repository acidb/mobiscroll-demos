import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [responsiveDrop] = React.useState<any>([
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

  const [responsiveCal] = React.useState<any>([
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
        inputOptions={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date']}
        responsive={responsiveCal}
        inputOptions={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
};
export default App;
