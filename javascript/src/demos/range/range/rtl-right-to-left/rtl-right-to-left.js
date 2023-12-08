import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      select: 'range',
      rtl: true,
      display: 'inline',
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
