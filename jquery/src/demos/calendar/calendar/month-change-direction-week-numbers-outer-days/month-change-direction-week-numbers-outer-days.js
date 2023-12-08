import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarScroll: 'horizontal',
          showWeekNumbers: true,
          showOuterDays: true,
        });
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
