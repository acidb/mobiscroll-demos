import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-customizing-day-header')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-customizing-day-header"></div>
`,
  css: ``,
};
