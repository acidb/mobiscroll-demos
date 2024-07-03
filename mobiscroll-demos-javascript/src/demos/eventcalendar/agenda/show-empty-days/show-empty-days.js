import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-show-empty-days', {
      view: {
        agenda: {
          type: 'month',
        },
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-empty-days"></div>
`,
  css: ``,
};
