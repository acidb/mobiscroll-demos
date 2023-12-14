import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

function App() {
  return (
    <Datepicker
      // locale
      // theme
      controls={['calendar']}
      display="inline"
      select="preset-range"
      firstSelectDay={1}
      selectSize={14}
    />
  );
}

export default App;
