import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-desktop-week-view', {
      // locale,
      // theme,
      // drag,
      view: {
        schedule: { type: 'week' },
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
<div id="demo-desktop-week-view"></div>
  `,
};
