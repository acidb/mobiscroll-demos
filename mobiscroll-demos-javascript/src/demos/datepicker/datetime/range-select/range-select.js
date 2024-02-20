import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-range-selection"></div>
  `,
};
