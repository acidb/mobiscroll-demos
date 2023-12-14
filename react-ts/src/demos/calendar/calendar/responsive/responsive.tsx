import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [responsive] = React.useState<any>([
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

  return (
    <Page>
      <Datepicker
        controls={['calendar']}
        responsive={responsive}
        inputProps={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
};
export default App;
