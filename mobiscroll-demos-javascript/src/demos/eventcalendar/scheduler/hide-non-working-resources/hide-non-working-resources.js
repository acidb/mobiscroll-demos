import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-hide-hours-days"></div>
  `,
};
