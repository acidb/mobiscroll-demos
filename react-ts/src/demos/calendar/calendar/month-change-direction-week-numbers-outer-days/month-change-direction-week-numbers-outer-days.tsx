import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <Datepicker controls={['calendar']} display="inline" calendarScroll="horizontal" showWeekNumbers={true} showOuterDays={true} />
);
export default App;
