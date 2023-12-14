import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <Datepicker controls={['calendar']} select="range" display="inline" />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="anchored"
        inputProps={{
          label: 'Anchored',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="top"
        inputProps={{
          label: 'Top',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="bottom"
        inputProps={{
          label: 'Bottom',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="center"
        inputProps={{
          label: 'Center',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

export default App;
