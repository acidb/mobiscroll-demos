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
      select="preset-range"
      firstSelectDay={1}
      selectSize={14}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
