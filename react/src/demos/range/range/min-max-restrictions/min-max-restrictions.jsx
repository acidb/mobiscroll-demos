import React from 'react';
//<demo-only>import { Datepicker, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker controls={['calendar']} select="range" display="inline" min="1920-01-01" max="2050-01-01" />

      <Datepicker controls={['calendar', 'time']} select="range" display="inline" min="2000-01-01T12:00" max="2050-01-01T12:00" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
