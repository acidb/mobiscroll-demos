import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import './customize-marked-day-shapes.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

function App() {
  return (
    <Datepicker
      controls={['calendar']}
      display="inline"
      marked={[
        { date: new Date(year, month, 2), color: '#46c4f3', markCssClass: 'square-mark' },
        { date: new Date(year, month, 4), color: '#159833', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 6), color: '#b05cbf', markCssClass: 'square-mark' },
        { date: new Date(year, month, 6), color: '#3adecf', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 6), color: '#c8d235' },
        { date: new Date(year, month, 8), color: '#46c4f3' },
        { date: new Date(year, month, 10), color: '#7e56bd', markCssClass: 'square-mark' },
        { date: new Date(year, month, 13), color: '#f13f77' },
        { date: new Date(year, month, 16), color: '#21b326', markCssClass: 'square-mark' },
        { date: new Date(year, month, 16), color: '#ffa93a', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 18), color: '#89d7c9', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 21), color: '#ffc400', markCssClass: 'square-mark' },
        { date: new Date(year, month, 26), color: '#8dec7d', markCssClass: 'triangle-mark' },
      ]}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
