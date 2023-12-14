import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-mobile-month-view', {
      // locale,
      // theme,
      view: {
        calendar: { type: 'month' },
        agenda: { type: 'month' },
      },
      onEventClick: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
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
<div id="demo-mobile-month-view"></div>
  `,
  css: `
/*<hidden>*/

.demo-mobile-month-view {
    height: 100%;
}

/*</hidden>*/
  `,
};
