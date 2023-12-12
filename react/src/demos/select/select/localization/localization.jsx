import React from 'react';
//<demo-only>import { Select, setOptions, localeEs/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const localeEs = mobiscroll.localeEs;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
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
      inputProps={{
        label: 'Select',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
      display="bottom"
      locale={localeEs} // sets the language of the component
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
