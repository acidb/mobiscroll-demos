import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    var inst = mobiscroll.eventcalendar('#demo-desktop-month-view', {
      // locale,
      // theme,
      // drag,
      view: {
        calendar: { labels: true },
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
<div id="demo-desktop-month-view"></div>
  `,
};
