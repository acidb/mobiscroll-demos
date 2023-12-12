import React from 'react';
//<demo-only>import { Datepicker, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const myColors = [
  { date: 'dyndatetime(y,m,12)', cellCssClass: 'check-in' },
  { date: 'dyndatetime(y,m,16)', cellCssClass: 'check-out' },
  { start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,15)', background: '#46c4f3' },
];

function App() {
  return <Datepicker controls={['calendar']} display="inline" colors={myColors} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
