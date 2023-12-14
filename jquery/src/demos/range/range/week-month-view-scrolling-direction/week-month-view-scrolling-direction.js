import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-month')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          calendarType: 'month',
          pages: 2,
          showWeekNumbers: true,
          showOuterDays: true,
        });

      $('#demo-week')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          calendarType: 'week',
          weeks: 2,
          showWeekNumbers: true,
          calendarScroll: 'vertical',
        });
    });
  },
  markup: `
<div id="demo-month"></div>
<div id="demo-week"></div>
  `,
};
