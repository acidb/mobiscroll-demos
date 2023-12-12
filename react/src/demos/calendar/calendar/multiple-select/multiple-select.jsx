import React from 'react';
//<demo-only>import { Datepicker, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} />
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectMax={5} headerText="Pick up to 5 days" />
      <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectCounter={true} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
