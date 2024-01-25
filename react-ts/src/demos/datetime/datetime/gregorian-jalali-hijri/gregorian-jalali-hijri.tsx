import { Datepicker, setOptions, jalaliCalendar, hijriCalendar, localeFa, localeAr /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // themeJs
});

const App: React.FC = () => (
  <div>
    <Datepicker controls={['date']} display="inline" />
    <Datepicker controls={['date']} display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
    <Datepicker controls={['date']} display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
  </div>
);
export default App;
