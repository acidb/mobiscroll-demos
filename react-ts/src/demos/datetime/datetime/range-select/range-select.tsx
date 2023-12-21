import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

const App: React.FC = () => {
  return (
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
};
export default App;
