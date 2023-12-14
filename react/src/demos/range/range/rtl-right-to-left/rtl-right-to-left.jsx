import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return <Datepicker controls={['calendar']} select="range" rtl={true} display="inline" />;
}

export default App;
