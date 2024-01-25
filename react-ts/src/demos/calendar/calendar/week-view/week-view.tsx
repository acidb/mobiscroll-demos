import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <div>
    <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={1} />
    <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} />
    <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={3} />
  </div>
);
export default App;
