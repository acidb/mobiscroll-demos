import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return <Datepicker controls={['datetime']} rtl={true} display="inline" />;
};
export default App;
