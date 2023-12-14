import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const invalid = [
    '2020-02-12',
    '2020-05-20',
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'SA,SU',
      },
    },
    {
      recurring: {
        repeat: 'yearly',
        day: 24,
        month: 12,
      },
    },
    {
      recurring: {
        repeat: 'yearly',
        day: 31,
        month: 12,
      },
    },
    {
      recurring: {
        repeat: 'monthly',
        day: 1,
      },
    },
    {
      recurring: {
        repeat: 'monthly',
        day: -1,
      },
    },
    {
      start: '2020-03-15',
      end: '2020-03-30',
    },
    {
      start: '2020-07-05',
      end: '2020-08-20',
    },
  ];

  return <Datepicker controls={['calendar']} select="range" display="inline" invalid={invalid} />;
}

export default App;
