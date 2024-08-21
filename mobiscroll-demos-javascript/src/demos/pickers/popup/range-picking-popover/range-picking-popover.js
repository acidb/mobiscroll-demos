import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-range-picking-popover', {
      view: {
        timeline: {
          type: 'week',
        },
      },

    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-range-picking-popover"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``, 
};
