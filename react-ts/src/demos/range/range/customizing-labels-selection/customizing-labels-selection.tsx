import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
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
export default App;
