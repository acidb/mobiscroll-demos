import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    function calculateStart(start) {
      var newStart = new Date(start);
      var hours = start.getHours();
      if (hours >= 6 && hours < 14) {
        newStart.setHours(6, 0, 0, 0);
      }
      if (hours >= 14 && hours < 22) {
        newStart.setHours(14, 0, 0, 0);
      }
      if (hours >= 22 && hours < 24) {
        newStart.setHours(22, 0, 0, 0);
      }
      if (hours >= 0 && hours < 6) {
        var date = newStart.getDate();
        newStart.setDate(date - 1);
        newStart.setHours(22, 0, 0, 0);
      }
      return newStart;
    }

    function calculateEnd(start) {
      var newEnd = new Date(start);
      var hours = start.getHours();
      if (hours >= 6 && hours < 14) {
        newEnd.setHours(14, 0, 0, 0);
      }
      if (hours >= 14 && hours < 22) {
        newEnd.setHours(22, 0, 0, 0);
      }
      if (hours >= 22 && hours < 24) {
        var date = newEnd.getDate();
        newEnd.setDate(date + 1);
        newEnd.setHours(6, 0, 0, 0);
      }
      if (hours >= 0 && hours < 6) {
        newEnd.setHours(6, 0, 0, 0);
      }
      return newEnd;
    }

    function getTitle(startHours) {
      switch (startHours) {
        case 6:
          return 'Morning Shift';
        case 14:
          return 'Afternoon Shift';
        case 22:
          return 'Night Shift';
        default:
          return 'Afternoon Shift';
      }
    }

    $(function () {
      var draggedEventStart;
      var draggedEventEnd;
      var draggedEventResource;
      var availableSlotsOnHover = [];
      var redResources = {};
      $('#demo-24-hour-manufacturing-shift-rota-planning')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-24-hour-manufacturing-calendar',
          data: [
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-6,6)', end: 'dyndatetime(y,m,d-6,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-6,14)', end: 'dyndatetime(y,m,d-6,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-6,22)', end: 'dyndatetime(y,m,d-5,6)' },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-5,6)', end: 'dyndatetime(y,m,d-5,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-5,14)', end: 'dyndatetime(y,m,d-5,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-5,22)', end: 'dyndatetime(y,m,d-4,6)' },
            //<hide-comment>
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-4,6)', end: 'dyndatetime(y,m,d-4,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-4,22)', end: 'dyndatetime(y,m,d-3,6)' },

            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-3,6)', end: 'dyndatetime(y,m,d-3,14)' },
            { resource: 'A', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-3,22)', end: 'dyndatetime(y,m,d-2,6)' },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-2,6)', end: 'dyndatetime(y,m,d-2,14)' },
            { resource: 'A', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-2,22)', end: 'dyndatetime(y,m,d-1,6)' },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-1,6)', end: 'dyndatetime(y,m,d-1,14)' },
            { resource: 'A', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,22)' },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-1,22)', end: 'dyndatetime(y,m,d,6)' },

            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d,6)', end: 'dyndatetime(y,m,d,14)' },
            { resource: 'C', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d,22)', end: 'dyndatetime(y,m,d+1,6)' },
            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d+1,6)', end: 'dyndatetime(y,m,d+1,14)' },
            { resource: 'C', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+1,22)', end: 'dyndatetime(y,m,d+2,6)' },
            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d+2,6)', end: 'dyndatetime(y,m,d+2,14)' },
            { resource: 'C', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+2,14)', end: 'dyndatetime(y,m,d+2,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+2,22)', end: 'dyndatetime(y,m,d+3,6)' },

            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+3,6)', end: 'dyndatetime(y,m,d+3,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+3,22)', end: 'dyndatetime(y,m,d+4,6)' },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+4,6)', end: 'dyndatetime(y,m,d+4,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+4,14)', end: 'dyndatetime(y,m,d+4,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+4,22)', end: 'dyndatetime(y,m,d+5,6)' },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+5,6)', end: 'dyndatetime(y,m,d+5,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+5,14)', end: 'dyndatetime(y,m,d+5,22)' },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+5,22)', end: 'dyndatetime(y,m,d+6,6)' },

            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+6,6)', end: 'dyndatetime(y,m,d+6,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+6,14)', end: 'dyndatetime(y,m,d+6,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+6,22)', end: 'dyndatetime(y,m,d+7,6)' },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+7,6)', end: 'dyndatetime(y,m,d+7,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+7,14)', end: 'dyndatetime(y,m,d+7,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+7,22)', end: 'dyndatetime(y,m,d+8,6)' },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+8,6)', end: 'dyndatetime(y,m,d+8,14)' },
            { resource: 'B', title: 'Afternoon Shift', start: 'dyndatetime(y,m,d+8,14)', end: 'dyndatetime(y,m,d+8,22)' },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+8,22)', end: 'dyndatetime(y,m,d+9,6)' },
            //</hide-comment>
          ],
          dragToMove: true,
          dragToCreate: false,
          clickToCreate: true,
          dragToResize: false,
          dragTimeStep: 480,
          dragTimeStepBase: 'viewStart',
          eventDelete: true,
          eventOverlap: false,
          extendDefaultEvent: function (args) {
            var start = new Date(args.start);
            var newStart = calculateStart(start);
            var newEnd = calculateEnd(start);
            var title = getTitle(newStart.getHours());
            return {
              title: title,
              start: newStart,
              end: newEnd,
            };
          },
          onCellHoverIn: function (args, inst) {
            var colDate = new Date(args.date);
            colDate.setHours(6, 0, 0, 0);
            var colEndDate = new Date(args.date);
            var endDate = colEndDate.getDate();
            colEndDate.setDate(endDate + 1);
            colEndDate.setHours(6, 0, 0, 0);
            var dayEvents = inst.getEvents(colDate, colEndDate);
            var availableSlots = { morning: true, day: true, night: true };
            dayEvents.forEach(function (e) {
              if (e.resource === args.resource.id) {
                availableSlots.morning = false;
                availableSlots.day = false;
                availableSlots.night = false;
              } else {
                var start = new Date(e.start);
                var startHours = start.getHours();
                if (startHours === 6) {
                  availableSlots.morning = false;
                } else if (startHours === 14) {
                  availableSlots.day = false;
                } else if (startHours === 22) {
                  availableSlots.night = false;
                }
              }
            });
            Object.keys(availableSlots).forEach(function (sl) {
              if (availableSlots[sl]) {
                var startHours;
                if (sl === 'morning') {
                  startHours = 6;
                } else if (sl === 'day') {
                  startHours = 14;
                } else if (sl === 'night') {
                  startHours = 22;
                }
                var startTime = colDate.setHours(startHours, 0, 0, 0);
                var endTime = new Date(+startTime + 3600000 * 8);
                availableSlotsOnHover.push({
                  title: 'AVAILABLE',
                  background: '#e0fff0',
                  start: startTime,
                  end: endTime,
                  resource: args.resource.id,
                });
              }
            });
            inst.setOptions({ colors: (inst.props.colors || []).concat(availableSlotsOnHover) });
          },
          onCellHoverOut: function (args, inst) {
            var oldColors = (inst.props.colors || []).filter(function (c) {
              var shouldDelete = false;
              availableSlotsOnHover.forEach(function (s) {
                if (s === c) {
                  shouldDelete = true;
                }
              });
              return !shouldDelete;
            });
            inst.setOptions({ colors: oldColors });
            availableSlotsOnHover = [];
          },
          onEventCreate: function (args, inst) {
            var event = args.event;
            var eventEnd = calculateEnd(event.start);
            event.end = eventEnd;
            var dayStart = new Date(event.start);
            dayStart.setHours(6, 0, 0, 0);
            var dayEvents = inst.getEvents(dayStart);
            var collideShift = dayEvents.find(function (ev) {
              return ev.resource === event.resource || +new Date(ev.start) === +new Date(event.start);
            });
            if (collideShift) {
              return false;
            } else {
              var colors = inst.props.colors;
              var date = new Date(args.event.start);
              date.setHours(6, 0, 0, 0);
              if (colors) {
                colors = colors.filter(function (c) {
                  return !(c.resource === args.event.resource && +c.start === +date);
                });
                var day = new Date(args.event.start);
                day.setHours(0, 0, 0, 0);
                redResources[args.event.resource + day.toISOString()] = false;
                inst.setOptions({
                  colors: colors,
                });
              }
            }
            inst.updateEvent(event);
          },
          onEventDelete: function (args, inst) {
            var colors = inst.props.colors;
            var colorStart = new Date(args.event.start);
            colorStart.setHours(6, 0, 0, 0);
            var colorEnd = new Date(args.event.start);
            var colorEndDate = colorEnd.getDate();
            colorEnd.setDate(colorEndDate + 1);
            colorEnd.setHours(6, 0, 0, 0);

            if (colors) {
              colors.push({ start: colorStart, end: colorEnd, background: '#fff0ed', resource: args.event.resource });
            } else {
              colors = [{ start: colorStart, end: colorEnd, background: '#fff0ed', resource: args.event.resource }];
            }
            var resource = args.event.resource;
            var day = new Date(args.event.start);
            day.setHours(0, 0, 0, 0);
            redResources[resource + day.toISOString()] = true;
            inst.setOptions({
              colors: colors,
            });
          },
          onEventDragStart: function (args) {
            draggedEventStart = args.event.start;
            draggedEventEnd = args.event.end;
            draggedEventResource = args.event.resource;
          },
          onEventUpdate: function (args, inst) {
            var event = args.event;
            var dayStart = new Date(event.start);
            dayStart.setHours(6, 0, 0, 0);
            var dragStartDay = new Date(draggedEventStart);
            dragStartDay.setHours(6, 0, 0, 0);
            if (+dayStart !== +dragStartDay) {
              return false;
            }
            var dayEvents = inst.getEvents(dayStart);
            var collideShifts = dayEvents.filter(function (ev) {
              return ev.id !== event.id && (ev.resource === event.resource || +new Date(ev.start) === +new Date(event.start));
            });
            var evStart = new Date(event.start);
            event.title = getTitle(evStart.getHours());

            if (collideShifts.length) {
              collideShifts.forEach(function (sh, i) {
                if (sh.resource === event.resource) {
                  sh.resource = draggedEventResource;
                  collideShifts[i] = sh;
                } else {
                  sh.start = draggedEventStart;
                  sh.end = draggedEventEnd;
                  var start = new Date(draggedEventStart);
                  sh.title = getTitle(start.getHours());
                  collideShifts[i] = sh;
                }
              });
              inst.updateEvent([].concat(collideShifts, [event]));
            } else {
              inst.updateEvent([event]);
            }

            var colors = inst.props.colors;
            var date = new Date(args.event.start);
            date.setHours(6, 0, 0, 0);
            var colorEnd = new Date(args.event.start);
            var colorEndDate = colorEnd.getDate();
            colorEnd.setDate(colorEndDate + 1);
            colorEnd.setHours(6, 0, 0, 0);
            if (colors) {
              colors = colors.filter(function (c) {
                return !(c.resource === args.event.resource && +c.start === +date);
              });
              var day = new Date(args.event.start);
              day.setHours(0, 0, 0, 0);
              redResources[args.event.resource + day.toISOString()] = false;
              if (!collideShifts.length && args.event.resource !== draggedEventResource) {
                colors.push({ start: date, resource: args.oldEvent.resource, background: '#fff0ed', end: colorEnd });
                redResources[args.oldEvent.resource + day.toISOString()] = true;
              }
              inst.setOptions({
                colors: colors,
              });
            }
            draggedEventStart = null;
            draggedEventEnd = null;
            draggedEventResource = null;
          },
          groupBy: 'date',
          resources: [
            { id: 'A', name: 'Crew A', color: '#f5baa6' },
            { id: 'B', name: 'Crew B', color: '#9ee3a1' },
            { id: 'C', name: 'Crew C', color: '#9cb5e3' },
          ],
          renderResource: function (res, day) {
            var style = redResources[res.id + day.toISOString()] ? ' style="color: #a65037; background: #fff0ed;"' : '';
            return '<div' + style + '>' + res.name + '</div>';
          },
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startTime: '06:00',
              endTime: '06:00+1',
              timeCellStep: 120,
              timeLabelStep: 120,
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-24-hour-manufacturing-shift-rota-planning"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-24-hour-manufacturing-calendar .mbsc-schedule-day-limit {
  border-top-width: 2px;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-events {
  left: 0;
  right: 0;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-resource-title {
  padding: 0;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-time-wrapper {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-item {
  height: 2.5em;
}
  `,
};
