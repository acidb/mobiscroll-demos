import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['date'],
      showRangeLabels: true,
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-init-inline', {
      controls: ['date'],
      showRangeLabels: true,
      display: 'inline',
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
