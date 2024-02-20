import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-calendar', {
      controls: ['calendar'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['date'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-datetime', {
      controls: ['datetime'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-calendar-time', {
      controls: ['calendar', 'time'],
      select: 'range',
    });

    mobiscroll.datepicker('#demo-time', {
      controls: ['time'],
      select: 'range',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Calendar
    <input id="demo-calendar" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Date
    <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Date & Time
    <input id="demo-datetime" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Calendar & Time
    <input id="demo-calendar-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time
    <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
