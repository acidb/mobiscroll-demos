import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['date'],
      display: 'inline',
      invalid: [
        '2020-02-12',
        '2020-05-20',
        {
          recurring: {
            repeat: 'weekly',
            weekDays: 'SA,SU',
          },
        },
        {
          recurring: {
            repeat: 'yearly',
            day: 24,
            month: 12,
          },
        },
        {
          recurring: {
            repeat: 'yearly',
            day: 31,
            month: 12,
          },
        },
        {
          recurring: {
            repeat: 'monthly',
            day: 1,
          },
        },
        {
          recurring: {
            repeat: 'monthly',
            day: -1,
          },
        },
        {
          start: '2020-03-15',
          end: '2020-03-30',
        },
        {
          start: '2020-07-05',
          end: '2020-08-20',
        },
      ],
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
