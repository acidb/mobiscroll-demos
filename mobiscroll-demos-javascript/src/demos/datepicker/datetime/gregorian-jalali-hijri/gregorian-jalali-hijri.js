import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    mobiscroll.datepicker('#demo-gregorian', {
      controls: ['date'],
      display: 'inline',
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-gregorian"></div>
<div id="demo-jalali"></div>
<div id="demo-hijri"></div>
  `,
};
