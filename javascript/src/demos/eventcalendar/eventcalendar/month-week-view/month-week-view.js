import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var one;
    var two;
    var three;

    one = mobiscroll.eventcalendar('#demo-one-week-view', {
      view: {
        calendar: { type: 'week' },
      },
    });

    two = mobiscroll.eventcalendar('#demo-two-week-view', {
      view: {
        calendar: { type: 'week', size: 2 },
      },
    });

    three = mobiscroll.eventcalendar('#demo-three-week-view', {
      view: {
        calendar: { type: 'week', size: 3 },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        one.setEvents(events);
        two.setEvents(events);
        three.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">One week view</div>
                <div id="demo-one-week-view"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Two week view</div>
                <div id="demo-two-week-view"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Three week view</div>
                <div id="demo-three-week-view"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
