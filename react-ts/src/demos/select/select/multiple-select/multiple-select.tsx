import React from 'react';
import { Select, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    value: 1,
    text: 'Books',
  },
  {
    value: 2,
    text: 'Movies, Music & Games',
  },
  {
    value: 3,
    text: 'Electronics & Computers',
  },
  {
    value: 4,
    text: 'Home, Garden & Tools',
  },
  {
    value: 5,
    text: 'Health & Beauty',
  },
  {
    value: 6,
    text: 'Toys, Kids & Baby',
  },
  {
    value: 7,
    text: 'Clothing & Jewelry',
  },
  {
    value: 8,
    text: 'Sports & Outdoors',
  },
  {
    value: 9,
    text: 'Automotive & Industrial',
  },
];

function App() {
  return (
    <Page>
      <Select
        data={myData}
        multiple={true}
        label="Multi-select"
        inputProps={{
          inputStyle: 'box',
          labelStyle: 'stacked',
          placeholder: 'Please select...',
        }}
      />
    </Page>
  );
}

export default App;
