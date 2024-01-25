import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <Page>
    <Datepicker
      controls={['date']}
      inputProps={{
        label: 'Date picker',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['date']}
      dateFormat="MM/YYYY"
      dateWheels="MMMM YYYY"
      inputProps={{
        label: 'Month & year picker',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
  </Page>
);
export default App;
