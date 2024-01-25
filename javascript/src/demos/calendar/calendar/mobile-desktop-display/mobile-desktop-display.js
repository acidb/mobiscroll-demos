import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-inline', {
      controls: ['calendar'],
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-anchored', {
      controls: ['calendar'],
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-top', {
      controls: ['calendar'],
      display: 'top',
    });

    mobiscroll.datepicker('#demo-bottom', {
      controls: ['calendar'],
      display: 'bottom',
    });

    mobiscroll.datepicker('#demo-center', {
      controls: ['calendar'],
      display: 'center',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-inline"></div>

<label>
    Anchored
    <input id="demo-anchored" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Top
    <input id="demo-top" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Bottom
    <input id="demo-bottom" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Center
    <input id="demo-center" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
