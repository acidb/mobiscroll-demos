import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['date'],
      display: 'inline',
      min: '1920-01-01',
      max: '2050-01-01',
    });

    mobiscroll.datepicker('#demo-time', {
      controls: ['time'],
      display: 'inline',
      min: '10:30',
      max: '19:30',
    });

    mobiscroll.datepicker('#demo-timegrid', {
      controls: ['timegrid'],
      display: 'inline',
      min: '10:30',
      max: '19:30',
    });

    mobiscroll.datepicker('#demo-datetime', {
      controls: ['datetime'],
      display: 'inline',
      min: '2000-01-01T12:00',
      max: '2050-01-01T12:00',
    });
  },
  markup: `
<div id="demo-date"></div>
<div id="demo-time"></div>
<div id="demo-timegrid"></div>
<div id="demo-datetime"></div>
  `,
};
