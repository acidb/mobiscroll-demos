import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-remote-api', {
      // locale,
      // theme,
      view: {
        agenda: { type: 'month' },
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
  css: `
/*<hidden>*/

.demo-load-events-from-remote-api {
    height: 100%;
}

/*</hidden>*/
  `,
};
