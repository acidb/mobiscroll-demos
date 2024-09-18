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
      $('#demo-load-events-on-scroll')
        .mobiscroll()
        .eventcalendar({
          dragToCreate: true,
          dragToResize: true,
          dragToMove: true,
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'hour',
            },
          },
          resources: [
            { id: 1, name: 'Resource 1', color: '#FF5733' },
            { id: 2, name: 'Resource 2', color: '#33FF57' },
            { id: 3, name: 'Resource 3', color: '#3357FF' },
            { id: 4, name: 'Resource 4', color: '#FF33A6' },
            { id: 5, name: 'Resource 5', color: '#FFC300' },
            { id: 6, name: 'Resource 6', color: '#DAF7A6' },
            { id: 7, name: 'Resource 7', color: '#581845' },
            { id: 8, name: 'Resource 8', color: '#900C3F' },
            { id: 9, name: 'Resource 9', color: '#C70039' },
            { id: 10, name: 'Resource 10', color: '#FF5733' },
            { id: 11, name: 'Resource 11', color: '#33FFBD' },
            { id: 12, name: 'Resource 12', color: '#FFC300' },
            { id: 13, name: 'Resource 13', color: '#FF33F6' },
            { id: 14, name: 'Resource 14', color: '#33FF57' },
            { id: 15, name: 'Resource 15', color: '#33A6FF' },
          ],
          onVirtualLoading: function (args, inst) {
            // console.log('Virtual loading', args, getScrollEvents(args.viewStart, args.viewEnd));
            inst.setEvents(getScrollEvents(args.viewStart, args.viewEnd));
          },
        });
    });

    function getScrollEvents(start, end) {
      var startDate = new Date(start);
      startDate.setHours(0, 0, 0, 0);
      var endDate = new Date(end);
      endDate.setHours(23, 59, 59, 99);

      var events = [];

      function generateEventIndex(date, resourceId) {
        var baseDate = new Date(2020, 0, 1);
        var timeDiff = Math.floor((date - baseDate) / (1000 * 60 * 60));
        return timeDiff + resourceId;
      }

      function generateEvent(date, resourceId) {
        var isEven = resourceId % 2 === 0 ? 1 : -1;
        var hoursOffset = (date.getHours() + resourceId * isEven) % 24;
        var startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hoursOffset, 30);
        var endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Math.min(hoursOffset + 3, 23));
        var eventIndex = generateEventIndex(date, resourceId);

        return {
          start: startTime,
          end: endTime,
          title: 'Event ' + eventIndex,
          resource: resourceId,
        };
      }

      // Loop through the time range in 6-hour increments
      for (var d = new Date(startDate); d <= endDate; d.setHours(d.getHours() + 6)) {
        for (var resourceId = 1; resourceId <= 15; resourceId++) {
          events.push(generateEvent(new Date(d), resourceId));
        }
      }

      return events;
    }
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-load-events-on-scroll"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
