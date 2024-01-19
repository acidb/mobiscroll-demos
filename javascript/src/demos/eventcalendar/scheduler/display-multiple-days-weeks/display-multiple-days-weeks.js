import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-display-multiple-days-weeks-months', {
      // drag,
      view: {
        schedule: {
          type: 'week',
          size: 2,
        },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-display-multiple-days-weeks-months"></div>
  `,
};
