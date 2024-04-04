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
        timeline: { type: 'day' },
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
  <div class="mbsc-grid mds-external-nav-timeline">
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
  .mds-external-nav-timeline {
    display: flex;
    height: 100%;
  }
  .mds-external-nav-ec {
    flex: 1;
    border-left: 1px solid #ccc;
  }
  @media screen and (max-width: 700px) {
    .mds-external-nav-timeline {
      display: block;
    }
  }
  `,
};
