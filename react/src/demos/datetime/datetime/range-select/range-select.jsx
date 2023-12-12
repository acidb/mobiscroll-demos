import React from 'react';
//<demo-only>import { Datepicker/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;//</extra>

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
