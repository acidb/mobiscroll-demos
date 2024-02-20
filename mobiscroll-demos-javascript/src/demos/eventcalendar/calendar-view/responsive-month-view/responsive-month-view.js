import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    var inst = mobiscroll.eventcalendar('#demo-responsive-month-view', {
      // locale,
      // theme,
      // drag,
      responsive: {
        xsmall: {
          view: {
            calendar: {
              type: 'week',
            },
            agenda: {
              type: 'day',
            },
          },
        },
        custom: {
          // Custom breakpoint
          breakpoint: 600,
          view: {
            calendar: {
              labels: true,
            },
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
<div id="demo-responsive-month-view"></div>
  `,
};
