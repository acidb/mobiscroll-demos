import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth(),
      marked = [
        { date: new Date(year, month, 2), color: '#46c4f3', markCssClass: 'square-mark' },
        { date: new Date(year, month, 4), color: '#159833', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 6), color: '#b05cbf', markCssClass: 'square-mark' },
        { date: new Date(year, month, 6), color: '#3adecf', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 6), color: '#c8d235' },
        { date: new Date(year, month, 8), color: '#46c4f3' },
        { date: new Date(year, month, 10), color: '#7e56bd', markCssClass: 'square-mark' },
        { date: new Date(year, month, 13), color: '#f13f77' },
        { date: new Date(year, month, 16), color: '#21b326', markCssClass: 'square-mark' },
        { date: new Date(year, month, 16), color: '#ffa93a', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 18), color: '#89d7c9', markCssClass: 'triangle-mark' },
        { date: new Date(year, month, 21), color: '#ffc400', markCssClass: 'square-mark' },
        { date: new Date(year, month, 26), color: '#8dec7d', markCssClass: 'triangle-mark' },
      ];

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      display: 'inline',
      marked: marked,
    });
  },
  markup: `
<div id="demo"></div>
  `,
  css: `
.mbsc-datepicker .mbsc-calendar-mark.triangle-mark {
    content: '';
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    border-radius: 0;
    width: 8px;
    height: 8px;
    position: relative;
    top: -2px;
    right: 1px;
}

.mbsc-datepicker .mbsc-calendar-mark.square-mark {
    border-radius: 0;
}
  `,
};
