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
          display: 'inline',
          onChange: function (args) {
            dayInst.navigate(args.value);
          },
          onPageChange: function (args) {
            dayInst.navigate(args.month);
          },
        })
        .mobiscroll('getInst');

      var dayInst = $('#demo-day')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: { type: 'day' },
          },
          onSelectedDateChange: function (args) {
            monthInst.setVal(args.date);
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
  <div class="mds-external-nav-timeline mbsc-flex">
    <div class="mds-external-nav-dp">
      <div id="demo-month"></div>
    </div>
    <div  class="mds-external-nav-ec mbsc-flex-1-1">
      <div id="demo-day"></div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-external-nav-timeline {
    height: 100%;
  }

  .mds-external-nav-dp {
    height: 360px;
  }

  .mds-external-nav-ec {
    border-left: 1px solid #ccc;
  }

  @media screen and (max-width: 700px) {
    .mds-external-nav-timeline {
      display: block;
    }
  }
  `,
};
