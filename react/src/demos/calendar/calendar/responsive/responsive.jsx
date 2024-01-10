import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [responsive] = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <Page>
      <Datepicker responsive={responsive} inputStyle="box" placeholder="Please Select..." />
    </Page>
  );
}

export default App;
