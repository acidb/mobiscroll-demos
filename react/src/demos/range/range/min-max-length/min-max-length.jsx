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
      <Datepicker controls={['calendar']} select="range" display="inline" minRange={3} maxRange={10} />
      <Datepicker controls={['date']} select="range" display="inline" minRange={3} maxRange={10} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
