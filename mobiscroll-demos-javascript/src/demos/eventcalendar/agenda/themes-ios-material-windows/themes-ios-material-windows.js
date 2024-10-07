import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale
    });

    var inst = mobiscroll.eventcalendar('#demo-theme', {
      view: {
        agenda: { type: 'month' },
      },
    });

    document.getElementById('demo-theme-select').addEventListener('change', function (ev) {
      inst.setOptions({ theme: ev.target.value });
    });

    document.getElementById('demo-theme-variant-select').addEventListener('change', function (ev) {
      inst.setOptions({ themeVariant: ev.target.value });
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex-col">
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-6">
          <label>
            <select id="demo-theme-select" mbsc-dropdown data-input-style="box" label="Theme" data-label-style="stacked">
              <option value="auto">Auto</option>
              <option value="ios">iOS</option>
              <option value="material">Material</option>
              <option value="windows">Windows</option>
            </select>
          </label>
        </div>
        <div class="mbsc-col-sm-6">
          <label>
            <select id="demo-theme-variant-select" mbsc-dropdown data-input-style="box" label="Theme variant" data-label-style="stacked">
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div id="demo-theme" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}
  `,
};
