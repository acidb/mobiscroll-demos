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
      var myEvents = [
        { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,11)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,12)', title: 'Demo' },
        { start: 'dyndatetime(y,m,d+3,8)', end: 'dyndatetime(y,m,d+3,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,16)', title: 'Strategy' },
        { start: 'dyndatetime(y,m,d+4,9)', end: 'dyndatetime(y,m,d+4,11)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d+4,13)', end: 'dyndatetime(y,m,d+4,15)', title: 'Integration' },
        { start: 'dyndatetime(y,m,d+5,10)', end: 'dyndatetime(y,m,d+5,12)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+6,12)', end: 'dyndatetime(y,m,d+6,14)', title: 'Planning' },
        { start: 'dyndatetime(y,m,d+7,11)', end: 'dyndatetime(y,m,d+7,13)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+8,15)', end: 'dyndatetime(y,m,d+8,17)', title: 'Sync' },
        { start: 'dyndatetime(y,m,d+8,10)', end: 'dyndatetime(y,m,d+8,12)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d+9,10)', end: 'dyndatetime(y,m,d+9,12)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d+10,14)', end: 'dyndatetime(y,m,d+10,16)', title: 'Collab' },
        { start: 'dyndatetime(y,m,d+11,8)', end: 'dyndatetime(y,m,d+11,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d+12,9)', end: 'dyndatetime(y,m,d+12,11)', title: 'Meeting' },
        { start: 'dyndatetime(y,m,d+13,10)', end: 'dyndatetime(y,m,d+13,12)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d+14,15)', end: 'dyndatetime(y,m,d+14,17)', title: 'Review' },
        { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,12)', title: 'Planning' },
        { start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,17)', title: 'Talk' },
        { start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,11)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,16)', title: 'Retrospective' },
        { start: 'dyndatetime(y,m,d-5,8)', end: 'dyndatetime(y,m,d-5,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d-6,15)', end: 'dyndatetime(y,m,d-6,17)', title: 'Review' },
        { start: 'dyndatetime(y,m,d-7,13)', end: 'dyndatetime(y,m,d-7,15)', title: 'Collab' },
        { start: 'dyndatetime(y,m,d-8,9)', end: 'dyndatetime(y,m,d-8,11)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d-9,16)', end: 'dyndatetime(y,m,d-9,18)', title: 'Discussion' },
        { start: 'dyndatetime(y,m,d-10,14)', end: 'dyndatetime(y,m,d-10,16)', title: 'Update' },
        { start: 'dyndatetime(y,m,d-11,10)', end: 'dyndatetime(y,m,d-11,12)', title: 'Sprint' },
        { start: 'dyndatetime(y,m,d-12,13)', end: 'dyndatetime(y,m,d-12,15)', title: 'Onboarding' },
        { start: 'dyndatetime(y,m,d-13,9)', end: 'dyndatetime(y,m,d-13,11)', title: 'Strategy' },
        { start: 'dyndatetime(y,m,d-14,8)', end: 'dyndatetime(y,m,d-14,10)', title: 'Meeting' },
      ];

      $('#demo-cell-content-template')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          cssClass: 'mds-scheduler-cell-content-template',
          view: {
            schedule: { type: 'week', startTime: '08:00', endTime: '18:00' },
          },
          renderCell: function (args) {
            var h = args.date.getHours();
            var d = args.date.getDay();
            var icons = [];

            (d === 1 || d === 5) &&
              h === 9 &&
              icons.push(
                { icon: 'fa-chess', title: d === 1 ? 'Launch Meeting' : 'Sprint Review' },
                { icon: 'fa-coffee', title: 'Coffee Break' },
              );
            h === 13 && icons.push({ icon: 'fa-utensils', title: 'Lunch Time' });
            d >= 1 && d <= 5 && h === 17 && icons.push({ icon: 'fa-running', title: 'Wrap Up' });
            d === 2 && (h === 10 || h === 11) && icons.push({ icon: 'fa-chart-line', title: 'Dev Sync' });
            h % 4 === 0 && icons.push({ icon: 'fa-tools', title: 'Health Check' });
            h === 3 && icons.push({ icon: 'fa-wifi', title: 'Network Probe' });
            h === 2 && icons.push({ icon: 'fa-database', title: 'Nightly Backup' });
            d === 5 && h === 2 && icons.push({ icon: 'fa-lock', title: 'Security Patch' });
            d === 3 && h === 14 && icons.push({ icon: 'fa-rocket', title: 'Deploy Window' });
            if (!icons.length) return '';
            return (
              '<div class="mds-scheduler-cell-icons-wrapper"><div class="mds-scheduler-cell-icons">' +
              icons
                .map(function (i) {
                  return '<div class="mds-scheduler-cell-icon" title="' + i.title + '"><i class="fas ' + i.icon + '"></i></div>';
                })
                .join('') +
              '</div></div>'
            );
          },

          /// to delete
          onInit: function () {
            mobiscroll.setOptions({
              dragToCreate: true,
              dragToMove: true,
              dragToResize: true,
              clickToCreate: true,
            });
          },
          data: myEvents,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<div id="demo-cell-content-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-scheduler-cell-content-template .mbsc-schedule-item {
  min-height: 70px;
}

.mds-scheduler-cell-icons-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
  display: flex;
  align-items: center; 
  justify-content: center;
}

.mds-scheduler-cell-icons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  height: 100%;        
}

.mds-scheduler-cell-icon {
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 2px 4px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.mds-scheduler-cell-content-template .mbsc-ios-dark .mds-scheduler-cell-icon, 
.mds-scheduler-cell-content-template .mbsc-material-dark .mds-scheduler-cell-icon, 
.mds-scheduler-cell-content-template .mbsc-windows-dark .mds-scheduler-cell-icon {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  box-shadow:
    0 0 3px rgba(255, 255, 255, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

.mds-scheduler-cell-content-template .mbsc-schedule-events {
  margin-right: 28px;
}

.mds-scheduler-cell-icon:hover {
  transform: scale(1.2);
}
  `,
};
