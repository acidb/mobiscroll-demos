import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
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
  markup: `
<div id="demo"></div>
  `,
};
