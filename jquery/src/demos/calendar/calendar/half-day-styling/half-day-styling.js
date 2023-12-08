import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth(),
        coloredDays = [
          { date: new Date(year, month, 12), cellCssClass: 'check-in' },
          { date: new Date(year, month, 16), cellCssClass: 'check-out' },
          { start: new Date(year, month, 13), end: new Date(year, month, 15), background: '#46c4f3' },
        ];

      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          colors: coloredDays,
        });
    });
  },
  markup: `
<div id="demo"></div>
  `,
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
