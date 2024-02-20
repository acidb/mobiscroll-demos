import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-calendar', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
      rangeHighlight: true,
      showRangeLabels: true,
      rangeStartLabel: 'Outbound',
      rangeEndLabel: 'Return',
      rangeStartHelp: 'Set dates',
      rangeEndHelp: 'Set dates',
    });

    mobiscroll.datepicker('#demo-scroller', {
      controls: ['date'],
      select: 'range',
      display: 'inline',
      rangeHighlight: true,
      showRangeLabels: true,
      rangeStartLabel: 'Outbound',
      rangeEndLabel: 'Return',
      rangeStartHelp: 'Set dates',
      rangeEndHelp: 'Set dates',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
