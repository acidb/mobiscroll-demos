import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <div>
      <Datepicker controls={['calendar']} select="range" display="inline" minRange={3} maxRange={10} />
      <Datepicker controls={['date']} select="range" display="inline" minRange={3} maxRange={10} />
    </div>
  );
};
