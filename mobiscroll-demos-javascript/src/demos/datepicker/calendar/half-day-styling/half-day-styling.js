import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      display: 'inline',
      colors: [
        { date: 'dyndatetime(y,m,12)', cellCssClass: 'check-in' },
        { date: 'dyndatetime(y,m,16)', cellCssClass: 'check-out' },
        { start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,15)', background: '#46c4f3' },
      ],
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-datepicker .mbsc-calendar-cell.mbsc-ltr.check-in {
    background: linear-gradient( to left top, #46c4f3 50%, transparent 50%) no-repeat;
}

.mbsc-datepicker .mbsc-calendar-cell.mbsc-ltr.check-out {
    background: linear-gradient( to left top, transparent 50%, #46c4f3 50%) no-repeat;
}

.mbsc-datepicker .mbsc-calendar-cell.mbsc-rtl.check-in {
    background: linear-gradient( to right bottom, #46c4f3 50%, transparent 50%) no-repeat;
}

.mbsc-datepicker .mbsc-calendar-cell.mbsc-rtl.check-out {
    background: linear-gradient( to right bottom, transparent 50%, #46c4f3 50%) no-repeat;
}

.mbsc-datepicker .mbsc-calendar-cell.mbsc-ltr.check-out,
.mbsc-datepicker .mbsc-calendar-cell.mbsc-rtl.check-in {
    border-color: #46c4f3;
}

.mbsc-datepicker .mbsc-calendar-cell.mbsc-windows.check-in,
.mbsc-datepicker .mbsc-calendar-cell.mbsc-windows.check-out {
    border-color: transparent;
}
  `,
};
