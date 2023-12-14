import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <div>
      <Datepicker controls={['calendar', 'time']} display="inline" />
      <Datepicker controls={['calendar', 'timegrid']} display="inline" />
    </div>
  );
};
export default App;
