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
          controls: ['calendar', 'time'],
          display: 'inline',
        });

      $('#demo-timegrid')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'timegrid'],
          display: 'inline',
        });
    });
  },
  markup: `
<div id="demo"></div>
<div id="demo-timegrid"></div>
  `,
};
