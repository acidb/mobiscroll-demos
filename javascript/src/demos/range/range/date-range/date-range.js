import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-calendar', {
      controls: ['calendar'],
      select: 'range',
      calendarType: 'month',
      pages: 2,
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['date'],
      select: 'range',
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-range-presets', {
      controls: ['calendar'],
      select: 'range',
      select: 'preset-range',
      display: 'inline',
      pages: 2,
      firstSelectDay: 2,
      selectSize: 10,
    });

    mobiscroll.datepicker('#demo-one-input', {
      controls: ['calendar'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-start-end', {
      controls: ['calendar'],
      select: 'range',
      startInput: '#demo-start',
      endInput: '#demo-end',
    });
  },
  markup: `
<div id="demo-calendar"></div>

<div id="demo-date"></div>

<div id="demo-range-presets"></div>

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
