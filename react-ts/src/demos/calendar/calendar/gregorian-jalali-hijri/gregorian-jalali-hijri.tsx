import React from 'react';
import { Datepicker, setOptions, jalaliCalendar, hijriCalendar, localeFa, localeAr /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // themeJs
});

const App: React.FC = () => {
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" />
      <Datepicker controls={['calendar']} display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
      <Datepicker controls={['calendar']} display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
    </div>
  );
};
export default App;
