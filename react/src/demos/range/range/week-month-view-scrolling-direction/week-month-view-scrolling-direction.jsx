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
      <Datepicker
        controls={['calendar']}
        select="range"
        display="inline"
        calendarType="month"
        pages={2}
        showWeekNumbers={true}
        showOuterDays={true}
      />
      <Datepicker
        controls={['calendar']}
        select="range"
        display="inline"
        calendarType="week"
        calendarSize={2}
        showWeekNumbers={true}
        calendarScroll="vertical"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
