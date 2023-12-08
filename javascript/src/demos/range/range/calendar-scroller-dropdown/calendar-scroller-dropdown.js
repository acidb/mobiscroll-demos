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
