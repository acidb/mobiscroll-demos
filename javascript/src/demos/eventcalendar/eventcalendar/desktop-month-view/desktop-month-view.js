import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-desktop-month-view', {
      // locale,
      // theme,
      view: {
        calendar: { labels: true },
      },
      colors: [{ date: new Date(2023, 7, 15), background: 'pink', title: 'pink' }],
      renderDayContent: (ev) => {
        console.log(ev);
        return `<div>${ev.date.getDate()}</div>`;
      },
      onEventClick: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: event.event.title,
        });
      },
      onPageLoaded: (ev, inst) => {
        console.log('ev', ev, inst);
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
<div id="demo-desktop-month-view"></div>
  `,
  css: `
.md-extra-col {
    position: absolute;
    with: 10%
}
  `,
};
