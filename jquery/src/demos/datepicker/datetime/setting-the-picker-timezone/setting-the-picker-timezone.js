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
          controls: ['datetime'],
          onChange: function (ev, inst) {
            const valueSpan = $('#selected-value')[0];
            valueSpan.parentElement.classList.remove('hidden');
            const value = inst.getVal();
            valueSpan.innerText = value;
          },
        });
    });
  },
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
