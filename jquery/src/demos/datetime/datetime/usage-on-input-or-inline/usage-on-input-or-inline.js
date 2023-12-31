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
          controls: ['date'],
          display: 'anchored',
        });

      $('#demo-init-inline')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'inline',
        });
    });
  },
  markup: `
<label>
    Date
    <input id="demo-one-input" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div id="demo-init-inline"></div>
  `,
};
