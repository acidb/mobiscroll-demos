import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var hoveredDate = new Date();
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSize: 1,
          onCellHoverIn: function () {
            // hoveredDate = args.date;
          },
          onCellHoverOut: function () {
            // hoveredDate = null;
          },
          renderDayContent: function () {
            return '<button class="add-btn" mbsc-button style="visibility:hidden;"> Add' + hoveredDate + '</button >';
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-calendar-cell:hover .add-btn {
    visibility: visible !important;
}
  `,
};
