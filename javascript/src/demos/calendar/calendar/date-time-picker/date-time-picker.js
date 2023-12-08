import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
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
  markup: `
<div id="demo"></div>
<div id="demo-timegrid"></div>
  `,
};
