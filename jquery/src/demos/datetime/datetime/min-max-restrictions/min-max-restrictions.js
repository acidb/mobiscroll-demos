import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

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
          controls: ['date'],
          display: 'inline',
          min: '1920-01-01',
          max: '2050-01-01',
        });

      $('#demo-time')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          display: 'inline',
          min: '10:30',
          max: '19:30',
        });

      $('#demo-timegrid')
        .mobiscroll()
        .datepicker({
          controls: ['timegrid'],
          display: 'inline',
          min: '10:30',
          max: '19:30',
        });

      $('#demo-datetime')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
          display: 'inline',
          min: '2000-01-01T12:00',
          max: '2050-01-01T12:00',
        });
    });
  },
  markup: `
<div id="demo-date"></div>
<div id="demo-time"></div>
<div id="demo-timegrid"></div>
<div id="demo-datetime"></div>
  `,
};
