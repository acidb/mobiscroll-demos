import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var myResources = [
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
    ];

    var myEvents = [
      {
        id: 1,
        resource: 1,
        title: 'Review',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 2,
        resource: 1,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 3,
        resource: 1,
        title: 'Kickoff',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 4,
        resource: 4,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 5,
        resource: 4,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 6,
        resource: 4,
        title: 'Update',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 7,
        resource: 2,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d + 7, 0, 0)',
        end: 'dyndatetime(y, m, d + 7, 2, 0)',
      },
      {
        id: 8,
        resource: 2,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 9,
        resource: 2,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 10,
        resource: 2,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 11,
        resource: 3,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 12,
        resource: 3,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 13,
        resource: 3,
        title: 'Update',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 14,
        resource: 4,
        title: 'Kickoff',
        start: 'dyndatetime(y, m, d + 6, 0, 0)',
        end: 'dyndatetime(y, m, d + 6, 2, 0)',
      },
      {
        id: 15,
        resource: 2,
        title: 'Demo',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 16,
        resource: 2,
        title: 'Planning',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 17,
        resource: 3,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 18,
        resource: 3,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 19,
        resource: 3,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      //<hidden>
      {
        id: 20,
        resource: 1,
        title: 'Onboard',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 21,
        resource: 1,
        title: 'Collab',
        start: 'dyndatetime(y, m, d - 1, 0, 0)',
        end: 'dyndatetime(y, m, d - 1, 2, 0)',
      },
      {
        id: 22,
        resource: 1,
        title: 'Demo',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 23,
        resource: 1,
        title: 'Planning',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 24,
        resource: 1,
        title: 'Update',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 25,
        resource: 2,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 26,
        resource: 2,
        title: 'Demo',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 27,
        resource: 3,
        title: 'Kickoff',
        start: 'dyndatetime(y, m, d, 0, 0)',
        end: 'dyndatetime(y, m, d, 2, 0)',
      },
      {
        id: 28,
        resource: 3,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 1, 0, 0)',
        end: 'dyndatetime(y, m, d + 1, 2, 0)',
      },
      {
        id: 29,
        resource: 3,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 1, 0, 0)',
        end: 'dyndatetime(y, m, d + 1, 2, 0)',
      },
      {
        id: 30,
        resource: 3,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 1, 0, 0)',
        end: 'dyndatetime(y, m, d + 1, 2, 0)',
      },
      {
        id: 31,
        resource: 3,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 1, 0, 0)',
        end: 'dyndatetime(y, m, d + 1, 2, 0)',
      },
      {
        id: 32,
        resource: 4,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 33,
        resource: 4,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 34,
        resource: 4,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 35,
        resource: 4,
        title: 'Onboard',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 36,
        resource: 1,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 37,
        resource: 3,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 38,
        resource: 3,
        title: 'Update',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 39,
        resource: 3,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 3, 0, 0)',
        end: 'dyndatetime(y, m, d + 3, 2, 0)',
      },
      {
        id: 40,
        resource: 1,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 41,
        resource: 1,
        title: 'Update',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 42,
        resource: 2,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 43,
        resource: 4,
        title: 'Onboard',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 44,
        resource: 4,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 45,
        resource: 4,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 46,
        resource: 3,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 47,
        resource: 3,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 5, 0, 0)',
        end: 'dyndatetime(y, m, d + 5, 2, 0)',
      },
      {
        id: 48,
        resource: 2,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 4, 0, 0)',
        end: 'dyndatetime(y, m, d + 4, 2, 0)',
      },
      {
        id: 49,
        resource: 2,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 4, 0, 0)',
        end: 'dyndatetime(y, m, d + 4, 2, 0)',
      },
      {
        id: 50,
        resource: 1,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d + 4, 0, 0)',
        end: 'dyndatetime(y, m, d + 4, 2, 0)',
      },
      {
        id: 51,
        resource: 2,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d + 2, 0, 0)',
        end: 'dyndatetime(y, m, d + 2, 2, 0)',
      },
      {
        id: 52,
        resource: 3,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 10, 0, 0)',
        end: 'dyndatetime(y, m, d + 10, 2, 0)',
      },
      {
        id: 53,
        resource: 1,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 10, 0, 0)',
        end: 'dyndatetime(y, m, d + 10, 2, 0)',
      },
      {
        id: 54,
        resource: 3,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 10, 0, 0)',
        end: 'dyndatetime(y, m, d + 10, 2, 0)',
      },
      {
        id: 55,
        resource: 3,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 56,
        resource: 2,
        title: 'Kickoff',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 57,
        resource: 2,
        title: 'Kickoff',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 58,
        resource: 2,
        title: 'Update',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 59,
        resource: 4,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 60,
        resource: 4,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 61,
        resource: 4,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 62,
        resource: 4,
        title: 'Discussion',
        start: 'dyndatetime(y, m, d + 11, 0, 0)',
        end: 'dyndatetime(y, m, d + 11, 2, 0)',
      },
      {
        id: 63,
        resource: 1,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 64,
        resource: 1,
        title: 'Retrospect',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 65,
        resource: 1,
        title: 'Review',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 66,
        resource: 3,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 67,
        resource: 3,
        title: 'Demo',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 68,
        resource: 3,
        title: 'Collab',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      {
        id: 69,
        resource: 2,
        title: 'Strategy',
        start: 'dyndatetime(y, m, d + 12, 0, 0)',
        end: 'dyndatetime(y, m, d + 12, 2, 0)',
      },
      //</hidden>
    ];

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
          data: myEvents,
          resources: myResources,
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
  background: #ff9c9c
  }
  
.event-badge-medium::before {
  width: 50%;
  background: #ffcf9f
}
    
.event-badge-semi::before {
  width: 75%;
  background: #fff4a3 
}
      
.event-badge-full::before {
  width: 100%;
  background: #a3e4a1 
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
