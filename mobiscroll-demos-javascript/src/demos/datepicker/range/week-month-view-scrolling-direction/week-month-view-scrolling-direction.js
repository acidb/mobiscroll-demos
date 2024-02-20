import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
      calendarSize: 2,
      showWeekNumbers: true,
      calendarScroll: 'vertical',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-month"></div>
<div id="demo-week"></div>
  `,
};
