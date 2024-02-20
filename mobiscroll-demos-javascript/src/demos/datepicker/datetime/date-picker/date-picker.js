import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['date'],
    });

    mobiscroll.datepicker('#demo-month-year', {
      controls: ['date'],
      dateFormat: 'MM/YYYY',
      dateWheels: 'MMMM YYYY',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date picker
    <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Month & year picker
    <input id="demo-month-year" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
