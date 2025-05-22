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
      var dateTime;
      var formatDate = mobiscroll.formatDate;

      var myResources = [
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
        {
          id: 6,
          name: 'Resource F',
          color: '#d6d145',
        },
        {
          id: 7,
          name: 'Resource G',
          color: '#34c8e0',
        },
        {
          id: 8,
          name: 'Resource H',
          color: '#9dde46',
        },
        {
          id: 9,
          name: 'Resource I',
          color: '#166f6f',
        },
        {
          id: 10,
          name: 'Resource J',
          color: '#f7961e',
        },
        {
          id: 11,
          name: 'Resource K',
          color: '#34c8e0',
        },
        {
          id: 12,
          name: 'Resource L',
          color: '#af0000',
        },
        {
          id: 13,
          name: 'Resource M',
          color: '#446f1c',
        },
        {
          id: 14,
          name: 'Resource N',
          color: '#073138',
        },
        {
          id: 15,
          name: 'Resource O',
          color: '#4caf00',
        },
      ];

      var myEvents = [
        {
          start: 'dyndatetime(y,m,2)',
          end: 'dyndatetime(y,m,5)',
          title: 'Event 1',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,10,9)',
          end: 'dyndatetime(y,m,15,15)',
          title: 'Event 2',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,12)',
          end: 'dyndatetime(y,m,14)',
          title: 'Event 3',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,15,7)',
          end: 'dyndatetime(y,m,20,12)',
          title: 'Event 4',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,3)',
          end: 'dyndatetime(y,m,10)',
          title: 'Event 5',
          resource: 6,
        },
        {
          start: 'dyndatetime(y,m,10,8)',
          end: 'dyndatetime(y,m,11,20)',
          title: 'Event 6',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,22)',
          end: 'dyndatetime(y,m,28)',
          title: 'Event 7',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,8)',
          end: 'dyndatetime(y,m,13)',
          title: 'Event 8',
          resource: 15,
        },
        {
          start: 'dyndatetime(y,m,25)',
          end: 'dyndatetime(y,m,27)',
          title: 'Event 9',
          resource: 10,
        },
        {
          start: 'dyndatetime(y,m,20)',
          end: 'dyndatetime(y,m,23)',
          title: 'Event 10',
          resource: 12,
        },
      ];

      var $tooltip = $('#demo-event-tooltip-popup');
      var calendar = $('#demo-highlight-hover')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
            },
          },
          data: myEvents,
          resources: myResources,
          onCellHoverIn: function (args) {
            var res = myResources.filter(function (r) {
              return r.id === args.resource;
            })[0];
            // use class
            $('#demo-highlight-tooltip-res-name').text(res.name);
            $('#demo-highlight-tooltip-date').text(mobiscroll.formatDate('MMM DD, YYYY', args.date));

            tooltip.setOptions({ anchor: args.domEvent.target });
            tooltip.open();

            dateTime = args.date;
            myResources.forEach(function (r) {
              r.cssClass = r.id === args.resource ? 'mds-highlight-row-hover' : '';
            });
            calendar.setOptions({ resources: myResources.slice() });
          },
          onCellHoverOut: function () {
            tooltip.close();
            myResources.forEach(function (r) {
              r.cssClass = '';
            });
            dateTime = null;
            setTimeout(function () {
              calendar.setOptions({ resources: myResources.slice() });
            });
          },
          renderCell: function (args) {
            return dateTime && args.date.getTime() === dateTime.getTime() ? '<div class="mds-highlight-col-hover"></div>' : '';
          },
          renderSidebar: function (resource) {
            return '<div>' + resource.name + ' Sidebar</div>';
          },
          renderDay: function (args) {
            var isHover = dateTime && args.date.getTime() === dateTime.getTime();
            var hoverClass = isHover ? ' mds-highlight-col-hover' : '';
            return '<div class="mds-highlight-day-content ' + hoverClass + '">' + formatDate('DD DDD', args.date) + '</div>';
          },
          renderDayFooter: function (args) {
            var isHover = dateTime && args.date.getTime() === dateTime.getTime();
            var hoverClass = isHover ? ' mds-highlight-col-hover' : '';
            return '<div class="mds-highlight-day-content ' + hoverClass + '">' + formatDate('DD DDD', args.date) + '</div>';
          },
        })
        .mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          scrollLock: false,
          focusOnClose: false,
          closeOnScroll: true,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-highlight-hover"></div>
<div id="demo-event-tooltip-popup" class="mds-highlight-tooltip" style="display: none;">
  <div id="demo-highlight-tooltip-res-name" class="mds-highlight-tooltip-res-name"></div>
  <div id="demo-highlight-tooltip-date" class="mds-highlight-tooltip-date"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
#demo-highlight-hover .mbsc-timeline-sidebar,
#demo-highlight-hover .mbsc-timeline-sidebar-footer-cont,
#demo-highlight-hover .mbsc-timeline-sidebar-header-cont {
  width: 170px;
}

#demo-highlight-hover .mbsc-timeline-sidebar-resource-title {
  font-weight: 500;
}

#demo-highlight-hover .mbsc-eventcalendar-day-cont {
  position: relative;
}

.mds-highlight-row-hover {
  background: rgba(128, 128, 128, 0.2) !important;
}

.mds-highlight-col-hover {
  position: absolute;
  inset: 0;               
  background: rgba(128,128,128,0.2) !important;
  pointer-events: none;   
  box-sizing: border-box;
}

.mds-highlight-day-content {
  font-size: 14px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
}

.mds-highlight-tooltip {
  padding: 5px;
  font-size: 14px;
  line-height: 1.4;
}

.mds-highlight-tooltip-res-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.mds-highlight-tooltip-date {
  color: #888;
}
`,
};
