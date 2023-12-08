import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
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
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
