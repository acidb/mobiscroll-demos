import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

const App: React.FC = () => {
  return (
    <mobiscroll.Datepicker
      // locale
      // theme
      controls={['calendar']}
      display="inline"
      rangeSelectMode="wizard"
      select="range"
      showRangeLabels={true}
    />
  );
};
