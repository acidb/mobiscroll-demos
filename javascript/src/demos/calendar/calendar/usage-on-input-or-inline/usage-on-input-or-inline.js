import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['calendar'],
      showRangeLabels: true,
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-init-inline', {
      controls: ['calendar'],
      showRangeLabels: true,
      display: 'inline',
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
