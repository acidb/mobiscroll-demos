import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-range-selection', {
      controls: ['datetime'],
      select: 'range',
      display: 'inline',
      showRangeLabels: true,
      rangeStartLabel: 'Outbound',
      rangeEndLabel: 'Return',
      minRange: 3,
      maxRange: 10,
    });
  },
  markup: `
<div id="demo-range-selection"></div>
  `,
};
