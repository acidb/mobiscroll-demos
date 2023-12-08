import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <Page>
      <Datepicker
        controls={['date']}
        selectMultiple={false}
        inputOptions={{
          label: 'Date',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        selectMultiple={false}
        inputOptions={{
          label: 'Time',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['timegrid']}
        selectMultiple={false}
        inputOptions={{
          label: 'Time grid',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date', 'time']}
        selectMultiple={false}
        inputOptions={{
          label: 'Date & time',
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
};
