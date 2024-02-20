import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-single-select-date', {
      controls: ['date'],
      selectMultiple: false,
    });

    mobiscroll.datepicker('#demo-single-select-time', {
      controls: ['time'],
      selectMultiple: false,
    });

    mobiscroll.datepicker('#demo-single-select-timegrid', {
      controls: ['timegrid'],
      selectMultiple: false,
    });

    mobiscroll.datepicker('#demo-single-select-datetime', {
      controls: ['date', 'time'],
      selectMultiple: false,
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date
    <input id="demo-single-select-date" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Time
    <input id="demo-single-select-time" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Time grid
    <input id="demo-single-select-timegrid" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Date & time
    <input id="demo-single-select-datetime" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
  `,
};
