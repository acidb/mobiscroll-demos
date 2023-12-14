import React from 'react';
import { Select, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const singleData = [
  { text: 'Atlanta', group: 'US', value: 'atl' },
  { text: 'Boston', group: 'US', value: 'bos' },
  { text: 'Bath', group: 'UK', value: 'bat' },
  { text: 'Bristol', group: 'UK', value: 'bri' },
];

const multipleData = [
  { text: 'Camera & Photo', group: 'Electronics', value: 1 },
  { text: 'Cell Phones & Accessories', group: 'Electronics', value: 2 },
  { text: 'GPS & Navigation', group: 'Electronics', value: 3 },
  { text: 'Plugs and Outlets', group: 'Smart Home', value: 4 },
  { text: 'Heating and Cooling', group: 'Smart Home', value: 5 },
  { text: 'Detectors and Sensors', group: 'Smart Home', value: 6 },
];

function App() {
  return (
    <Page>
      <Select
        data={singleData}
        label="Single select"
        inputProps={{
          inputStyle: 'outline',
          labelStyle: 'stacked',
          placeholder: 'Please select...',
        }}
      />
      <Select
        data={multipleData}
        selectMultiple={true}
        label="Multi-select"
        inputProps={{
          inputStyle: 'outline',
          labelStyle: 'stacked',
          placeholder: 'Please select...',
        }}
      />
    </Page>
  );
}

export default App;
