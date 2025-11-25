import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-36-hour-rolling-window-aircraft-view', {
      view: {
        timeline: {
          type: 'week',
        },
      },

    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-36-hour-rolling-window-aircraft-view"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``, 
};
