import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <div>
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={1} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={2} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={3} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages="auto" />
  </div>
);
export default App;
