import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-responsive')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          responsive: {
            xsmall: {
              display: 'bottom',
            },
            small: {
              display: 'anchored',
            },
            custom: {
              // Custom breakpoint
              breakpoint: 800,
              display: 'anchored',
              touchUi: false,
            },
          },
        });
    });
  },
  markup: `
<label>
    <input id="demo-responsive" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please Select..." />
</label>
  `,
};
