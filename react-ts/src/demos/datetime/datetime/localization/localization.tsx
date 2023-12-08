import React from 'react';
import { Datepicker, setOptions, localeEs /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // themeJs
});

const App: React.FC = () => {
  return (
    <Datepicker
      controls={['date']}
      display="inline"
      locale={localeEs} // sets the language of the component
    />
  );
};
