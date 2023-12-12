import React from 'react';
//<demo-only>import { Select, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const Page = mobiscroll.Page;
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
    <Page>
      <Select data={myData} label="Single select" inputStyle="outline" labelStyle="stacked" placeholder="Please select..." />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
