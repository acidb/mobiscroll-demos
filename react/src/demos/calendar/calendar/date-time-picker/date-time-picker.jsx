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
      <Datepicker controls={['calendar', 'time']} display="inline" />
      <Datepicker controls={['calendar', 'timegrid']} display="inline" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
