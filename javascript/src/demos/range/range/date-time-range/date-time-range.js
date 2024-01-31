import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-calendar', {
      controls: ['calendar', 'time'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-calendar-timegrid', {
      controls: ['calendar', 'timegrid'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['datetime'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['datetime'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-start-end', {
      controls: ['datetime'],
      select: 'range',
      startInput: '#demo-start',
      endInput: '#demo-end',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar"></div>
<div id="demo-calendar-timegrid"></div>

<div id="demo-date"></div>

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
