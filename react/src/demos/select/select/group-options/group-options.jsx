import React from 'react';
//<demo-only>import { Select, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const singleData = [
  { text: 'Atlanta', group: 'US', value: 'atl' },
  { text: 'Boston', group: 'US', value: 'bos' },
  { text: 'Bath', group: 'UK', value: 'bat' },
  { text: 'Bristol', group: 'UK', value: 'bri' },
  { text: 'Berlin', group: 'DE', value: 'ber' },
  { text: 'Duisburg', group: 'DE', value: 'dus' },
  { text: 'Cologne', group: 'DE', value: 'col' },
  { text: 'Paris', group: 'FR', value: 'par' },
  { text: 'Lyon', group: 'FR', value: 'lyo' },
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
        data={singleData}
        label="Group wheel"
        showGroupWheel={true}
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

ReactDOM.render(<App />, document.getElementById('content'));
