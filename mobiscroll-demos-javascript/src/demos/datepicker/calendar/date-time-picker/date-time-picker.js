import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar', 'time'],
      display: 'inline',
    });

    mobiscroll.datepicker('#demo-timegrid', {
      controls: ['calendar', 'timegrid'],
      display: 'inline',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div id="demo-timegrid"></div>
  `,
};
