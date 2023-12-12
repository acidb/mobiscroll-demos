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
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={1} />
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} />
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={3} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
