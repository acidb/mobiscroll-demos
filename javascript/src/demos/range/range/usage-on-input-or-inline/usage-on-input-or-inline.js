import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['calendar'],
      select: 'range',
      display: 'anchored',
    });

    mobiscroll.datepicker('#demo-start-end', {
      controls: ['calendar'],
      select: 'range',
      display: 'anchored',
      startInput: '#demo-init-start',
      endInput: '#demo-init-end',
    });

    mobiscroll.datepicker('#demo-init-inline', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
    });
  },
  markup: `
<label>
    Range
    <input id="demo-one-input" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div id="demo-start-end"></div>
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Start
                <input id="demo-init-start" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                End
                <input id="demo-init-end" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
<div id="demo-init-inline"></div>
  `,
};
