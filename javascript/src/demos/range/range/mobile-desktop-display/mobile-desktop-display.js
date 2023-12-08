import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-inline', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-anchored', {
      controls: ['calendar'],
      select: 'range',
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-top', {
      controls: ['calendar'],
      select: 'range',
      display: 'top',
    });

    mobiscroll.datepicker('#demo-bottom', {
      controls: ['calendar'],
      select: 'range',
      display: 'bottom',
    });

    mobiscroll.datepicker('#demo-center', {
      controls: ['calendar'],
      select: 'range',
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
