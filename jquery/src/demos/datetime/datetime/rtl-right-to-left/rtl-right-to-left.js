import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $('#demo')
      .mobiscroll()
      .datepicker({
        controls: ['datetime'],
        rtl: true,
        display: 'inline',
      });
  },
  markup: `
<div id="demo"></div>
  `,
};
