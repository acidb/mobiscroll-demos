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
      $('#demo-show-empty-days')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: {
              type: 'month',
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-empty-days"></div>
`,
  css: ``,
};
