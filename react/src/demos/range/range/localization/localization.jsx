import React from 'react';
//<demo-only>import { Datepicker, setOptions, localeEs/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const localeEs = mobiscroll.localeEs;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // themeJs
});

function App() {
  return (
    <Datepicker
      controls={['calendar']}
      select="range"
      display="inline"
      locale={localeEs} // sets the language of the component
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
