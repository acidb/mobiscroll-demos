import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <Datepicker
        controls={['date']}
        selectMultiple={false}
        inputProps={{
          label: 'Date',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        selectMultiple={false}
        inputProps={{
          label: 'Time',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['timegrid']}
        selectMultiple={false}
        inputProps={{
          label: 'Time grid',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date', 'time']}
        selectMultiple={false}
        inputProps={{
          label: 'Date & time',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

export default App;
