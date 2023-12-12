import React from 'react';
//<demo-only>import { Datepicker, setOptions, jalaliCalendar, hijriCalendar, localeFa, localeAr/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const jalaliCalendar = mobiscroll.jalaliCalendar;
const hijriCalendar = mobiscroll.hijriCalendar;
const localeFa = mobiscroll.locale.fa;
const localeAr = mobiscroll.locale.ar;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" />
      <Datepicker controls={['calendar']} display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
      <Datepicker controls={['calendar']} display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
