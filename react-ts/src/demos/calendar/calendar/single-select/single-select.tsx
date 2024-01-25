import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <Page>
    <Datepicker
      controls={['calendar']}
      selectMultiple={false}
      inputOptions={{
        label: 'Date',
        inputStyle: 'box',
        labelStyle: 'stacked',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['calendar', 'time']}
      selectMultiple={false}
      inputOptions={{
        label: 'Date & time',
        inputStyle: 'box',
        labelStyle: 'stacked',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['calendar', 'timegrid']}
      selectMultiple={false}
      inputOptions={{
        label: 'Date & timegrid',
        inputStyle: 'box',
        labelStyle: 'stacked',
        placeholder: 'Please Select...',
      }}
    />
  </Page>
);

export default App;
