import React from 'react';
//<demo-only>import { Datepicker, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return <Datepicker controls={['calendar']} display="inline" calendarScroll="horizontal" showWeekNumbers={true} showOuterDays={true} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
