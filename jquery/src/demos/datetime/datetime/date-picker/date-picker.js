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

      $('button').click(() => {
        $('#demo-date').val('02/02/2024').trigger('change');
        $('#demo-date').change();
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
<button>CHnage</button>

<label>
    Month & year picker
    <input id="demo-month-year" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
