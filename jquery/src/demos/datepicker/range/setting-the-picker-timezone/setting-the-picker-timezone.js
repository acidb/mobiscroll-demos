import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    $(function () {
      mobiscroll.momentTimezone.moment = moment;

      $('#demo')
        .mobiscroll()
        .datepicker({
          timezonePlugin: mobiscroll.momentTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'local',
          controls: ['calendar', 'time'],
          select: 'range',
          onChange: function (ev, inst) {
            const valueSpan = $('#selected-value')[0];
            valueSpan.parentElement.classList.remove('hidden');
            const [from, to] = inst.getVal();
            valueSpan.innerHTML = 'from: <code>' + from + '</code><br>to:<code>' + to + '</code>';
          },
        });
    });
  },
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
