import { Datepicker /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => (
  <Datepicker
    // locale
    // theme
    controls={['datetime']}
    select="range"
    display="inline"
    showRangeLabels={true}
    rangeStartLabel="Outbound"
    rangeEndLabel="Return"
    minRange={3}
    maxRange={10}
  />
);
export default App;
