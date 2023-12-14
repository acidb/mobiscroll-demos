import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return <Datepicker controls={['calendar']} display="inline" calendarScroll="horizontal" showWeekNumbers={true} showOuterDays={true} />;
}

export default App;
