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
        .datepicker({
          // context,
          controls: ['calendar'],
          display: 'inline',
          onChange: function (args) {
            dayInst.navigate(args.value);
          },
        })
        .mobiscroll('getInst');

      var dayInst = $('#demo-day')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'day' },
          },
          onPageChange: function (args) {
            monthInst.setVal(args.firstDay);
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        dayInst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div class="mbsc-grid mds-external-nav-calendar">
    <div class="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
      <div class="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
        <div id="demo-month"></div>
      </div>
      <div class="mds-external-nav-ec mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
        <div id="demo-day"></div>
      </div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-external-nav-calendar {
    display: flex;
    height: 100%;
  }
  .mds-external-nav-ec {
    height: 100%;
    border-left: 1px solid #ccc;
  }
  @media screen and (max-width: 700px) {
    .mds-external-nav-calendar {
      display: block;
    }
  }
  `,
};
