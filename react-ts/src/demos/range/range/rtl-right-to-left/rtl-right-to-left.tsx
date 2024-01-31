import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => <Datepicker controls={['calendar']} select="range" rtl={true} display="inline" />;
export default App;
