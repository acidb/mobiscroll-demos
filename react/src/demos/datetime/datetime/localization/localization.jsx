import React from 'react';
import { Datepicker, setOptions, localeEs /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Datepicker
      controls={['date']}
      display="inline"
      locale={localeEs} // sets the language of the component
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
