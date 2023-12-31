import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#demo-gregorian')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSystem: mobiscroll.gregorianCalendar,
          locale: mobiscroll.locale.en,
        });

      $('#demo-jalali')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSystem: mobiscroll.jalaliCalendar,
          locale: mobiscroll.locale.fa,
        });

      $('#demo-hijri')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSystem: mobiscroll.hijriCalendar,
          locale: mobiscroll.locale.ar,
        });
    });
  },
  markup: `
<div id="demo-gregorian"></div>
<div id="demo-jalali"></div>
<div id="demo-hijri"></div>
  `,
};
