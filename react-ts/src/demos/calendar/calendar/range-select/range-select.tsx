import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

const App: React.FC = () => {
  return (
    <Datepicker
      // locale
      // theme
      controls={['calendar']}
      display="inline"
      select="range"
      showRangeLabels={true}
    />
  );
};
export default App;
