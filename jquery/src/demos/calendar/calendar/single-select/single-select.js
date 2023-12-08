import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-single-select-date')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          selectMultiple: false,
        });

      $('#demo-single-select-datetime')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          selectMultiple: false,
        });

      $('#demo-single-select-timegrid')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'timegrid'],
          selectMultiple: false,
        });
    });
  },
  markup: `
<label>
    Date
    <input id="demo-single-select-date" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Date & time
    <input id="demo-single-select-datetime" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Date & timegrid
    <input id="demo-single-select-timegrid" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
  `,
};
