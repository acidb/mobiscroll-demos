import * as mobiscroll from '@mobiscroll/jquery';
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
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          timezonePlugin: dayjsTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'local',
          controls: ['calendar', 'time'],
          select: 'range',
          onChange: function (ev, inst) {
            var valueSpan = $('#selected-value')[0];
            var value = inst.getVal();
            valueSpan.parentElement.classList.remove('hidden');
            valueSpan.innerHTML = 'from: <code>' + value[0] + '</code><br>to:<code>' + value[1] + '</code>';
          },
        });
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
        <p class="hidden">Selected range is returned in Data Timezone<br>
            <span id="selected-value"></span>.
        </p>
    </div>
</div>
  `,
};
