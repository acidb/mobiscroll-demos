import { dayjsTimezone } from '@mobiscroll/jquery';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import $ from 'jquery';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          timezonePlugin: dayjsTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'local',
          controls: ['datetime'],
          onChange: function (ev, inst) {
            var valueSpan = $('#selected-value')[0];
            var value = inst.getVal();
            valueSpan.parentElement.classList.remove('hidden');
            valueSpan.innerText = value;
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
    <label>
        Select Date &amp; Time
        <input mbsc-input id="demo" data-input-style="outline" data-label-style="stacked" />
    </label>
    <div class="mbsc-padding">
        <p class="hidden">Selected <code id="selected-value">null</code>.</p>
    </div>
</div>
  `,
};
