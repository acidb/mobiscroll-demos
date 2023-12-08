import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker controls={['calendar', 'time']} display="inline" />
      <Datepicker controls={['calendar', 'timegrid']} display="inline" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
