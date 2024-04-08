import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var monthInst = $('#demo-month')
        .mobiscroll()
        .eventcalendar({
          // context,
          height: 'auto',
          view: {
            calendar: { popover: false, labels: false },
          },
          onSelectedDateChange: function (args) {
            dayInst.navigate(args.date);
          },
        })
        .mobiscroll('getInst');

      var dayInst = $('#demo-day')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'day' },
          },
          onPageChange: function (args) {
            monthInst.navigate(args.firstDay);
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        dayInst.setEvents(events);
        monthInst.setEvents(events);
      });
    });
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
