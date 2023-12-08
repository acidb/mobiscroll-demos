import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-calendar')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          minRange: 3,
          maxRange: 10,
        });

      $('#demo-scroller')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          display: 'inline',
          minRange: 3,
          maxRange: 10,
        });
    });
  },
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
