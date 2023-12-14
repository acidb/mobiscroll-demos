import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.momentTimezone.moment = moment;

    mobiscroll.datepicker('#demo', {
      timezonePlugin: mobiscroll.momentTimezone,
      dataTimezone: 'utc',
      displayTimezone: 'local',
      controls: ['calendar', 'time'],
      select: 'range',
      onChange: function (ev, inst) {
        const valueSpan = document.getElementById('selected-value');
        valueSpan.parentElement.classList.remove('hidden');
        const [from, to] = inst.getVal();
        valueSpan.innerHTML = 'from: <code>' + from + '</code><br>to: <code>' + to + '</code>';
      },
    });
  },
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
