import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    function isEventBetweenShift(shift, event) {
      return new Date(shift.start) <= new Date(event.start) && new Date(shift.end) >= new Date(event.end);
    }

    $(function () {
      var toast = mobiscroll.toast;
      var timelineInst = $('#demo-tasks-subtasks-under-shifts')
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
              eventHeight: 'variable',
            },
          },
          extendDefaultEvent: function (args) {
            var events = timelineInst.getEvents(args.start, new Date(+args.start + 3600000)).filter(function (e) {
              return e.resource === args.resource;
            });
            var isShift = events.length === 0;
            return {
              order: isShift ? 1 : 2,
              cssClass: isShift ? 'md-task-shift' : 'md-task-subtask',
              color: isShift ? 'gray' : '',
              title: isShift ? 'New Shift' : 'New subtask',
              tasks: isShift ? [] : undefined,
            };
          },
          onEventCreated: function (args, inst) {
            var event = args.event;
            var overlapEvents = inst.getEvents(event.start, event.end);
            var overlapShift = overlapEvents.filter(function (e) {
              return e.tasks !== undefined && e.resource === event.resource;
            });
            if (event.tasks !== undefined) {
              // shifts was created
              if (overlapShift.length > 1) {
                inst.removeEvent(event);
                toast({ message: 'Shifts cannot overlap' });
              }
            } else {
              // subtasks was created
              var shift = overlapShift[0];
              // update the shift and subtask properties
              shift.tasks.push(event.id);
              inst.updateEvent(shift);
              event.shift = shift.id;
              inst.updateEvent(event);
            }
          },
          onEventUpdated: function (args, inst) {
            var events = inst.getEvents();
            var event = args.event;
            var oldEvent = args.oldEvent;

            if (event.tasks) {
              // the shift was updated
              var startDiff = +new Date(event.start) - +new Date(oldEvent.start);
              var endDiff = +new Date(event.end) - +new Date(oldEvent.end);
              var diff = startDiff || endDiff;
              var isMove = startDiff === endDiff;
              var isResize = startDiff > 0 || endDiff < 0;
              var overlapEvents = inst.getEvents(event.start, event.end);
              var overlapShift = overlapEvents.filter(function (e) {
                return e.tasks !== undefined && e.resource === event.resource;
              });
              if (overlapShift.length > 1) {
                inst.updateEvent(oldEvent);
                toast({ message: 'Shifts cannot overlap' });
                return;
              }

              // update subtask
              event.tasks.forEach(function (el) {
                var task = events.find(function (e) {
                  return e.id === el;
                });
                // todo refactor
                var newStart = new Date(Math.max(+new Date(task.start) + diff, +new Date(event.start)));
                var newEnd = new Date(Math.min(+newStart + +new Date(task.end) - +new Date(task.start), +new Date(event.end)));
                task.start = newStart;
                task.end = newEnd;
                if (isMove || (isResize && !isEventBetweenShift(event, task))) {
                  inst.updateEvent(task);
                }
              });
            } else {
              // the tasks were updated
              var shift = events.find(function (ev) {
                return ev.id === event.shift;
              });

              if (!isEventBetweenShift(shift, event)) {
                inst.updateEvent(args.oldEvent);
                toast({ message: 'Subtasks cannot be dragged out from shifts' });
              }
            }
          },
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d,6)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Morning shift',
              resource: 1,
              tasks: ['mg-1', 'mg-2', 'mg-3'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'mg-1',
              start: 'dyndatetime(y,m,d,6,30)',
              end: 'dyndatetime(y,m,d,8,30)',
              title: 'Morning 1st',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'mg-2',
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,10,45)',
              title: 'Morning 2nd',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'mg-3',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Administration',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Afernoon shift',
              resource: 2,
              tasks: ['af-1', 'af-2', 'af-3', 'af-4'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'af-1',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12,30)',
              title: 'Afternoon 1st',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'af-2',
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,14,45)',
              title: 'Afternoon 2nd',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'af-3',
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Cleanup',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'af-4',
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,19  )',
              title: 'Administration',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
          ],
          resources: [
            {
              id: 1,
              color: '#ff0101',
              name: 'Emma Smith',
              eventDragBetweenResources: false,
            },
            {
              id: 2,
              color: '#239a21',
              name: 'James Brown',
              eventDragBetweenResources: false,
            },
            {
              id: 3,
              color: '#8f1ed6',
              name: 'Olivia Miller',
              eventDragBetweenResources: false,
            },
            {
              id: 4,
              color: '#01adff',
              name: 'Robert Taylor',
              eventDragBetweenResources: false,
            },
          ],
          invalid: [
            {
              start: '00:00',
              end: '05:00',
              recurring: {
                repeat: 'daily',
              },
            },
            {
              start: '19:00',
              end: '00:00',
              recurring: {
                repeat: 'daily',
              },
            },
          ],
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-tasks-subtasks-under-shifts"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
    .md-task-shift {
      height: 30px;
    }
    .md-task-subtask {
      height: 40px;
    }
   `,
};
