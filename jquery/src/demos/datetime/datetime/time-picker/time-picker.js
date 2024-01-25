import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-time')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
        });

      $('#demo-12h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'HH:mm',
        });

      $('#demo-24h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'h:mm A',
        });

      $('#demo-hms')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'HH:mm:ss',
          headerText: 'Time: {value}',
        });
    });
  },
  markup: `
<label>
    Time picker
    <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    24 hour picker 
    <input id="demo-24h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    12 h picker with AM/PM
    <input id="demo-12h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Hour, Min, Sec
    <input id="demo-hms" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
