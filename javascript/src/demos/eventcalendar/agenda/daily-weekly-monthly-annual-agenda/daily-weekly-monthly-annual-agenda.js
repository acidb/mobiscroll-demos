import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var daily;
    var weekly;
    var monthly;

    daily = mobiscroll.eventcalendar('#demo-agenda-daily', {
      view: {
        agenda: { type: 'day' },
      },
    });

    weekly = mobiscroll.eventcalendar('#demo-agenda-weekly', {
      view: {
        agenda: { type: 'week' },
      },
    });

    monthly = mobiscroll.eventcalendar('#demo-agenda-monthly', {
      view: {
        agenda: { type: 'month' },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events-new/?vers=5',
      function (events) {
        daily.setEvents(events);
        weekly.setEvents(events);
        monthly.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
  <div class="mbsc-grid">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Daily agenda</div>
          <div id="demo-agenda-daily"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Weekly agenda</div>
          <div id="demo-agenda-weekly"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Monthly agenda</div>
          <div id="demo-agenda-monthly"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};
