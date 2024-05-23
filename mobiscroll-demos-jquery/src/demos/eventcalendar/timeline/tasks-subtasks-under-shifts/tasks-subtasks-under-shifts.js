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
      // TODO rename
      function isEventBetweenShift(shift, event) {
        return new Date(shift.start) < new Date(event.start) && new Date(shift.end) > new Date(event.end);
      }

      var events = [
        {
          id: 1,
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Morning shift',
          resource: 1,
          tasks: ['mg-1', 'mg-2', 'mg-3'],
          order: 1,
        },
        {
          id: 'mg-1',
          start: 'dyndatetime(y,m,d,6,30)',
          end: 'dyndatetime(y,m,d,8,30)',
          title: 'Morning 1st',
          resource: 1,
          shift: 1,
          order: 2,
        },
        {
          id: 'mg-2',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,10,45)',
          title: 'Morning 2nd',
          resource: 1,
          shift: 1,
          order: 2,
        },
        {
          id: 'mg-3',
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Administration',
          resource: 1,
          shift: 1,
          order: 2,
        },
        {
          id: 2,
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Afernoon shift',
          resource: 2,
          tasks: ['af-1', 'af-2', 'af-3'],
          order: 1,
        },
        {
          id: 'af-1',
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,12,30)',
          title: 'Morning 1st',
          resource: 2,
          shift: 2,
          order: 2,
        },
        {
          id: 'af-2',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,14,45)',
          title: 'Morning 2nd',
          resource: 2,
          shift: 2,
          order: 2,
        },
        {
          id: 'af-3',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Administration',
          resource: 2,
          shift: 2,
          order: 2,
        },
        {
          id: 'af-4',
          start: 'dyndatetime(y,m,d,17)',
          end: 'dyndatetime(y,m,d,19  )',
          title: 'Administration',
          resource: 2,
          shift: 2,
          order: 2,
        },
      ];

      $('#demo-tasks-subtasks-under-shifts')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: true,
          dragToCreate: true,
          view: {
            timeline: {
              type: 'week',
              startTime: '05:00',
              endTime: '19:00',
            },
          },
          onEventUpdated: function (args, inst) {
            var event = args.event;
            var oldEvent = args.oldEvent;
            // console.log('event?', args);
            if (event.tasks) {
              // the shift was updated
              var startDiff = +new Date(event.start) - +new Date(oldEvent.start);
              var endDiff = +new Date(event.end) - +new Date(oldEvent.end);
              // var diff = startDiff || endDiff;

              if (startDiff === endDiff || startDiff > 0 || endDiff < 0) {
                // it was moved
                event.tasks.forEach(function (el) {
                  var task = Object.assign(
                    {},
                    events.find(function (e) {
                      return e.id === el;
                    }),
                  );

                  task.start = new Date(+new Date(task.start) + startDiff);
                  task.end = new Date(+new Date(task.end) + endDiff);
                  // console.log('here??', isEventBetweenShift(event, task));
                  if (isEventBetweenShift(event, task)) {
                    console.log('updated stuff', task);
                    inst.updateEvent(task);
                  }
                });
              }
              console.log('startDiff???endDiff', event.start, oldEvent.start, startDiff, endDiff);
            } else {
              // the tasks were updated
              var shift = events.find(function (ev) {
                return ev.id === event.shift;
              });
              // var overlapEvents = inst.getEvents(event.start, event.end);

              if (!isEventBetweenShift(shift, event) /*|| overlapEvents.length > 2*/) {
                inst.updateEvent(args.oldEvent);
              }
              // subtasks were moved

              // return false;
            }
          },
          data: events,
          resources: [
            {
              id: 1,
              color: '#ff0101',
              name: 'Resource A',
              eventDragBetweenResources: false,
            },
            {
              id: 2,
              color: '#239a21',
              name: 'Resource B',
              eventDragBetweenResources: false,
            },
            {
              id: 3,
              color: '#8f1ed6',
              name: 'Resource C',
              eventDragBetweenResources: false,
            },
            {
              id: 4,
              color: '#01adff',
              name: 'Resource D',
              eventDragBetweenResources: false,
            },
            {
              id: 5,
              color: '#d8ca1a',
              name: 'Resource E',
              eventDragBetweenResources: false,
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-tasks-subtasks-under-shifts"></div>
`,
  // css: ``,
};
