import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-week-select', {
      controls: ['calendar'],
      select: 'preset-range',
      display: 'inline',
      firstSelectDay: 1,
      selectSize: 14,
    });
  },
  markup: `
<div id="demo-week-select"></div>
  `,
};
