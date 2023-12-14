import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    mobiscroll.datepicker('#demo-gregorian', {
      controls: ['date'],
      display: 'inline',
      calendarSystem: mobiscroll.gregorianCalendar,
      locale: mobiscroll.locale.en,
    });

    mobiscroll.datepicker('#demo-jalali', {
      controls: ['date'],
      display: 'inline',
      calendarSystem: mobiscroll.jalaliCalendar,
      locale: mobiscroll.locale.fa,
    });

    mobiscroll.datepicker('#demo-hijri', {
      controls: ['date'],
      display: 'inline',
      calendarSystem: mobiscroll.hijriCalendar,
      locale: mobiscroll.locale.ar,
    });
  },
  markup: `
<div id="demo-gregorian"></div>
<div id="demo-jalali"></div>
<div id="demo-hijri"></div>
  `,
};
