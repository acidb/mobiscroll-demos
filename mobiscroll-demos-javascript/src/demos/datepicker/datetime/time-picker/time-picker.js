import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-time', {
      controls: ['time'],
    });

    mobiscroll.datepicker('#demo-24h', {
      controls: ['time'],
      timeFormat: 'HH:mm',
    });

    mobiscroll.datepicker('#demo-12h', {
      controls: ['time'],
      timeFormat: 'h:mm A',
    });

    mobiscroll.datepicker('#demo-hms', {
      controls: ['time'],
      timeFormat: 'HH:mm:ss',
      headerText: 'Time: {value}',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Time picker
    <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    24 hour picker 
    <input id="demo-24h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    12 h picker with AM/PM
    <input id="demo-12h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Hour, Min, Sec
    <input id="demo-hms" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
