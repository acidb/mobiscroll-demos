import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

function App() {
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
}

ReactDOM.render(<App />, document.getElementById('content'));
