import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import './half-day-styling.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

const App: React.FC = () => {
  return (
    <Datepicker
      controls={['calendar']}
      display="inline"
      colors={[
        {
          date: new Date(year, month, 12),
          cellCssClass: 'check-in',
        },
        {
          date: new Date(year, month, 16),
          cellCssClass: 'check-out',
        },
        {
          start: new Date(year, month, 13),
          end: new Date(year, month, 15),
          background: '#46c4f3',
        },
      ]}
    />
  );
};
