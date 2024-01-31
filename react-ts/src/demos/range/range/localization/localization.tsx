import { Datepicker, setOptions, localeEs /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // themeJs
});

const App: React.FC = () => (
  <Datepicker
    controls={['calendar']}
    select="range"
    display="inline"
    locale={localeEs} // sets the language of the component
  />
);
export default App;
