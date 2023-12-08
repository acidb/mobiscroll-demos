import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-range-selection', {
      controls: ['calendar'],
      display: 'inline',
      rangeSelectMode: 'wizard',
      select: 'range',
      showRangeLabels: true,
    });
  },
  markup: `
<div id="demo-range-selection"></div>
  `,
};
