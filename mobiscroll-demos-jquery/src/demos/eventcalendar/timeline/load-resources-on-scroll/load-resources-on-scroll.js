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
      var resources = [
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
        { id: 16, name: 'Resource 16', color: '#DAF7A6' },
        { id: 17, name: 'Resource 17', color: '#581845' },
        { id: 18, name: 'Resource 18', color: '#900C3F' },
        { id: 19, name: 'Resource 19', color: '#C70039' },
        { id: 20, name: 'Resource 20', color: '#FF33F6' },
        { id: 21, name: 'Resource 21', color: '#FF5733' },
        { id: 22, name: 'Resource 22', color: '#33FF57' },
        { id: 23, name: 'Resource 23', color: '#3357FF' },
        { id: 24, name: 'Resource 24', color: '#FF33A6' },
        { id: 25, name: 'Resource 25', color: '#FFC300' },
      ];

      $('#demo-load-resources-on-scroll')
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
          resources: resources,
          onVirtualLoading: function (args, inst) {
            console.log('onVirtualLoading', args, inst);
            var newData = getScrollEvents(
              args.viewStart,
              args.viewEnd,
              args.resourceStart,
              args.resourceEnd,
              isIdInEnd(args.resourceEnd, inst.getRe) ? resources[resources.length - 1].id : undefined,
            );
            if (newData.resources) {
              resources = resources.concat(newData.resources);
              inst.setOptions({
                resources: resources,
                data: newData.events,
              });
            } else {
              inst.setEvents(newData.events);
            }
          },
        });

      function isIdInEnd(resId) {
        var resIndx = resources.findIndex(function (r) {
          return r.id === resId;
        });
        return resources.length - resIndx <= 15;
      }

      function getScrollEvents(start, end, resStart, resEnd, loadResource) {
        var startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);
        var endDate = new Date(end);
        endDate.setHours(23, 59, 59, 99);
        console.log('getScrollEvents', startDate, endDate);

        var events = [];
        var resources = [];
        var ret = {};

        // Helper function to create a deterministic event index based on date and resourceId
        function generateEventIndex(date, resourceId) {
          var baseDate = new Date(2020, 0, 1); // Arbitrary base date for consistent indexing
          var timeDiff = Math.floor((date - baseDate) / (1000 * 60 * 60)); // Difference in hours
          return timeDiff + resourceId; // Create a unique index based on hours and resource
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
          for (var resourceId = resStart; resourceId <= resEnd + 15; resourceId++) {
            events.push(generateEvent(new Date(d), resourceId));
          }
        }

        if (loadResource) {
          for (var resId = loadResource + 1; resId <= loadResource + 20; resId++) {
            resources.push({ name: 'Resource ' + resId, id: resId });
          }

          ret.resources = resources;
        }

        ret.events = events;

        return ret;
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-load-resources-on-scroll"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
