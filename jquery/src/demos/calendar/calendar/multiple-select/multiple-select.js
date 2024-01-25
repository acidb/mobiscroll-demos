import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-multi-day')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          selectMultiple: true,
        });

      $('#demo-max-days')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          selectMultiple: true,
          selectMax: 5,
          headerText: 'Pick up to 5 days',
        });

      $('#demo-counter')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          selectMultiple: true,
          selectCounter: true,
        });
    });
  },
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Multi-day</div>
                <div id="demo-multi-day"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Max days</div>
                <div id="demo-max-days"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Counter</div>
                <div id="demo-counter"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
