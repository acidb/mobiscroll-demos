import { Datepicker /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => (
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
export default App;
