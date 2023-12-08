import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-1-week', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 1,
    });

    mobiscroll.datepicker('#demo-2-weeks', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 2,
    });

    mobiscroll.datepicker('#demo-3-weeks', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 3,
    });
  },
  markup: `
<div id="demo-1-week"></div>
<div id="demo-2-weeks"></div>
<div id="demo-3-weeks"></div>
  `,
};
