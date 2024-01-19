import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-event-popover', {
      // locale,
      // theme,
      // drag,
      view: {
        calendar: {
          popover: true,
          count: true,
        },
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
<div id="demo-event-popover"></div>
  `,
};
