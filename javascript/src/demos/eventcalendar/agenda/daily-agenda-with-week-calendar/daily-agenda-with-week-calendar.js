import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-daily-events', {
      // locale,
      // theme,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
      onEventClick: function (event) {
        mobiscroll.toast({
          message: event.event.title,
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
  markup: `
<div id="demo-daily-events"></div>
  `,
};
