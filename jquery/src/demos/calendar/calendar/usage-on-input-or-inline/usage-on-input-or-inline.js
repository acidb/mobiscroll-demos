import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-one-input')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'anchored',
        });

      $('#demo-init-inline')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
        });
    });
  },
  markup: `
<label>
    Calendar
    <input id="demo-one-input" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div id="demo-init-inline"></div>
  `,
};
