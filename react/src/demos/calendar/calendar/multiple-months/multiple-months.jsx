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
      <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={1} />
      <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={2} />
      <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={3} />
      <Datepicker controls={['calendar']} display="inline" calendarType="month" pages="auto" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
