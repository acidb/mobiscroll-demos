import { Datepicker, setOptions, localeEs /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // themeJs
});

const App: React.FC = () => (
  <Datepicker
    controls={['date']}
    display="inline"
    locale={localeEs} // sets the language of the component
  />
);
export default App;
