import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var hoveredDate;
    var hoveredResource;
    var hoveredCellEventCount;

    var iconMap = {
      Review: 'fa-clipboard-check',
      Demo: 'fa-laptop-code',
      Kickoff: 'fa-flag',
      Strategy: 'fa-chess',
      Collab: 'fa-handshake',
      Update: 'fa-upload',
      Discussion: 'fa-comment-dots',
      Planning: 'fa-calendar-alt',
      Retrospect: 'fa-history',
      Onboard: 'fa-user-plus',
    };
    var titles = Object.keys(iconMap);

    $(function () {
      var calendar = $('#demo-dynamic-cell-content')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          extendDefaultEvent: function (args) {
            return {
              title: titles[Math.floor(Math.random() * titles.length)],
              end: new Date(args.start.getTime() + 2 * 3600000),
            };
          },
          cssClass: 'mds-timeline-dynamic-cell-content',
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
              startDay: 1,
              endDay: 5,
              eventList: true,
            },
          },
          renderCell: function (args) {
            var evs = args.events || [];
            var hrs = Math.round(
              evs.reduce(function (s, ev) {
                return s + (new Date(ev.end) - new Date(ev.start)) / 36e5;
              }, 0),
            );
            var classMap = { 2: 'light', 4: 'medium', 6: 'semi', 8: 'full' };
            var colorClass = 'event-badge-text event-badge-' + (classMap[hrs] || 'default');

            var iconHtml = '';
            var addedIcons = new Set();

            for (var i = 0; i < evs.length; i++) {
              var ev = evs[i];
              var matchedKey = Object.keys(iconMap).find(function (key) {
                return ev.title.toLowerCase() === key.toLowerCase();
              });
              if (matchedKey && !addedIcons.has(matchedKey)) {
                iconHtml +=
                  '<div class="mds-timeline-cell-icons-container">' +
                  '<i class="fas ' +
                  iconMap[matchedKey] +
                  ' mds-cell-icon" title="' +
                  ev.title +
                  '"></i>' +
                  '</div>';
                addedIcons.add(matchedKey);
              }
            }

            return (
              '<div class="event-badge ' +
              colorClass +
              '">' +
              hrs +
              'h / 8h</div>' +
              '<button class="add-event-btn"><span class="add-icon">+</span></button>' +
              '<div class="mds-cell-icon-wrapper">' +
              iconHtml +
              '</div>'
            );
          },
          renderScheduleEventContent: function (event) {
            var hours = Math.round((event.endDate - event.startDate) / 36e5);
            return '<div class="mds-simple-event">' + event.title + ' - ' + hours + 'h</div>';
          },
          onCellHoverIn: function (args) {
            hoveredDate = args.date;
            hoveredResource = args.resource;
            hoveredCellEventCount = args.events?.length || 0;
          },
          onEventCreate: function () {
            if (hoveredCellEventCount >= 4) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Limit reached.',
              });
              return false;
            }
          },
          // Wihtout the // drag comment, the drag works on the site
          onInit: function () {
            mobiscroll.setOptions({
              dragToCreate: false,
              dragToMove: false,
              dragToResize: false,
            });
          },
          data: [
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Review', resource: 1 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Demo', resource: 1 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Kickoff', resource: 1 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Strategy', resource: 4 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Collab', resource: 4 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Update', resource: 4 },
            { start: 'dyndatetime(y,m,d+7,0,0)', end: 'dyndatetime(y,m,d+7,2,0)', title: 'Discussion', resource: 2 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Planning', resource: 2 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Retrospect', resource: 2 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Demo', resource: 2 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Collab', resource: 3 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Strategy', resource: 3 },
            { start: 'dyndatetime(y,m,d+6,0,0)', end: 'dyndatetime(y,m,d+6,2,0)', title: 'Update', resource: 3 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Demo', resource: 2 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Planning', resource: 2 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Discussion', resource: 3 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Retrospect', resource: 3 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Strategy', resource: 3 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Onboard', resource: 1 },
            { start: 'dyndatetime(y,m,d-1,0,0)', end: 'dyndatetime(y,m,d-1,2,0)', title: 'Collab', resource: 1 },
            { start: 'dyndatetime(y,m,d+0,0,0)', end: 'dyndatetime(y,m,d+0,2,0)', title: 'Demo', resource: 1 },
            { start: 'dyndatetime(y,m,d+0,0,0)', end: 'dyndatetime(y,m,d+0,2,0)', title: 'Planning', resource: 1 },
            { start: 'dyndatetime(y,m,d+0,0,0)', end: 'dyndatetime(y,m,d+0,2,0)', title: 'Update', resource: 1 },
            { start: 'dyndatetime(y,m,d+1,0,0)', end: 'dyndatetime(y,m,d+1,2,0)', title: 'Collab', resource: 3 },
            { start: 'dyndatetime(y,m,d+1,0,0)', end: 'dyndatetime(y,m,d+1,2,0)', title: 'Demo', resource: 3 },
            { start: 'dyndatetime(y,m,d+1,0,0)', end: 'dyndatetime(y,m,d+1,2,0)', title: 'Strategy', resource: 3 },
            { start: 'dyndatetime(y,m,d+1,0,0)', end: 'dyndatetime(y,m,d+1,2,0)', title: 'Demo', resource: 3 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Retrospect', resource: 4 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Demo', resource: 4 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Retrospect', resource: 4 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Onboard', resource: 4 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Discussion', resource: 1 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Planning', resource: 1 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Update', resource: 1 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Collab', resource: 3 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Update', resource: 3 },
            { start: 'dyndatetime(y,m,d+3,0,0)', end: 'dyndatetime(y,m,d+3,2,0)', title: 'Planning', resource: 3 },
            { start: 'dyndatetime(y,m,d+4,0,0)', end: 'dyndatetime(y,m,d+4,2,0)', title: 'Demo', resource: 2 },
            { start: 'dyndatetime(y,m,d+4,0,0)', end: 'dyndatetime(y,m,d+4,2,0)', title: 'Strategy', resource: 2 },
            { start: 'dyndatetime(y,m,d+4,0,0)', end: 'dyndatetime(y,m,d+4,2,0)', title: 'Demo', resource: 2 },
            { start: 'dyndatetime(y,m,d+5,0,0)', end: 'dyndatetime(y,m,d+5,2,0)', title: 'Onboard', resource: 4 },
            { start: 'dyndatetime(y,m,d+5,0,0)', end: 'dyndatetime(y,m,d+5,2,0)', title: 'Planning', resource: 4 },
            { start: 'dyndatetime(y,m,d+5,0,0)', end: 'dyndatetime(y,m,d+5,2,0)', title: 'Retrospect', resource: 4 },
            { start: 'dyndatetime(y,m,d+2,0,0)', end: 'dyndatetime(y,m,d+2,2,0)', title: 'Discussion', resource: 2 },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource A',
            },
            {
              id: 2,
              name: 'Resource B',
            },
            {
              id: 3,
              name: 'Resource C',
            },
            {
              id: 4,
              name: 'Resource D',
            },
          ],
        })
        .mobiscroll('getInst');

      $(document).on('click', '.add-event-btn', function () {
        if (!hoveredDate || !hoveredResource) return;

        if (hoveredCellEventCount >= 4) {
          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'Limit reached.',
          });
          return;
        }

        calendar.addEvent({
          start: hoveredDate,
          end: new Date(hoveredDate.getTime() + 2 * 3600000),
          resource: hoveredResource,
          title: titles[Math.floor(Math.random() * titles.length)],
        });

        hoveredCellEventCount++;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<div id="demo-dynamic-cell-content"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-timeline-dynamic-cell-content .mbsc-timeline-events {
  top: 25px;
}

.mds-timeline-dynamic-cell-content .mbsc-timeline-column {
  position: relative;
  width: 110px;
}

.mds-timeline-dynamic-cell-content .mbsc-timeline-row-gutter {
  height: 55px;
}

.mds-timeline-dynamic-cell-content .mbsc-timeline-column:hover .add-event-btn {
  opacity: 1;
  pointer-events: auto;
}

.event-badge {
  position: relative;
  top: 6px;
  left: 4px;
  display: inline-block;
  padding: 1px 4px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  max-width: 80px;
  color: #000;
  background: #f9f9f9;
  overflow: hidden;
  z-index: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.event-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: skewX(-15deg);
  z-index: -1;
}

.event-badge-light::before {
  width: 25%;
  background: #a3e4a1 
}

.event-badge-medium::before {
  width: 50%;
  background: #fff4a3 
}

.event-badge-semi::before {
  width: 75%;
  background: #ffcf9f
}

.event-badge-full::before {
  width: 100%;
  background: #ff9c9c
}

.event-badge-text {
  color: black;
}

.add-event-btn {
  position: absolute;
  inset: 6px 4px auto auto;
  width: 17px;
  height: 17px;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg,rgb(73, 73, 73),rgb(22, 21, 21));
  transition: transform 0.2s ease;
}

.add-icon {
  padding-bottom: 4px;
  font-size: 22px;
}

.add-event-btn:hover {
  transform: scale(1.10);
}

.mds-timeline-cell-icons-container {
  width: 21px;
  height: 17px;
  display: flex;
  // padding: 4px 6px;
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
}

.mds-cell-icon-wrapper {
  position: absolute;
  inset: auto auto 4px 4px;
  display: flex;
  gap: 6px;
}

.mds-cell-icon {
  font-size: 13px;
  padding: 2px;
}

.mbsc-ios-dark .mds-cell-icon,
.mbsc-material-dark .mds-cell-icon,
.mbsc-windows-dark .mds-cell-icon {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
}
    `,
};
