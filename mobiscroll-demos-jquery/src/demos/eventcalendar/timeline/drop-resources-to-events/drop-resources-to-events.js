import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import { dyndatetime } from '../../../../dyndatetime';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var rooms = [
        { id: 1, name: 'Conference Room', color: '#f7c4a5' },
        { id: 2, name: 'Board Room', color: '#a5c8f7' },
        { id: 3, name: 'Meeting Room', color: '#c4f7a5' },
        { id: 4, name: 'Training Room', color: '#e0a5f7' },
      ];

      var meetings = [
        {
          id: 'evt1',
          title: 'Sprint Planning',
          start: dyndatetime('y,m,d,9'),
          end: dyndatetime('y,m,d,11'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt2',
          title: 'Budget Review',
          start: dyndatetime('y,m,d,10'),
          end: dyndatetime('y,m,d,13'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt3',
          title: 'Client Presentation',
          start: dyndatetime('y,m,d,15'),
          end: dyndatetime('y,m,d,18'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt4',
          title: 'Project Kickoff',
          start: dyndatetime('y,m,d,9'),
          end: dyndatetime('y,m,d,11'),
          resource: 3,
          color: '#c4f7a5',
          attendees: [],
        },
        {
          id: 'evt5',
          title: 'New Hire Orientation',
          start: dyndatetime('y,m,d,13'),
          end: dyndatetime('y,m,d,16'),
          resource: 4,
          color: '#e0a5f7',
          attendees: [],
        },
        {
          id: 'evt6',
          title: 'Design Review',
          start: dyndatetime('y,m,d,13'),
          end: dyndatetime('y,m,d,15'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt7',
          title: 'Product Demo',
          start: dyndatetime('y,m,d+1,9'),
          end: dyndatetime('y,m,d+1,11'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt8',
          title: 'Stakeholder Update',
          start: dyndatetime('y,m,d+1,10'),
          end: dyndatetime('y,m,d+1,12'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt9',
          title: 'Code Review',
          start: dyndatetime('y,m,d+1,10'),
          end: dyndatetime('y,m,d+1,12'),
          resource: 3,
          color: '#c4f7a5',
          attendees: [],
        },
        {
          id: 'evt10',
          title: 'Safety Training',
          start: dyndatetime('y,m,d+1,13'),
          end: dyndatetime('y,m,d+1,16'),
          resource: 4,
          color: '#e0a5f7',
          attendees: [],
        },
        {
          id: 'evt11',
          title: 'Retrospective',
          start: dyndatetime('y,m,d+2,9'),
          end: dyndatetime('y,m,d+2,11'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt12',
          title: 'Board Briefing',
          start: dyndatetime('y,m,d+2,13'),
          end: dyndatetime('y,m,d+2,16'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt13',
          title: 'Marketing Sync',
          start: dyndatetime('y,m,d+2,10'),
          end: dyndatetime('y,m,d+2,12'),
          resource: 3,
          color: '#c4f7a5',
          attendees: [],
        },
        {
          id: 'evt14',
          title: 'API Workshop',
          start: dyndatetime('y,m,d+2,13'),
          end: dyndatetime('y,m,d+2,16'),
          resource: 4,
          color: '#e0a5f7',
          attendees: [],
        },
        {
          id: 'evt15',
          title: 'Architecture Review',
          start: dyndatetime('y,m,d+3,9'),
          end: dyndatetime('y,m,d+3,11,30'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt16',
          title: 'Quarterly Planning',
          start: dyndatetime('y,m,d+3,13'),
          end: dyndatetime('y,m,d+3,16'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt17',
          title: 'Hiring Debrief',
          start: dyndatetime('y,m,d+3,10'),
          end: dyndatetime('y,m,d+3,12'),
          resource: 3,
          color: '#c4f7a5',
          attendees: [],
        },
      ];

      var employees = [
        { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
        { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' },
        { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
        { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' },
        { id: 'emp5', name: 'Eva Chen', avatar: 'EC', color: '#9b59b6' },
        { id: 'emp6', name: 'Frank Diaz', avatar: 'FD', color: '#1abc9c' },
        { id: 'emp7', name: 'Grace Kim', avatar: 'GK', color: '#e67e22' },
        { id: 'emp8', name: 'Henry Patel', avatar: 'HP', color: '#34495e' },
        { id: 'emp9', name: 'Ivy Torres', avatar: 'IT', color: '#e84393' },
        { id: 'emp10', name: 'Jack Murphy', avatar: 'JM', color: '#0984e3' },
      ];

      function getAssignmentCount(empId) {
        var count = 0;
        for (var i = 0; i < meetings.length; i++) {
          for (var j = 0; j < meetings[i].attendees.length; j++) {
            if (meetings[i].attendees[j].id === empId) {
              count++;
            }
          }
        }
        return count;
      }

      function findConflict(empId, targetEventId) {
        var target;
        for (var i = 0; i < meetings.length; i++) {
          if (meetings[i].id === targetEventId) {
            target = meetings[i];
            break;
          }
        }
        if (!target) {
          return null;
        }

        var targetStart = new Date(target.start).getTime();
        var targetEnd = new Date(target.end).getTime();

        for (var j = 0; j < meetings.length; j++) {
          var m = meetings[j];
          if (m.id === targetEventId) {
            continue;
          }

          var isAssigned = false;
          for (var k = 0; k < m.attendees.length; k++) {
            if (m.attendees[k].id === empId) {
              isAssigned = true;
              break;
            }
          }
          if (!isAssigned) {
            continue;
          }

          var mStart = new Date(m.start).getTime();
          var mEnd = new Date(m.end).getTime();

          if (mStart < targetEnd && mEnd > targetStart) {
            return m;
          }
        }

        return null;
      }

      function renderEmployeeList() {
        var listHtml = '';
        for (var i = 0; i < employees.length; i++) {
          var emp = employees[i];
          var count = getAssignmentCount(emp.id);
          listHtml +=
            '<div class="mds-employee-item mbsc-flex" id="mds-emp-' +
            emp.id +
            '">' +
            '<div class="mds-employee-avatar mbsc-flex" style="background:' +
            emp.color +
            '">' +
            emp.avatar +
            '</div>' +
            '<div class="mds-employee-info mbsc-flex">' +
            '<div class="mds-employee-name">' +
            emp.name +
            '</div>' +
            (count > 0
              ? '<div class="mds-employee-count">' + count + ' meeting' + (count > 1 ? 's' : '') + '</div>'
              : '<div class="mds-employee-count">No assignments</div>') +
            '</div>' +
            '</div>';
        }
        $('#external-employee-list').html(listHtml);

        for (var j = 0; j < employees.length; j++) {
          (function (employee) {
            $('#mds-emp-' + employee.id)
              .mobiscroll()
              .draggable({
                dragData: employee,
              });
          })(employees[j]);
        }
      }

      renderEmployeeList();

      function renderEvent(data) {
        var event = data.original;
        var attendees = event.attendees || [];

        var attendeesHtml = '';
        if (attendees.length > 0) {
          attendeesHtml = '<div class="mds-event-attendees mbsc-flex">';
          for (var i = 0; i < attendees.length; i++) {
            attendeesHtml +=
              '<span class="mds-attendee-chip" style="background:' +
              attendees[i].color +
              '" title="' +
              attendees[i].name +
              ' (click to remove)"' +
              ' data-emp-id="' +
              attendees[i].id +
              '">' +
              attendees[i].avatar +
              '<span class="mds-attendee-remove">&times;</span>' +
              '</span>';
          }
          attendeesHtml += '</div>';
        } else {
          attendeesHtml = '<div class="mds-event-empty">Drop people here</div>';
        }

        return (
          '<div class="mds-custom-event mbsc-flex" style="border-left: 4px solid ' +
          event.color +
          '" data-event-id="' +
          event.id +
          '">' +
          '<div class="mds-event-header mbsc-flex">' +
          '<div class="mds-event-title">' +
          event.title +
          '</div>' +
          '<div class="mds-event-time">' +
          data.start +
          ' - ' +
          data.end +
          '</div>' +
          '</div>' +
          attendeesHtml +
          '</div>'
        );
      }

      function initDropZones() {
        $('.mds-custom-event').each(function () {
          var $zone = $(this);
          var eventId = $zone.data('event-id');

          $zone.mobiscroll().dropcontainer({
            onItemDrop: function (dropEvent) {
              var employee = dropEvent.data;

              $zone.removeClass('mds-drop-active mds-drop-conflict');

              for (var i = 0; i < meetings.length; i++) {
                if (meetings[i].id === eventId) {
                  var m = meetings[i];

                  // Prevent duplicate assignment to the same event
                  for (var k = 0; k < m.attendees.length; k++) {
                    if (m.attendees[k].id === employee.id) {
                      mobiscroll.toast({
                        //<hidden>
                        // theme,//</hidden>
                        // context,
                        message: employee.name + ' is already assigned',
                        color: 'danger',
                      });
                      return;
                    }
                  }

                  // Check for time conflicts
                  var conflict = findConflict(employee.id, eventId);
                  if (conflict) {
                    mobiscroll.toast({
                      //<hidden>
                      // theme,//</hidden>
                      // context,
                      message: employee.name + ' already has a ' + conflict.title + ' on this timeslot',
                      color: 'danger',
                    });
                    return;
                  }

                  m.attendees.push({
                    id: employee.id,
                    name: employee.name,
                    avatar: employee.avatar,
                    color: employee.color,
                  });

                  setTimeout(function () {
                    inst.setEvents(meetings);
                    renderEmployeeList();
                  }, 0);

                  mobiscroll.toast({
                    //<hidden>
                    // theme,//</hidden>
                    // context,
                    message: employee.name + ' assigned to ' + m.title,
                    color: 'success',
                  });
                  break;
                }
              }
            },
            onItemDragEnter: function (enterEvent) {
              var employee = enterEvent.data;

              $zone.removeClass('mds-drop-active mds-drop-conflict');

              if (employee) {
                // Check if already assigned to this event
                var alreadyAssigned = false;
                for (var i = 0; i < meetings.length; i++) {
                  if (meetings[i].id === eventId) {
                    for (var k = 0; k < meetings[i].attendees.length; k++) {
                      if (meetings[i].attendees[k].id === employee.id) {
                        alreadyAssigned = true;
                        break;
                      }
                    }
                    break;
                  }
                }

                if (alreadyAssigned) {
                  $zone.addClass('mds-drop-conflict');
                } else {
                  var conflict = findConflict(employee.id, eventId);
                  if (conflict) {
                    $zone.addClass('mds-drop-conflict');
                  } else {
                    $zone.addClass('mds-drop-active');
                  }
                }
              } else {
                $zone.addClass('mds-drop-active');
              }
            },
            onItemDragLeave: function () {
              $zone.removeClass('mds-drop-active mds-drop-conflict');
            },
          });
        });

        // Handle attendee removal on chip click
        $('.mds-attendee-chip').on('click', function (e) {
          e.stopPropagation();
          var empId = $(this).data('emp-id');
          var $event = $(this).closest('.mds-custom-event');
          var eventId = $event.data('event-id');

          for (var i = 0; i < meetings.length; i++) {
            if (meetings[i].id === eventId) {
              var attendees = meetings[i].attendees;
              for (var j = 0; j < attendees.length; j++) {
                if (attendees[j].id === empId) {
                  var removedAttendee = attendees[j];
                  var removedIndex = j;
                  var meetingRef = meetings[i];

                  attendees.splice(j, 1);
                  inst.setEvents(meetings);
                  renderEmployeeList();

                  (function (att, idx, meeting) {
                    mobiscroll.snackbar({
                      //<hidden>
                      // theme,//</hidden>
                      // context,
                      message: att.name + ' removed from ' + meeting.title,
                      button: {
                        text: 'Undo',
                        action: function () {
                          meeting.attendees.splice(idx, 0, att);
                          inst.setEvents(meetings);
                          renderEmployeeList();
                          mobiscroll.toast({
                            //<hidden>
                            // theme,//</hidden>
                            // context,
                            message: 'Assignment restored',
                            color: 'success',
                          });
                        },
                      },
                    });
                  })(removedAttendee, removedIndex, meetingRef);

                  break;
                }
              }
              break;
            }
          }
        });
      }

      var inst = $('#demo-drop-resources-to-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '08:00',
              endTime: '18:00',
              timeCellStep: 60,
              timeLabelStep: 60,
            },
          },
          data: meetings,
          resources: rooms,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          clickToCreate: false,
          eventDelete: false,
          showEventTooltip: false,
          renderTimelineEvent: renderEvent,
          onPageLoaded: initDropZones,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mds-drop-resources-to-events" mbsc-page>
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-3 mbsc-flex-col mds-sidebar">
        <div class="mbsc-form-group-title">Employees</div>
        <div id="external-employee-list" class="mds-employee-list mbsc-flex"></div>
      </div>
      <div class="mbsc-col-sm-9 mds-calendar-wrapper">
        <div id="demo-drop-resources-to-events"></div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-drop-resources-to-events,
.mds-drop-resources-to-events .mbsc-grid,
.mds-drop-resources-to-events .mbsc-row {
  height: 100%;
}
.mds-sidebar {
  overflow-y: auto;
}
.mds-employee-list {
  padding: 8px;
  flex-direction: column;
  gap: 4px;
}
.mds-employee-item {
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  background: #ccc;
  border: 1px solid transparent;
  margin: 5px;
  touch-action: none;
  transition: box-shadow 0.15s, background 0.15s;
}
.mds-employee-item:hover {
  background: #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}
.mds-employee-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}
.mds-employee-info {
  flex-direction: column;
  overflow: hidden;
}
.mds-employee-name {
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-employee-count {
  font-size: 14px;
  color: #5b5b5b;
}
.mds-calendar-wrapper {
  border-left: 1px solid #ccc;
}
/* Source item left behind in the sidebar while dragging */
.mds-employee-item.mbsc-drag-clone {
  opacity: 0.8;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}
.mds-custom-event {
  background:#ebebeb;
  border-radius: 6px;
  padding: 6px 8px;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: outline-color 0.15s, background 0.15s;
}
.mds-event-header {
  flex-direction: column;
  gap: 1px;
}
.mds-event-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-event-time {
  font-size: 12px;
  color: #7d7d7d;
}
.mds-event-attendees {
  flex-wrap: wrap;
  gap: 3px;
}
.mds-event-empty {
  font-size: 11px;
  color: #9a9a9a;
  font-style: italic;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 8px;
}
.mds-attendee-chip {
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  position: relative;
}
.mds-attendee-remove {
  display: none;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
}
.mds-attendee-chip:hover .mds-attendee-remove {
  display: flex;
}
.mds-custom-event.mds-drop-active {
  cursor: copy;
  outline: 2px solid #70a369;
  outline-offset: -2px;
  background: rgba(112, 163, 105, 0.15);
}
.mds-custom-event.mds-drop-conflict {
  cursor: not-allowed;
  outline: 2px solid #df6d6d;
  outline-offset: -2px;
  background: rgba(223, 109, 109, 0.1);
}
.mds-drop-resources-to-events .mbsc-timeline-event {
  min-height: 80px;
}
.mds-drop-resources-to-events .mbsc-schedule-event-inner {
  height: 100%;
}
  `,
};
