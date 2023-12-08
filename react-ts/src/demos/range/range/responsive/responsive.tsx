import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [responsive] = React.useState([
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
        select="range"
        showRangeLabels={true}
        inputOptions={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
};
