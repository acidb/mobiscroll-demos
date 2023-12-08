import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      display: 'inline',
      calendarScroll: 'horizontal',
      showWeekNumbers: true,
      showOuterDays: true,
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
