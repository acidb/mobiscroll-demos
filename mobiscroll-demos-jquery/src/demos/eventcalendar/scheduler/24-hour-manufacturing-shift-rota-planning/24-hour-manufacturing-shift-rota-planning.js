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
          cssClass: 'mds-24-hour-manufacturing-calendar',
          data: [
            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d-6,6)', end: 'dyndatetime(y,m,d-6,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d-6,14)', end: 'dyndatetime(y,m,d-6,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-6,22)', end: 'dyndatetime(y,m,d-5,6)' },
            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d-5,6)', end: 'dyndatetime(y,m,d-5,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d-5,14)', end: 'dyndatetime(y,m,d-5,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-5,22)', end: 'dyndatetime(y,m,d-4,6)' },
            //<hide-comment>
            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d-4,6)', end: 'dyndatetime(y,m,d-4,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-4,22)', end: 'dyndatetime(y,m,d-3,6)' },

            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d-3,6)', end: 'dyndatetime(y,m,d-3,14)' },
            { resource: 'A', title: 'Swing Shift', start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-3,22)', end: 'dyndatetime(y,m,d-2,6)' },
            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d-2,6)', end: 'dyndatetime(y,m,d-2,14)' },
            { resource: 'A', title: 'Swing Shift', start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-2,22)', end: 'dyndatetime(y,m,d-1,6)' },
            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d-1,6)', end: 'dyndatetime(y,m,d-1,14)' },
            { resource: 'A', title: 'Swing Shift', start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-1,22)', end: 'dyndatetime(y,m,d,6)' },

            { resource: 'B', title: 'Day Shift', start: 'dyndatetime(y,m,d,6)', end: 'dyndatetime(y,m,d,14)' },
            { resource: 'C', title: 'Swing Shift', start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d,22)', end: 'dyndatetime(y,m,d+1,6)' },
            { resource: 'B', title: 'Day Shift', start: 'dyndatetime(y,m,d+1,6)', end: 'dyndatetime(y,m,d+1,14)' },
            { resource: 'C', title: 'Swing Shift', start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+1,22)', end: 'dyndatetime(y,m,d+2,6)' },
            { resource: 'B', title: 'Day Shift', start: 'dyndatetime(y,m,d+2,6)', end: 'dyndatetime(y,m,d+2,14)' },
            { resource: 'C', title: 'Swing Shift', start: 'dyndatetime(y,m,d+2,14)', end: 'dyndatetime(y,m,d+2,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+2,22)', end: 'dyndatetime(y,m,d+3,6)' },

            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d+3,6)', end: 'dyndatetime(y,m,d+3,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+3,22)', end: 'dyndatetime(y,m,d+4,6)' },
            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d+4,6)', end: 'dyndatetime(y,m,d+4,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+4,14)', end: 'dyndatetime(y,m,d+4,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+4,22)', end: 'dyndatetime(y,m,d+5,6)' },
            { resource: 'A', title: 'Day Shift', start: 'dyndatetime(y,m,d+5,6)', end: 'dyndatetime(y,m,d+5,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+5,14)', end: 'dyndatetime(y,m,d+5,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+5,22)', end: 'dyndatetime(y,m,d+6,6)' },

            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d+6,6)', end: 'dyndatetime(y,m,d+6,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+6,14)', end: 'dyndatetime(y,m,d+6,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+6,22)', end: 'dyndatetime(y,m,d+7,6)' },
            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d+7,6)', end: 'dyndatetime(y,m,d+7,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+7,14)', end: 'dyndatetime(y,m,d+7,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+7,22)', end: 'dyndatetime(y,m,d+8,6)' },
            { resource: 'C', title: 'Day Shift', start: 'dyndatetime(y,m,d+8,6)', end: 'dyndatetime(y,m,d+8,14)' },
            { resource: 'B', title: 'Swing Shift', start: 'dyndatetime(y,m,d+8,14)', end: 'dyndatetime(y,m,d+8,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+8,22)', end: 'dyndatetime(y,m,d+9,6)' },
            //</hide-comment>
          ],
          dragToMove: true,
          dragToCreate: false,
          clickToCreate: false,
          dragToResize: false,
          dragTimeStep: 480,
          dragStepSync: true,
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
              timeCellStep: 120,
              timeLabelStep: 120,
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-24-hour-manufacturing-shift-rota-planning"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-24-hour-manufacturing-calendar .mbsc-schedule-day-limit {
  border-top-color: #d38231;
  border-top-style: dashed;
  border-top-width: 1px;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-time-wrapper {
  height: 2em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-item {
  height: 2em;
}
  `,
};
