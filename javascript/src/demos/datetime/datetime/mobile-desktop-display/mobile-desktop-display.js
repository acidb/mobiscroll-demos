import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-inline', {
      controls: ['date'],
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-anchored', {
      controls: ['date'],
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-top', {
      controls: ['date'],
      display: 'top',
    });

    mobiscroll.datepicker('#demo-bottom', {
      controls: ['date'],
      display: 'bottom',
    });

    mobiscroll.datepicker('#demo-center', {
      controls: ['date'],
      display: 'center',
    });
  },
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
