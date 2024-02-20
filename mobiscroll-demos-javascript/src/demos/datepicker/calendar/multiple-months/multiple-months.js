import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-1-month', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'month',
      pages: 1,
    });

    mobiscroll.datepicker('#demo-2-months', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'month',
      pages: 2,
    });

    mobiscroll.datepicker('#demo-3-months', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'month',
      pages: 3,
    });

    mobiscroll.datepicker('#demo-auto', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'month',
      pages: 'auto',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-1-month"></div>
<div id="demo-2-months"></div>
<div id="demo-3-months"></div>
<div id="demo-auto"></div>
  `,
};
