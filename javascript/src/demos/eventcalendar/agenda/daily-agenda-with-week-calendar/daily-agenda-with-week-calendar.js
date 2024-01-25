import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    var inst = mobiscroll.eventcalendar('#demo-daily-events', {
      // locale,
      // theme,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
      onEventClick: function (args) {
        mobiscroll.toast({
          message: args.event.title,
        });
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
<div id="demo-daily-events"></div>
  `,
};
