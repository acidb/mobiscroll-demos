import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return <Datepicker controls={['calendar']} rtl={true} display="inline" />;
}

ReactDOM.render(<App />, document.getElementById('content'));
