import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-1-month')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'month',
          pages: 1,
        });

      $('#demo-2-months')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'month',
          pages: 2,
        });

      $('#demo-3-months')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'month',
          pages: 3,
        });

      $('#demo-auto')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'month',
          pages: 'auto',
        });
    });
  },
  markup: `
<div id="demo-1-month"></div>
<div id="demo-2-months"></div>
<div id="demo-3-months"></div>
<div id="demo-auto"></div>
  `,
};
