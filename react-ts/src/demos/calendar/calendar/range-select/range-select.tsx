import { Datepicker /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => (
  <Datepicker
    // locale
    // theme
    controls={['calendar']}
    display="inline"
    select="range"
    showRangeLabels={true}
  />
);
export default App;
