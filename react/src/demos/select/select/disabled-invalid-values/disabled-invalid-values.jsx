import React from 'react';
//<demo-only>import { Select, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const setOptions = mobiscroll.setOptions; //</extra>

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
    disabled: true,
  },
  {
    text: 'London',
    value: 'lon',
    disabled: true,
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
  return <Select data={myData} display="inline" />;
}

ReactDOM.render(<App />, document.getElementById('content'));
