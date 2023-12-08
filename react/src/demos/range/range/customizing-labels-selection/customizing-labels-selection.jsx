import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

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
