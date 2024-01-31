import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <div>
    <Datepicker controls={['calendar', 'time']} display="inline" />
    <Datepicker controls={['calendar', 'timegrid']} display="inline" />
  </div>
);
export default App;
