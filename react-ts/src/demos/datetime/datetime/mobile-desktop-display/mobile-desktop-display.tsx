import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <Page>
    <Datepicker controls={['date']} display="inline" />
    <Datepicker
      controls={['date']}
      display="anchored"
      inputProps={{
        label: 'Anchored',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['date']}
      display="top"
      inputProps={{
        label: 'Top',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['date']}
      display="bottom"
      inputProps={{
        label: 'Bottom',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['date']}
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
export default App;
