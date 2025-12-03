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
      $('#demo-24-hour-manufacturing-shift-rota-planning')
        .mobiscroll()
        .eventcalendar({
          data: [
            { resource: 'A', title: 'Shift 1', start: 'dyndatetime(y,m,d-6,6)', end: 'dyndatetime(y,m,d-6,14)' },
            { resource: 'B', title: 'Shift 2', start: 'dyndatetime(y,m,d-6,14)', end: 'dyndatetime(y,m,d-6,22)' },
            { resource: 'C', title: 'Shift 3', start: 'dyndatetime(y,m,d-6,22)', end: 'dyndatetime(y,m,d-5,6)' },
            { resource: 'A', title: 'Shift 4', start: 'dyndatetime(y,m,d-5,6)', end: 'dyndatetime(y,m,d-5,14)' },
            { resource: 'B', title: 'Shift 5', start: 'dyndatetime(y,m,d-5,14)', end: 'dyndatetime(y,m,d-5,22)' },
            { resource: 'C', title: 'Shift 6', start: 'dyndatetime(y,m,d-5,22)', end: 'dyndatetime(y,m,d-4,6)' },
            //<hide-comment>
            { resource: 'A', title: 'Shift 7', start: 'dyndatetime(y,m,d-4,6)', end: 'dyndatetime(y,m,d-4,14)' },
            { resource: 'B', title: 'Shift 8', start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,22)' },
            { resource: 'C', title: 'Shift 9', start: 'dyndatetime(y,m,d-4,22)', end: 'dyndatetime(y,m,d-3,6)' },

            { resource: 'C', title: 'Shift 10', start: 'dyndatetime(y,m,d-2,6)', end: 'dyndatetime(y,m,d-2,14)' },
            { resource: 'A', title: 'Shift 11', start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,22)' },
            { resource: 'B', title: 'Shift 12', start: 'dyndatetime(y,m,d-2,22)', end: 'dyndatetime(y,m,d-1,6)' },
            { resource: 'C', title: 'Shift 13', start: 'dyndatetime(y,m,d-1,6)', end: 'dyndatetime(y,m,d-1,14)' },
            { resource: 'A', title: 'Shift 14', start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,22)' },
            { resource: 'B', title: 'Shift 15', start: 'dyndatetime(y,m,d-1,22)', end: 'dyndatetime(y,m,d,6)' },
            { resource: 'C', title: 'Shift 16', start: 'dyndatetime(y,m,d,6)', end: 'dyndatetime(y,m,d,14)' },
            { resource: 'A', title: 'Shift 17', start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,22)' },
            { resource: 'B', title: 'Shift 18', start: 'dyndatetime(y,m,d,22)', end: 'dyndatetime(y,m,d+1,6)' },

            { resource: 'B', title: 'Shift 19', start: 'dyndatetime(y,m,d+2,6)', end: 'dyndatetime(y,m,d+2,14)' },
            { resource: 'C', title: 'Shift 20', start: 'dyndatetime(y,m,d+2,14)', end: 'dyndatetime(y,m,d+2,22)' },
            { resource: 'A', title: 'Shift 21', start: 'dyndatetime(y,m,d+2,22)', end: 'dyndatetime(y,m,d+3,6)' },
            { resource: 'B', title: 'Shift 22', start: 'dyndatetime(y,m,d+3,6)', end: 'dyndatetime(y,m,d+3,14)' },
            { resource: 'C', title: 'Shift 23', start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,22)' },
            { resource: 'A', title: 'Shift 24', start: 'dyndatetime(y,m,d+3,22)', end: 'dyndatetime(y,m,d+4,6)' },
            { resource: 'B', title: 'Shift 25', start: 'dyndatetime(y,m,d+4,6)', end: 'dyndatetime(y,m,d+4,14)' },
            { resource: 'C', title: 'Shift 26', start: 'dyndatetime(y,m,d+4,14)', end: 'dyndatetime(y,m,d+4,22)' },
            { resource: 'A', title: 'Shift 27', start: 'dyndatetime(y,m,d+4,22)', end: 'dyndatetime(y,m,d+5,6)' },

            { resource: 'A', title: 'Shift 28', start: 'dyndatetime(y,m,d+6,6)', end: 'dyndatetime(y,m,d+6,14)' },
            { resource: 'B', title: 'Shift 29', start: 'dyndatetime(y,m,d+6,14)', end: 'dyndatetime(y,m,d+6,22)' },
            { resource: 'C', title: 'Shift 30', start: 'dyndatetime(y,m,d+6,22)', end: 'dyndatetime(y,m,d+7,6)' },
            { resource: 'A', title: 'Shift 31', start: 'dyndatetime(y,m,d+7,6)', end: 'dyndatetime(y,m,d+7,14)' },
            { resource: 'B', title: 'Shift 32', start: 'dyndatetime(y,m,d+7,14)', end: 'dyndatetime(y,m,d+7,22)' },
            { resource: 'C', title: 'Shift 33', start: 'dyndatetime(y,m,d+7,22)', end: 'dyndatetime(y,m,d+8,6)' },
            { resource: 'A', title: 'Shift 34', start: 'dyndatetime(y,m,d+8,6)', end: 'dyndatetime(y,m,d+8,14)' },
            { resource: 'B', title: 'Shift 35', start: 'dyndatetime(y,m,d+8,14)', end: 'dyndatetime(y,m,d+8,22)' },
            { resource: 'C', title: 'Shift 36', start: 'dyndatetime(y,m,d+8,22)', end: 'dyndatetime(y,m,d+9,6)' },

            { resource: 'C', title: 'Shift 37', start: 'dyndatetime(y,m,d+10,6)', end: 'dyndatetime(y,m,d+10,14)' },
            { resource: 'B', title: 'Shift 38', start: 'dyndatetime(y,m,d+10,14)', end: 'dyndatetime(y,m,d+10,22)' },
            { resource: 'A', title: 'Shift 39', start: 'dyndatetime(y,m,d+10,22)', end: 'dyndatetime(y,m,d+11,6)' },
            { resource: 'C', title: 'Shift 40', start: 'dyndatetime(y,m,d+11,6)', end: 'dyndatetime(y,m,d+11,14)' },
            { resource: 'B', title: 'Shift 41', start: 'dyndatetime(y,m,d+11,14)', end: 'dyndatetime(y,m,d+11,22)' },
            { resource: 'A', title: 'Shift 42', start: 'dyndatetime(y,m,d+11,22)', end: 'dyndatetime(y,m,d+12,6)' },
            { resource: 'C', title: 'Shift 40', start: 'dyndatetime(y,m,d+12,6)', end: 'dyndatetime(y,m,d+12,14)' },
            { resource: 'B', title: 'Shift 41', start: 'dyndatetime(y,m,d+12,14)', end: 'dyndatetime(y,m,d+12,22)' },
            { resource: 'A', title: 'Shift 42', start: 'dyndatetime(y,m,d+12,22)', end: 'dyndatetime(y,m,d+13,6)' },
            //</hide-comment>
          ],
          dragToMove: true,
          dragToCreate: true,
          dragTimeStep: 480,
          dragStepStart: '06:00',
          groupBy: 'date',
          resources: [
            { id: 'A', name: 'Crew A', color: '#f7c4b4' },
            { id: 'B', name: 'Crew B', color: '#c6f1c9' },
            { id: 'C', name: 'Crew C', color: '#e8d0ef' },
          ],
          view: {
            schedule: {
              type: 'week',
              startTime: '06:00',
              endTime: '06:00+1',
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-24-hour-manufacturing-shift-rota-planning" class="md-24-hour-manufacturing-shift-rota-planning"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-24-hour-manufacturing-shift-rota-planning .mbsc-schedule-day-limit {
  border-top-color: #d38231;
  border-top-style: dashed;
}
  `,
};
