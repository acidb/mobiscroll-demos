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

    var morningColor = '#4a8c4d';
    var afternoonColor = '#f87c6b';
    var nightColor = '#8567AD';

    function getColor(startHours) {
      switch (startHours) {
        case 6:
          return morningColor;
        case 14:
          return afternoonColor;
        case 22:
          return nightColor;
        default:
          return afternoonColor;
      }
    }

    $(function () {
      var draggedEventStart;
      var draggedEventEnd;
      var draggedEventResource;
      var availableSlotOnHover;
      var availableCellOnHover;
      var redResources = {};
      $('#demo-24-hour-manufacturing-shift-rota-planning')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-24-hour-manufacturing-calendar',
          data: [
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-6,6)', end: 'dyndatetime(y,m,d-6,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-6,14)',
              end: 'dyndatetime(y,m,d-6,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-6,22)', end: 'dyndatetime(y,m,d-5,6)', color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-5,6)', end: 'dyndatetime(y,m,d-5,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-5,14)',
              end: 'dyndatetime(y,m,d-5,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-5,22)', end: 'dyndatetime(y,m,d-4,6)', color: nightColor },
            //<hide-comment>
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d-4,6)', end: 'dyndatetime(y,m,d-4,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-4,14)',
              end: 'dyndatetime(y,m,d-4,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d-4,22)', end: 'dyndatetime(y,m,d-3,6)', color: nightColor },

            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-3,6)', end: 'dyndatetime(y,m,d-3,14)', color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-3,14)',
              end: 'dyndatetime(y,m,d-3,22)',
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-3,22)', end: 'dyndatetime(y,m,d-2,6)', color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-2,6)', end: 'dyndatetime(y,m,d-2,14)', color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-2,14)',
              end: 'dyndatetime(y,m,d-2,22)',
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-2,22)', end: 'dyndatetime(y,m,d-1,6)', color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d-1,6)', end: 'dyndatetime(y,m,d-1,14)', color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,22)',
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: 'dyndatetime(y,m,d-1,22)', end: 'dyndatetime(y,m,d,6)', color: nightColor },

            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d,6)', end: 'dyndatetime(y,m,d,14)', color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d,22)', end: 'dyndatetime(y,m,d+1,6)', color: nightColor },
            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d+1,6)', end: 'dyndatetime(y,m,d+1,14)', color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+1,22)', end: 'dyndatetime(y,m,d+2,6)', color: nightColor },
            { resource: 'B', title: 'Morning Shift', start: 'dyndatetime(y,m,d+2,6)', end: 'dyndatetime(y,m,d+2,14)', color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+2,22)', end: 'dyndatetime(y,m,d+3,6)', color: nightColor },

            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+3,6)', end: 'dyndatetime(y,m,d+3,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+3,14)',
              end: 'dyndatetime(y,m,d+3,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+3,22)', end: 'dyndatetime(y,m,d+4,6)', color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+4,6)', end: 'dyndatetime(y,m,d+4,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+4,14)',
              end: 'dyndatetime(y,m,d+4,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+4,22)', end: 'dyndatetime(y,m,d+5,6)', color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: 'dyndatetime(y,m,d+5,6)', end: 'dyndatetime(y,m,d+5,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+5,14)',
              end: 'dyndatetime(y,m,d+5,22)',
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: 'dyndatetime(y,m,d+5,22)', end: 'dyndatetime(y,m,d+6,6)', color: nightColor },

            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+6,6)', end: 'dyndatetime(y,m,d+6,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+6,14)',
              end: 'dyndatetime(y,m,d+6,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+6,22)', end: 'dyndatetime(y,m,d+7,6)', color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+7,6)', end: 'dyndatetime(y,m,d+7,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+7,14)',
              end: 'dyndatetime(y,m,d+7,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+7,22)', end: 'dyndatetime(y,m,d+8,6)', color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: 'dyndatetime(y,m,d+8,6)', end: 'dyndatetime(y,m,d+8,14)', color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: 'dyndatetime(y,m,d+8,14)',
              end: 'dyndatetime(y,m,d+8,22)',
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: 'dyndatetime(y,m,d+8,22)', end: 'dyndatetime(y,m,d+9,6)', color: nightColor },
            //</hide-comment>
          ],
          dragToMove: true,
          dragToCreate: false,
          clickToCreate: 'single',
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
            var color = getColor(newStart.getHours());
            return {
              title: title,
              start: newStart,
              end: newEnd,
              color: color,
            };
          },
          onCellHoverIn: function (args, inst) {
            var colDate = new Date(args.date);
            var hoveredHour = calculateStart(colDate);
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
                if (sl === 'morning' && hoveredHour.getHours() === 6) {
                  startHours = 6;
                } else if (sl === 'day' && hoveredHour.getHours() === 14) {
                  startHours = 14;
                } else if (sl === 'night' && hoveredHour.getHours() === 22) {
                  startHours = 22;
                }
                var startTime = startHours && colDate.setHours(startHours, 0, 0, 0);
                var endTime = startTime && new Date(+startTime + 3600000 * 8 - 1);
                if (startTime) {
                  availableCellOnHover = args.resource.id + colDate.toISOString();
                  availableSlotOnHover = {
                    background: '#e0fff0',
                    start: +startTime + 1,
                    end: endTime,
                    resource: args.resource.id,
                  };
                }
              }
            });
            if (availableSlotOnHover) {
              inst.setOptions({ colors: (inst.props.colors || []).concat([availableSlotOnHover]) });
            }
          },
          onCellHoverOut: function (args, inst) {
            var oldColors = (inst.props.colors || []).filter(function (c) {
              return availableSlotOnHover !== c;
            });
            inst.setOptions({ colors: oldColors });
            availableSlotOnHover = null;
            availableCellOnHover = null;
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
              mobiscroll.toast({
                // context,
                message: 'Already assigned',
              });
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
            availableCellOnHover = null;
            availableSlotOnHover = null;
            inst.updateEvent(event);
          },
          onEventClick: function () {
            mobiscroll.toast({
              // context,
              message: 'Already assigned',
            });
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
              colors.push({ start: colorStart, end: colorEnd, background: '#fff8f6', resource: args.event.resource });
            } else {
              colors = [{ start: colorStart, end: colorEnd, background: '#fff8f6', resource: args.event.resource }];
            }
            var resource = args.event.resource;
            var day = new Date(args.event.start);
            day.setHours(0, 0, 0, 0);
            redResources[resource + day.toISOString()] = true;
            inst.setOptions({
              colors: colors,
            });
            mobiscroll.toast({
              // context,
              message: args.event.title + ' deleted',
            });
          },
          onEventDragStart: function (args) {
            draggedEventStart = args.event.start;
            draggedEventEnd = args.event.end;
            draggedEventResource = args.event.resource;
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              // context,
              message: 'Already assigned',
            });
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
            event.color = getColor(evStart.getHours());

            if (collideShifts.length) {
              var shouldReturn = false;
              collideShifts.forEach(function (sh, i) {
                if (sh.resource === event.resource) {
                  if (+event.start === +new Date(sh.start)) {
                    shouldReturn = true;
                  }
                  sh.resource = draggedEventResource;
                  collideShifts[i] = sh;
                } else {
                  sh.start = draggedEventStart;
                  sh.end = draggedEventEnd;
                  var start = new Date(draggedEventStart);
                  sh.title = getTitle(start.getHours());
                  sh.color = getColor(start.getHours());
                  collideShifts[i] = sh;
                }
              });
              if (shouldReturn) {
                return false;
              }
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
                colors.push({ start: date, resource: args.oldEvent.resource, background: '#fff8f6', end: colorEnd });
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
            { id: 'A', name: 'Crew A' },
            { id: 'B', name: 'Crew B' },
            { id: 'C', name: 'Crew C' },
          ],
          renderCell: function (args) {
            var isAvailable = args.resource.id + args.date.toISOString() === availableCellOnHover;
            return isAvailable ? '<div class="mds-24-hour-manufacturing-cell-content-add"><span>+</span></div>' : '';
          },
          renderResource: function (res, day) {
            var style = redResources[res.id + day.toISOString()]
              ? ' style="color: #a65037; background: #fff8f6; margin: -0.5em; padding: 0.5em"'
              : '';
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

.mds-24-hour-manufacturing-calendar .mbsc-schedule-time-wrapper {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-item {
  height: 2.5em;
}

.mds-24-hour-manufacturing-cell-content-add {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  inset: 3.3em 0 0 0;
  margin: auto;
  width: 25px;
  height: 25px;
  line-height: 20px;
  font-size: 24px;
  text-align: center;
  color: #e0fff0;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg,rgba(160, 160, 160, 0.6),rgba(93, 93, 93, 0.6));
}
  `,
};
