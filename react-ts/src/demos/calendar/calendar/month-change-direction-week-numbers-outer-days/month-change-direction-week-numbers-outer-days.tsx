import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return <Datepicker controls={['calendar']} display="inline" calendarScroll="horizontal" showWeekNumbers={true} showOuterDays={true} />;
};
export default App;
