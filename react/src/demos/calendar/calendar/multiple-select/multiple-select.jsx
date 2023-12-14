import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} />
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectMax={5} headerText="Pick up to 5 days" />
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectCounter={true} />
    </div>
  );
}

export default App;
