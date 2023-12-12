import React from 'react';
//<demo-only>import { Datepicker/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;//</extra>

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
