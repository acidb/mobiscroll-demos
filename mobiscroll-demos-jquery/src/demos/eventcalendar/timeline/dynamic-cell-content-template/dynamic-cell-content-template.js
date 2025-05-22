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

    $(function () {
      var calendar = $('#demo-dynamic-cell-content')
        .mobiscroll()
        .eventcalendar({
          // drag,
          // need to remove
          // clickToCreate: true,
          extendDefaultEvent: function (args) {
            return {
              end: new Date(args.start.getTime() + 2 * 3600000),
            };
          },
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
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
            var colorClass = 'event-badge-' + (classMap[hrs] || 'default');

            return (
              '<div class="event-badge ' +
              colorClass +
              '">' +
              hrs +
              'h/8h' +
              '</div>' +
              '<button class="add-event-btn" mbsc-button data-icon="plus" data-variant="outline"></button>'
            );
          },

          onCellHoverIn: function (args) {
            hoveredDate = args.date;
            hoveredResource = args.resource;
            hoveredCellEventCount = args.events?.length || 0;
          },
          onEventCreate: function () {
            if (hoveredCellEventCount >= 4) {
              mobiscroll.toast({ message: 'Max 4 events per cell' });
              return false;
            }
          },
          onInit: function () {
            mobiscroll.setOptions({
              dragToCreate: false,
              dragToMove: false,
              dragToResize: false,
            });
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,2)',
              end: 'dyndatetime(y,m,d,4)',
              title: 'Event 1',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,4)',
              end: 'dyndatetime(y,m,d,6)',
              title: 'Event 2',
              resource: 3,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#e20000',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#76e083',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#e25dd2',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#1dab2f',
            },
            // {
            //   id: 6,
            //   name: 'Resource F',
            //   color: '#d6d145',
            // },
            // {
            //   id: 7,
            //   name: 'Resource G',
            //   color: '#34c8e0',
            // },
            // {
            //   id: 8,
            //   name: 'Resource H',
            //   color: '#9dde46',
            // },
            // {
            //   id: 9,
            //   name: 'Resource I',
            //   color: '#166f6f',
            // },
            // {
            //   id: 10,
            //   name: 'Resource J',
            //   color: '#f7961e',
            // },
            // {
            //   id: 11,
            //   name: 'Resource K',
            //   color: '#34c8e0',
            // },
            // {
            //   id: 12,
            //   name: 'Resource L',
            //   color: '#af0000',
            // },
            // {
            //   id: 13,
            //   name: 'Resource M',
            //   color: '#446f1c',
            // },
            // {
            //   id: 14,
            //   name: 'Resource N',
            //   color: '#073138',
            // },
            // {
            //   id: 15,
            //   name: 'Resource O',
            //   color: '#4caf00',
            // },
          ],
        })
        .mobiscroll('getInst');

      $(document).on('click', '.add-event-btn', function (e) {
        e.stopPropagation();

        if (!hoveredDate || !hoveredResource) return;

        if (hoveredCellEventCount >= 4) {
          mobiscroll.toast({ message: 'Max 4 events per cell' });
          return;
        }

        calendar.addEvent({
          start: hoveredDate,
          end: new Date(hoveredDate.getTime() + 2 * 3600000),
          resource: hoveredResource,
          title: 'New Event',
        });

        hoveredCellEventCount++;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-dynamic-cell-content"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-timeline-events {
  top: 25px;
}
.mbsc-timeline-column {
  position: relative;
  width: 100px;
}

.event-badge {
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 1px 4px;
  font-size: 12px;
  border-radius: 12px;
  max-width: 50px;
}

.event-badge-light {
  background: linear-gradient(135deg, #e0f9e0, #b2f2b2);
  color: #155724;
}
.event-badge-medium {
  background: linear-gradient(135deg, #b2f2b2, #70db70);
}
.event-badge-semi {
  background: linear-gradient(135deg, #70db70, #43c743);
}
.event-badge-full {
  background: linear-gradient(135deg, #43c743, #218838);
}
.event-badge-default {
  background: linear-gradient(135deg, #e2e3e5, #c6c8ca);
  color: #383d41;
}

.add-event-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  opacity: 0;

}
.mbsc-timeline-column:hover .add-event-btn {
  opacity: 1;
  pointer-events: auto;
}
    `,
};
