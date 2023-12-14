import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-show-hide-hours-days', {
      view: {
        schedule: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          startTime: '09:00',
          endTime: '18:00',
          timeCellStep: 30,
          timeLabelStep: 30,
        },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/workday-events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-show-hide-hours-days"></div>
  `,
};
