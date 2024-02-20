import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-range-selection', {
      controls: ['calendar'],
      display: 'inline',
      select: 'range',
      showRangeLabels: true,
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-range-selection"></div>
  `,
};
