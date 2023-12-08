import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-15m', {
      controls: ['datetime'],
      stepMinute: 15,
    });

    mobiscroll.datepicker('#demo-5m', {
      controls: ['time'],
      stepMinute: 5,
    });

    mobiscroll.datepicker('#demo-2h', {
      controls: ['time'],
      stepHour: 2,
    });

    mobiscroll.datepicker('#demo-30s', {
      controls: ['time'],
      stepSecond: 30,
      timeFormat: 'HH:mm:ss',
    });
  },
  markup: `
<label>
    Date & Time (every 15 min)
    <input id="demo-15m" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 5 min)
    <input id="demo-5m" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 2 hours)
    <input id="demo-2h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 30 seconds)
    <input id="demo-30s" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
