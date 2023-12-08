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
      minRange: 3,
      maxRange: 10,
    });

    mobiscroll.datepicker('#demo-scroller', {
      controls: ['date'],
      select: 'range',
      display: 'inline',
      minRange: 3,
      maxRange: 10,
    });
  },
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
