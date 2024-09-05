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
      var timelineView = {
        type: 'week',
        size: 4,
        resolutionHorizontal: 'day',
        eventList: false,
        resourceOrder: false,
      };
      var resources = [
        { id: 1, name: 'Resource 1' },
        { id: 2, name: 'Resource 2 (Reorder disabled)', reorder: false },
        { id: 3, name: 'Resource 3' },
        { id: 4, name: 'Resource 4 (Reorder disabled)', reorder: false },
        {
          id: 5,
          name: 'Group 1',
          children: [
            { id: '1-1', name: 'Child 1' },
            { id: '1-2', name: 'Child 2' },
            { id: '1-3', name: 'Child 3' },
          ],
        },
        { id: 6, name: 'Resource 6' },
        { id: 7, name: 'Resource 7' },
        {
          id: 8,
          name: 'Group 2 (Reorder disabled)',
          reorder: false,
          children: [
            { id: '2-1', name: 'Child 1' },
            { id: '2-2', name: 'Child 2' },
            { id: '2-3', name: 'Child 3' },
          ],
        },
        { id: 9, name: 'Resource 8' },
        { id: 10, name: 'Resource 9' },
        {
          id: 11,
          name: 'Group 3',
          children: [
            { id: '3-1', name: 'Child 1' },
            { id: '3-2', name: 'Child 2' },
            { id: '3-3', name: 'Child 3' },
          ],
        },
        { id: 12, name: 'Resource 10' },
        {
          id: 13,
          name: 'Group 4 (Dropping not allowed)',
          children: [
            { id: '4-1', name: 'Child 1' },
            { id: '4-2', name: 'Child 2' },
            { id: '4-3', name: 'Child 3' },
          ],
        },
        { id: 14, name: 'Resource 11' },
      ];
      var tempResources = [];
      var calInst = $('#demo-resource-drag-drop-reorder')
        .mobiscroll()
        .eventcalendar({
          refDate: new Date(2024, 8, 1),
          selectedDate: new Date(2024, 8, 1),
          view: {
            timeline: timelineView,
          },
          data: [
            { title: 'Event 1', start: '2024-09-01', end: '2024-09-02', resource: 14, color: 'green' },
            { title: 'Event 2', start: '2024-09-03', end: '2024-09-04', resource: 2, color: 'blue' },
            { title: 'Event 3', start: '2024-09-05', end: '2024-09-06', resource: 10, color: 'red' },
            { title: 'Event 4', start: '2024-09-07', end: '2024-09-08', resource: 9, color: 'yellow' },
            { title: 'Event 5', start: '2024-09-09', end: '2024-09-10', resource: 6, color: 'purple' },
            { title: 'Event 6', start: '2024-09-11', end: '2024-09-12', resource: 1, color: 'orange' },
            { title: 'Event 7', start: '2024-09-13', end: '2024-09-14', resource: 4, color: 'pink' },
            { title: 'Event 8', start: '2024-09-15', end: '2024-09-16', resource: 3, color: 'cyan' },
            { title: 'Event 9', start: '2024-09-17', end: '2024-09-18', resource: 12, color: 'magenta' },
            { title: 'Event 10', start: '2024-09-19', end: '2024-09-20', resource: 7, color: 'lime' },
            { title: 'Event 1 - 1', start: '2024-09-01', end: '2024-09-02', resource: '3-3', color: 'green' },
            { title: 'Event 1 - 2', start: '2024-09-03', end: '2024-09-04', resource: '3-2', color: 'blue' },
            { title: 'Event 1 - 3', start: '2024-09-05', end: '2024-09-06', resource: '1-3', color: 'red' },
            { title: 'Event 2 - 1', start: '2024-09-07', end: '2024-09-08', resource: '2-1', color: 'yellow' },
            { title: 'Event 2 - 2', start: '2024-09-09', end: '2024-09-10', resource: '4-2', color: 'purple' },
            { title: 'Event 2 - 3', start: '2024-09-11', end: '2024-09-12', resource: '2-3', color: 'orange' },
            { title: 'Event 3 - 1', start: '2024-09-13', end: '2024-09-14', resource: '3-1', color: 'pink' },
            { title: 'Event 3 - 2', start: '2024-09-15', end: '2024-09-16', resource: '3-2', color: 'cyan' },
            { title: 'Event 3 - 3', start: '2024-09-17', end: '2024-09-18', resource: '2-1', color: 'magenta' },
            { title: 'Event 4 - 1', start: '2024-09-19', end: '2024-09-20', resource: '2-1', color: 'lime' },
            { title: 'Event 4 - 2', start: '2024-09-21', end: '2024-09-22', resource: '4-2', color: 'teal' },
            { title: 'Event 4 - 3', start: '2024-09-23', end: '2024-09-24', resource: '1-3', color: 'violet' },
          ],
          resources: resources,
          onResourceOrderUpdate: function (args) {
            tempResources = args.resources;
            if (args.parent && args.parent.id === 13) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Drop to Group 4 is not allowed!',
              });
              return false;
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="mds-header-filter-nav"></div>' +
              '<div class="mds-header-filter mbsc-flex-1-0">' +
              'Reorder:' +
              '<button mbsc-button class="mds-reorder-switch mds-enable">Enable</buttom>' +
              '<button mbsc-button class="mds-reorder-save mds-update mds-hidden">Save</buttom>' +
              '<button mbsc-button class="mds-reorder-cancel mds-update mds-hidden">Cancel</buttom>' +
              '</div>' +
              '<button mbsc-calendar-prev class="mds-header-filter-prev"></button>' +
              '<button mbsc-calendar-today class="mds-header-filter-today"></button>' +
              '<button mbsc-calendar-next class="mds-header-filter-next"></button>'
            );
          },
          dragToCreate: true,
          dragToMove: true,
        })
        .mobiscroll('getInst');

      function updateView(enableOrder) {
        // timelineView.resourceOrder = enableOrder;

        if (enableOrder) {
          $('.mds-update').show();
          $('.mds-enable').hide();
        } else {
          $('.mds-update').hide();
          $('.mds-enable').show();
        }
        // return {
        //   timeline: timelineView,
        // };
      }

      $('.mds-reorder-switch').on('click', function () {
        updateView(true);
        calInst.setOptions({
          view: {
            timeline: {
              type: 'week',
              size: 4,
              resolutionHorizontal: 'day',
              resourceOrder: true,
            },
          },
        });
      });

      $('.mds-reorder-cancel').on('click', function () {
        // timelineView.resourceOrder = false;
        updateView(false);
        calInst.setOptions({
          resources: resources.slice(),
          view: {
            timeline: {
              type: 'week',
              size: 4,
              resolutionHorizontal: 'day',
              resourceOrder: false,
            },
          },
        });
      });

      $('.mds-reorder-save').on('click', function () {
        if (tempResources.length) {
          resources = tempResources;
        }
        updateView(false);
        calInst.setOptions({
          resources: resources.slice(),
          view: {
            timeline: {
              type: 'week',
              size: 4,
              resolutionHorizontal: 'day',
              resourceOrder: false,
            },
          },
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-drag-drop-reorder"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-hidden {
  display: none;
}
  `,
};
