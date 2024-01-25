import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-1-week')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 1,
        });

      $('#demo-2-weeks')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 2,
        });

      $('#demo-3-weeks')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 3,
        });
    });
  },
  markup: `
<div id="demo-1-week"></div>
<div id="demo-2-weeks"></div>
<div id="demo-3-weeks"></div>
  `,
};
