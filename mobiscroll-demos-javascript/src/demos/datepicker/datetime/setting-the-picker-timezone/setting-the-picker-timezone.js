import * as mobiscroll from '@mobiscroll/javascript';

import * as moment from 'moment-timezone';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.momentTimezone.moment = moment;

    mobiscroll.datepicker('#demo', {
      timezonePlugin: mobiscroll.momentTimezone,
      dataTimezone: 'utc',
      displayTimezone: 'local',
      controls: ['datetime'],
      onChange: function (ev, inst) {
        var valueSpan = document.getElementById('selected-value');
        var value = inst.getVal();
        valueSpan.parentElement.classList.remove('hidden');
        valueSpan.innerText = value;
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
    <label>
        Pick Date &amp; Time in Display Timezone
        <input mbsc-input id="demo" data-input-style="outline" data-label-style="stacked" />
    </label>
    <div class="mbsc-padding">
        <p class="hidden">
            Selected date is returned in data timezone<br>
            <code id="selected-value"></code>
        </p>
    </div>
</div>
  `,
};
