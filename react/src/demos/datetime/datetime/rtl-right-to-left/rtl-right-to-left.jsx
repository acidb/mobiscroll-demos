import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return <Datepicker controls={['datetime']} rtl={true} display="inline" />;
}

ReactDOM.render(<App />, document.getElementById('content'));
