import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

function App() {
  return (
    <Datepicker
      // locale
      // theme
      controls={['calendar']}
      display="inline"
      rangeSelectMode="wizard"
      select="range"
      showRangeLabels={true}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
