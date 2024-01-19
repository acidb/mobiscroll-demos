import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-vertical-resolution', {
      // drag,
      view: {
        timeline: {
          type: 'month',
          resolutionHorizontal: 'hour',
          resolutionVertical: 'day',
        },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/timeline-vertical-events/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-vertical-resolution" class="md-vertical-timeline"></div>
  `,
  css: `
.md-vertical-timeline .mbsc-timeline-row-gutter {
    height: 8px;
}
  `,
};
