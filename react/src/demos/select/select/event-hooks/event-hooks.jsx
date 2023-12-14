import React from 'react';
import { Select, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    text: 'Atlanta',
    value: 'atl',
  },
  {
    text: 'Berlin',
    value: 'ber',
  },
  {
    text: 'Boston',
    value: 'bos',
  },
  {
    text: 'Chicago',
    value: 'chi',
  },
  {
    text: 'London',
    value: 'lon',
  },
  {
    text: 'Los Angeles',
    value: 'la',
  },
  {
    text: 'New York',
    value: 'ny',
  },
  {
    text: 'Paris',
    value: 'par',
  },
  {
    text: 'San Francisco',
    value: 'sf',
  },
];

function App() {
  return (
    <Select
      data={myData}
      filter={true}
      inputProps={{
        label: 'Select',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
      onCancel={(event, inst) => {
        // Logic for cancel button click
      }}
      onChange={(event, inst) => {
        // Logic for value change
      }}
      onClose={(event, inst) => {
        // Your custom event handler goes here
      }}
      onDestroy={(event, inst) => {
        // Your custom event handler goes here
      }}
      onFilter={(event, inst) => {
        // Your custom event handler goes here
      }}
      onInit={(event, inst) => {
        // Logic running on component init
      }}
      onOpen={(event, inst) => {
        // Your custom event handler goes here
      }}
      onPosition={(event, inst) => {
        // Logic for component positioning
      }}
      onTempChange={(event, inst) => {
        // Logic for temporary value change
      }}
    />
  );
}

export default App;
