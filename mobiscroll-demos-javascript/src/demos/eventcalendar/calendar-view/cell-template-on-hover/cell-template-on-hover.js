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
                return '<button id="add-btn" class="add-btn" mbsc-button data-icon="plus" />';
              }
              return '';
            }
          });
        }
      }

      // Event delegation for dynamic button
      $('#demo-show-cell-summary-on-hover')
        .off('click', '#add-btn')
        .on('click', '#add-btn', function () {
          if (hoveredDate) {
            instance.addEvent({
              start: hoveredDate,
              end: new Date(hoveredDate.getTime() + 60 * 60 * 1000), // 1 hour later
              title: 'New Event'
            });
            mobiscroll.toast({
              message: 'Add event for ' + hoveredDate.toLocaleDateString()
            });
          }
        });

      instance = $('#demo-show-cell-summary-on-hover')
        .mobiscroll()
        .eventcalendar({
          onCellHoverIn: function (args) {
            setTimeout(function () {
              hoveredDate = args.date;
              updateRenderDayContent();
            }, 50);
          },
          onCellHoverOut: function () {
            hoveredDate = null;
            updateRenderDayContent();
          },
          renderDayContent: function () {
            return '';
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
  `,
};
