import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

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
          controls: ['datetime'],
          select: 'range',
          display: 'inline',
          showRangeLabels: true,
          rangeStartLabel: 'Outbound',
          rangeEndLabel: 'Return',
          minRange: 3,
          maxRange: 10,
        });
    });
  },
  markup: `
<div id="demo-range-selection"></div>
  `,
};
