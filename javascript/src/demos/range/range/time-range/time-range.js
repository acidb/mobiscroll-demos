import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-time', {
      controls: ['time'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-timegrid', {
      controls: ['timegrid'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['time'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-start-end', {
      controls: ['time'],
      select: 'range',
      startInput: '#demo-start',
      endInput: '#demo-end',
    });
  },
  markup: `
<div id="demo-time"></div>
<div id="demo-timegrid"></div>

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
                <input id="demo-start" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                End
                <input id="demo-end" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
  `,
};