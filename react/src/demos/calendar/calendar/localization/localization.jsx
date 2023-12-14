import React from 'react';
import { Datepicker, setOptions, localeEs /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // themeJs
});

function App() {
  return (
    <Datepicker
      controls={['calendar']}
      display="inline"
      locale={localeEs} // sets the language of the component
    />
  );
}

export default App;
