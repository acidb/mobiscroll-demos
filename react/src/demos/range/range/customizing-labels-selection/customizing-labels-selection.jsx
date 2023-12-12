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
        rangeHighlight={true}
        showRangeLabels={true}
        rangeStartLabel="Outbound"
        rangeEndLabel="Return"
        rangeStartHelp="Set dates"
        rangeEndHelp="Set dates"
      />
      <Datepicker
        controls={['date']}
        select="range"
        display="inline"
        rangeHighlight={true}
        showRangeLabels={true}
        rangeStartLabel="Outbound"
        rangeEndLabel="Return"
        rangeStartHelp="Set dates"
        rangeEndHelp="Set dates"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
