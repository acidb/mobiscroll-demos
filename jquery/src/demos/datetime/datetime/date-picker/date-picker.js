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
        });

      $('#demo-month-year')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'MM/YYYY',
          dateWheels: 'MMMM YYYY',
        });
    });
  },
  markup: `
<label>
    Date picker
    <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Month & year picker
    <input id="demo-month-year" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
