import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-vertical-resolution" class="md-vertical-timeline"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-vertical-timeline .mbsc-timeline-row-gutter {
    height: 8px;
}
  `,
};
