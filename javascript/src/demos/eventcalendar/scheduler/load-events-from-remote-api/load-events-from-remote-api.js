import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-remote-api', {
      // locale,
      // theme,
      // drag,
      view: {
        calendar: { type: 'week' },
        schedule: { type: 'day' },
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
<div id="demo-remote-api"></div>
  `,
};
