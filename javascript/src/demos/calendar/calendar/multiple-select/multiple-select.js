import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-multi-day', {
      controls: ['calendar'],
      display: 'inline',
      selectMultiple: true,
    });

    mobiscroll.datepicker('#demo-max-days', {
      controls: ['calendar'],
      display: 'inline',
      selectMultiple: true,
      selectMax: 5,
      headerText: 'Pick up to 5 days',
    });

    mobiscroll.datepicker('#demo-counter', {
      controls: ['calendar'],
      display: 'inline',
      selectMultiple: true,
      selectCounter: true,
    });
  },
  // eslint-disable-next-line es5/no-template-literals
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
