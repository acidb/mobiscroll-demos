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
      var hoveredDate;
      var instance;

      function updateRenderDayContent() {
        if (instance) {
          instance.setOptions({
            renderDayContent: function (args) {
              // Only render the button if hoveredDate and args.date are equal
              if (hoveredDate && hoveredDate.getTime() === args.date.getTime()) {
                return '<button class="md-cell-summary-btn" mbsc-button data-icon="plus" />';
              }
              return '';
            }
          });
        }
      }

      // Event delegation for dynamic button
      $('#demo-show-cell-summary-on-hover')
        .off('click', '.md-cell-summary-btn')
        .on('click', '.md-cell-summary-btn', function () {
          if (hoveredDate) {
            instance.addEvent({
              date: hoveredDate,
              title: 'New Event'
            });
            mobiscroll.toast({
              message: 'Event added for ' + mobiscroll.formatDate('YYYY-MM-DD', hoveredDate)
            });
          }
        });

      instance = $('#demo-show-cell-summary-on-hover')
        .mobiscroll()
        .eventcalendar({
          onCellHoverIn: function (args) {
            hoveredDate = args.date;
            updateRenderDayContent();
          },
          onCellHoverOut: function () {
            hoveredDate = null;
            updateRenderDayContent();
          },
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-cell-summary-on-hover" class="md-cell-summary"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-cell-summary .mbsc-calendar-cell {
  min-height: 110px;
}
.md-cell-summary-btn {
  position: absolute;
  right: 4px;
  bottom: 0;
  z-index: 3;
}
  `,
};
