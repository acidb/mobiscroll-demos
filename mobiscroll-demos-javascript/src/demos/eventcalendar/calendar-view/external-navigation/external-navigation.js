import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var monthInst;
    var dayInst;

    monthInst = mobiscroll.datepicker('#demo-month', {
      // context,
      display: 'inline',
      onChange: function (args) {
        dayInst.navigate(args.value);
      },
      onPageChange: function (args) {
        dayInst.navigate(args.month);
      },
    });

    dayInst = mobiscroll.eventcalendar('#demo-day', {
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
      onSelectedDateChange: function (args) {
        monthInst.setVal(args.date);
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        dayInst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div class="mds-external-nav-calendar mbsc-flex">
      <div class="mds-external-nav-dp">
        <div id="demo-month"></div>
      </div>
      <div class="mds-external-nav-ec mbsc-flex-1-1">
        <div id="demo-day"></div>
      </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-external-nav-calendar {
    height: 100%;
  }

  .mds-external-nav-dp {
    height: 360px;
  }

  .mds-external-nav-ec {
    border-left: 1px solid #ccc;
  }

  @media screen and (max-width: 700px) {
    .mds-external-nav-calendar {
      display: block;
    }
  }
  `,
};
