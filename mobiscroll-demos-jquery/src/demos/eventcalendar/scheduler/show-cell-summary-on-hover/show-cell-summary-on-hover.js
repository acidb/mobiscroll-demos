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
      var $tooltip = $('#demo-resource-info-popup');
      var $cellEventNr = $('#demo-resource-info-events');
      var $cellInvalidNr = $('#demo-resource-info-invalid');
      var $cellColorNr = $('#demo-resource-info-colors');

      $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: {
              type: 'week',
              startTime: '08:00',
              endTime: '18:00',
            },
          },
          data: [
            {
              start: '09:00',
              end: '11:00',
              title: 'Recurring task 1',
              color: '#643a48',
              recurring: {
                repeat: 'daily',
                weekDays: 'MO,TU,WE,TH,FR,SA,SU',
              }
            },
            {
              start: '14:00',
              end: '16:00',
              title: 'Recurring task 2',
              color: '#669c5b',
              recurring: {
                repeat: 'daily',
                weekDays: 'MO,TU,WE,TH,FR,SA,SU',
              }
            },
            {
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,11)',
              title: 'Task 1',
              color: '#5ba190',
            },
            {
              start: 'dyndatetime(y,m,d-2,14)',
              end: 'dyndatetime(y,m,d-2,16)',
              title: 'Task 2',
              color: '#b4a14a',
            },
            {
              start: 'dyndatetime(y,m,d-1,15)',
              end: 'dyndatetime(y,m,d-1,17)',
              title: 'Task 3',
              color: '#a05a36',
            },
            {
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Task 4',
              color: '#87518b',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 5',
              color: '#5bcc93',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Task 6',
              color: '#b35252',
            },
            {
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Task 7',
              color: '#b3528b',
            },
            {
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 8',
              color: '#d1cf66',
            },
            {
              start: 'dyndatetime(y,m,d+1,18)',
              end: 'dyndatetime(y,m,d+1,20)',
              title: 'Task 9',
              color: '#b35252',
            },
            {
              start: 'dyndatetime(y,m,d+2,8)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'Task 10',
              color: '#49b7bb',
            },
            {
              start: 'dyndatetime(y,m,d+2,15)',
              end: 'dyndatetime(y,m,d+2,18)',
              title: 'Task 11',
              color: '#d16585',
            },
            {
              start: 'dyndatetime(y,m,d+3,8)',
              end: 'dyndatetime(y,m,d+3,11)',
              title: 'Task 12',
              color: '#a1b352',
            },
            {
              start: 'dyndatetime(y,m,d+3,15)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Task 13',
              color: '#64a8c5',
            },
            {
              start: 'dyndatetime(y,m,d+4,9)',
              end: 'dyndatetime(y,m,d+4,12)',
              title: 'Task 14',
              color: '#daa45f',
            },
            {
              start: 'dyndatetime(y,m,d+5,15)',
              end: 'dyndatetime(y,m,d+5,18)',
              title: 'Task 15',
              color: '#c180c4',
            },
          ],
          invalid: [
            {
              start: 'dyndatetime(y,m,d-1,8)',
              end: 'dyndatetime(y,m,d-1,10)',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,15)',
            },
            {
              start: 'dyndatetime(y,m,d+1,15)',
              end: 'dyndatetime(y,m,d+1,17)',
            },
            {
              start: '12:00',
              end: '13:00',
              title: 'Lunch break',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR,SA,SU',
              },
            },
            {
              start: '10:00',
              end: '11:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU,WE,SA,SU',
              },
            },
          ],
          colors: [
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,16)',
              background: '#a4bd60',
            },
            {
              start: 'dyndatetime(y,m,d-2,8)',
              end: 'dyndatetime(y,m,d-2,11)',
              background: '#a4bd60',
            },
            {
              start: 'dyndatetime(y,m,d-2,14)',
              end: 'dyndatetime(y,m,d-2,17)',
              background: '#a4bd60',
            },
            {
              start: '08:00',
              end: '09:00',
              background: '#5ba190',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,WE,FR',
              }
            },
            {
              start: '13:00',
              end: '14:00',
              background: '#b393d8',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU,TH,SA',
              }
            }
          ],
          onCellHoverIn: function (event) {
            $cellEventNr.text(event.events ? event.events.length : 0);
            $cellInvalidNr.text(event.invalids ? event.invalids.length : 0);
            $cellColorNr.text(event.colors ? event.colors.length : 0);
            tooltip.setOptions({ anchor: event.domEvent.target.closest('.mbsc-schedule-item') });
            tooltip.open();
          },
          onCellHoverOut: function () {
            tooltip.close();
          },
        });

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          touchUi: false,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-info-popup" class="md-cell-summary-popup">
  <div class="md-cell-summary-row mbsc-flex">
    <span class="md-cell-summary-label">Events:</span>
    <span id="demo-resource-info-events"></span>
  </div>
  <div class="md-cell-summary-row mbsc-flex">
    <span class="md-cell-summary-label">Invalid:</span>
    <span id="demo-resource-info-invalid"></span>
  </div>
  <div class="md-cell-summary-row mbsc-flex">
    <span class="md-cell-summary-label">Colors:</span>
    <span id="demo-resource-info-colors"></span>
  </div>
</div>
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-cell-summary-row {
  font-weight: 600;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
.md-cell-summary-label {
  font-weight: 600;
}
.md-cell-summary-popup .mbsc-popup {
  min-width: 150px;
}
`,
};
