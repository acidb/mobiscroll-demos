import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-month', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
      calendarType: 'month',
      pages: 2,
      showWeekNumbers: true,
      showOuterDays: true,
    });

    mobiscroll.datepicker('#demo-week', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
      calendarType: 'week',
      weeks: 2,
      showWeekNumbers: true,
      calendarScroll: 'vertical',
    });
  },
  markup: `
<div id="demo-month"></div>
<div id="demo-week"></div>
  `,
};
