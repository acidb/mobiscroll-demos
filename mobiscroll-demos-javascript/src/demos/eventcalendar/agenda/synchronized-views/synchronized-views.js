import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var monthInst;
    var dayInst;

    monthInst = mobiscroll.eventcalendar('#demo-month', {
      height: 'auto',
      view: {
        calendar: { popover: false, labels: false },
      },
      onSelectedDateChange: function (args) {
        dayInst.navigate(args.date);
      },
    });

    dayInst = mobiscroll.eventcalendar('#demo-day', {
      view: {
        agenda: { type: 'day' },
      },
      onPageChange: function (args) {
        monthInst.navigate(args.firstDay);
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        dayInst.setEvents(events);
        monthInst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mds-sync-view">
  <div class="mbsc-row mbsc-no-padding">
    <div class="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
      <div id="demo-month"></div>
    </div>
    <div class="mds-sync-cal mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
      <div id="demo-day"></div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-sync-view,
.mds-sync-view .mbsc-row,
.mds-sync-cal {
  height: 100%;
}

.mds-sync-cal {
  border-left: 1px solid #ccc;
}
  `,
};
