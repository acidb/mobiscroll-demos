import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          min: '1920-01-01',
          max: '2050-01-01',
        });

      $('#demo-datetime')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          display: 'inline',
          min: '2000-01-01T12:00',
          max: '2050-01-01T12:00',
        });
    });
  },
  markup: `
<div id="demo-date"></div>
<div id="demo-datetime"></div>
  `,
};
