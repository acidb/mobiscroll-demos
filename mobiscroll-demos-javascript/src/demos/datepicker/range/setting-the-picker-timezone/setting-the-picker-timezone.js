import * as mobiscroll from '@mobiscroll/javascript';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

window.dayjs_plugin_utc = utc;
window.dayjs_plugin_timezone = timezone;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    dayjs.extend(window.dayjs_plugin_utc);
    dayjs.extend(window.dayjs_plugin_timezone);
    mobiscroll.dayjsTimezone.dayjs = dayjs;

    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      timezonePlugin: mobiscroll.dayjsTimezone,
      dataTimezone: 'utc',
      displayTimezone: 'local',
      controls: ['calendar', 'time'],
      select: 'range',
      onChange: function (ev, inst) {
        var valueSpan = document.getElementById('selected-value');
        var value = inst.getVal();
        valueSpan.parentElement.classList.remove('hidden');
        valueSpan.innerHTML = 'from: <code>' + value[0] + '</code><br>to: <code>' + value[1] + '</code>';
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
    <label>
        Select Date &amp; Time in Display Timezone
        <input mbsc-input id="demo" data-input-style="outline" data-label-style="stacked" />
    </label>
    <div class="mbsc-padding">
        <p class="hidden">Selected range is returned in Data Timezone<br>
            <span id="selected-value"></span>.
        </p>
    </div>
</div>
  `,
};
