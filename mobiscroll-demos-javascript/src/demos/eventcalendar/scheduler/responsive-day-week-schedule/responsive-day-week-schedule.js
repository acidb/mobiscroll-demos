import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    var inst = mobiscroll.eventcalendar('#demo', {
      // locale,
      // theme,
      // drag,
      responsive: {
        xsmall: {
          view: {
            schedule: { type: 'day' },
          },
        },
        custom: {
          // Custom breakpoint
          breakpoint: 600,
          view: {
            schedule: { type: 'week' },
          },
        },
      },
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
<div id="demo"></div>
  `,
};
