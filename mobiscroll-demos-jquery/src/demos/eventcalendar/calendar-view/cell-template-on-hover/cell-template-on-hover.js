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
                return '<div class="mbsc-flex md-cell-summary-btn-cont">' +
                  '<button class="md-cell-summary-btn" mbsc-button data-icon="plus" />' +
                  '</div>';
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
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Event added for ' + mobiscroll.formatDate('YYYY-MM-DD', hoveredDate)
            });
          }
        });

      instance = $('#demo-show-cell-summary-on-hover')
        .mobiscroll()
        .eventcalendar({
          data: [
            {
              start: 'dyndatetime(y,m,2,12)',
              end: 'dyndatetime(y,m,2,16)',
              title: 'Company Strategy Offsite',
              color: '#90bcff',
            },
            {
              start: 'dyndatetime(y,m,7,9)',
              end: 'dyndatetime(y,m,7,17)',
              title: 'R&D Innovation Workshop',
              color: '#ffdfaf',
            },
            {
              start: 'dyndatetime(y,m,15,10)',
              end: 'dyndatetime(y,m,15,15)',
              title: 'Client Feedback Review',
              color: '#ffb9ad',
            },
            {
              start: 'dyndatetime(y,m,19,9)',
              end: 'dyndatetime(y,m,19,19)',
              title: 'Team Building Adventure',
              color: '#f3c1ff',
            },
            {
              start: 'dyndatetime(y,m,23,11)',
              end: 'dyndatetime(y,m,23,15)',
              title: 'Sales Summit & Training',
              color: '#b5eff8',
            },
            {
              start: 'dyndatetime(y,m,25,10)',
              end: 'dyndatetime(y,m,25,15)',
              title: 'Executive Planning Retreat',
              color: '#c7ffbb',
            },
            {
              start: 'dyndatetime(y,m,29,14)',
              end: 'dyndatetime(y,m,29,17)',
              title: 'Marketing Team Conference',
              color: '#ffeeb6',
            }
          ],
          onCellHoverIn: function (args) {
            hoveredDate = args.date;
            updateRenderDayContent();
          },
          onCellHoverOut: function () {
            hoveredDate = null;
            updateRenderDayContent();
          },
          onCellClick: function (args) {
            hoveredDate = args.date;
            updateRenderDayContent();
          }
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
.md-cell-summary-btn-cont {
  justify-content: center;
}
.md-cell-summary-btn {
  position: absolute;
  right: auto;
  left: auto;
  bottom: 0;
  z-index: 3;
  transform: scale(0.9);
}
.md-cell-summary-btn.mbsc-hover {
  transform: scale(1);
}
  `,
};
