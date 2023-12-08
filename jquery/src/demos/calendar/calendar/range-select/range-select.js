import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-range-selection')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          rangeSelectMode: 'wizard',
          select: 'range',
          showRangeLabels: true,
        });
    });
  },
  markup: `
<div id="demo-range-selection"></div>
  `,
};
