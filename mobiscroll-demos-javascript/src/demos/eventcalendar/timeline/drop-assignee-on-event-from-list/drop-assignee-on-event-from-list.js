import * as mobiscroll from '@mobiscroll/javascript';
import { dyndatetime } from '../../../../dyndatetime';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      theme: 'ios',
      themeVariant: 'light',
    });

    var rooms = [
      { id: 1, name: 'Conference Room' },
      { id: 2, name: 'Board Room' },
      { id: 3, name: 'Meeting Room' },
      { id: 4, name: 'Training Room' },
    ];

    var meetings = [
      {
        id: 'evt1',
        title: 'Sprint Planning',
        start: dyndatetime('y,m,d,9'),
        end: dyndatetime('y,m,d,11'),
        resource: 1,
        color: '#b52db9',
        attendees: [],
      },
      {
        id: 'evt2',
        title: 'Budget Review',
        start: dyndatetime('y,m,d,10'),
        end: dyndatetime('y,m,d,13'),
        resource: 2,
        color: '#669ce2',
        attendees: [],
      },
      {
        id: 'evt3',
        title: 'Client Presentation',
        start: dyndatetime('y,m,d,15'),
        end: dyndatetime('y,m,d,18'),
        resource: 2,
        color: '#88bd42',
        attendees: [],
      },
      {
        id: 'evt4',
        title: 'Project Kickoff',
        start: dyndatetime('y,m,d,9'),
        end: dyndatetime('y,m,d,11'),
        resource: 3,
        color: '#b6962f',
        attendees: [],
      },
      {
        id: 'evt5',
        title: 'New Hire Orientation',
        start: dyndatetime('y,m,d,13'),
        end: dyndatetime('y,m,d,16'),
        resource: 4,
        color: '#c864f0',
        attendees: [],
      },
      {
        id: 'evt6',
        title: 'Design Review',
        start: dyndatetime('y,m,d,13'),
        end: dyndatetime('y,m,d,15'),
        resource: 1,
        color: '#c7682d',
        attendees: [],
      },
      {
        id: 'evt7',
        title: 'Product Demo',
        start: dyndatetime('y,m,d+1,9'),
        end: dyndatetime('y,m,d+1,11'),
        resource: 1,
        color: '#ad2b6c',
        attendees: [],
      },
      {
        id: 'evt8',
        title: 'Stakeholder Update',
        start: dyndatetime('y,m,d+1,10'),
        end: dyndatetime('y,m,d+1,12'),
        resource: 2,
        color: '#0f60ca',
        attendees: [],
      },
      {
        id: 'evt9',
        title: 'Code Review',
        start: dyndatetime('y,m,d+1,10'),
        end: dyndatetime('y,m,d+1,12'),
        resource: 3,
        color: '#56a823',
        attendees: [],
      },
      {
        id: 'evt10',
        title: 'Safety Training',
        start: dyndatetime('y,m,d+1,13'),
        end: dyndatetime('y,m,d+1,16'),
        resource: 4,
        color: '#aa36d8',
        attendees: [],
      },
      {
        id: 'evt11',
        title: 'Retrospective',
        start: dyndatetime('y,m,d+2,9'),
        end: dyndatetime('y,m,d+2,11'),
        resource: 1,
        color: '#c45f20',
        attendees: [],
      },
      {
        id: 'evt12',
        title: 'Board Briefing',
        start: dyndatetime('y,m,d+2,13'),
        end: dyndatetime('y,m,d+2,16'),
        resource: 2,
        color: '#1e58a5',
        attendees: [],
      },
      {
        id: 'evt13',
        title: 'Marketing Sync',
        start: dyndatetime('y,m,d+2,10'),
        end: dyndatetime('y,m,d+2,12'),
        resource: 3,
        color: '#549e27',
        attendees: [],
      },
      {
        id: 'evt14',
        title: 'API Workshop',
        start: dyndatetime('y,m,d+2,13'),
        end: dyndatetime('y,m,d+2,16'),
        resource: 4,
        color: '#7c1ca1',
        attendees: [],
      },
      {
        id: 'evt15',
        title: 'Architecture Review',
        start: dyndatetime('y,m,d+3,9'),
        end: dyndatetime('y,m,d+3,11,30'),
        resource: 1,
        color: '#a7511c',
        attendees: [],
      },
      {
        id: 'evt16',
        title: 'Quarterly Planning',
        start: dyndatetime('y,m,d+3,13'),
        end: dyndatetime('y,m,d+3,16'),
        resource: 2,
        color: '#13488d',
        attendees: [],
      },
      {
        id: 'evt17',
        title: 'Hiring Debrief',
        start: dyndatetime('y,m,d+3,10'),
        end: dyndatetime('y,m,d+3,12'),
        resource: 3,
        color: '#51ac19',
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

    var container = document.querySelector('.mds-drop-assignee-on-event-from-list');

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
      var list = document.getElementById('external-employee-list');
      list.innerHTML = '';

      for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        var count = getAssignmentCount(emp.id);

        var item = document.createElement('div');
        item.className = 'mds-employee-item mbsc-flex';
        item.id = 'mds-emp-' + emp.id;
        item.innerHTML =
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
          '</div>';

        list.appendChild(item);

        mobiscroll.draggable('#mds-emp-' + emp.id, {
          dragData: emp,
        });
      }

      // Track drag start/end to toggle global dragging state
      if (list._mdsPointerDown) {
        list.removeEventListener('pointerdown', list._mdsPointerDown);
      }
      list._mdsPointerDown = function (e) {
        if (!e.target.closest('.mds-employee-item')) {
          return;
        }
        function onMove() {
          container.classList.add('mds-external-dragging');
          document.removeEventListener('pointermove', onMove);
        }
        function onUp() {
          container.classList.remove('mds-external-dragging');
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        }
        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      };
      list.addEventListener('pointerdown', list._mdsPointerDown);
    }

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
      }

      return (
        '<div class="mds-custom-event mbsc-flex" id="mds-zone-' +
        event.id +
        '" style="border-left: 4px solid ' +
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
        '<div class="mds-event-drop-hint">Drop people to assign</div>' +
        '</div>'
      );
    }

    function initDropZones() {
      var zones = document.querySelectorAll('.mds-custom-event');
      for (var z = 0; z < zones.length; z++) {
        (function (zone) {
          var eventId = zone.getAttribute('data-event-id');

          mobiscroll.dropcontainer('#mds-zone-' + eventId, {
            onItemDrop: function (dropEvent) {
              var employee = dropEvent.data;

              zone.classList.remove('mds-drop-active', 'mds-drop-conflict');

              for (var i = 0; i < meetings.length; i++) {
                if (meetings[i].id === eventId) {
                  var m = meetings[i];

                  // Prevent duplicate assignment to the same event
                  for (var k = 0; k < m.attendees.length; k++) {
                    if (m.attendees[k].id === employee.id) {
                      mobiscroll.toast({
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
                    calendar.setEvents(meetings);
                    renderEmployeeList();
                  }, 0);

                  mobiscroll.toast({
                    message: employee.name + ' assigned to ' + m.title,
                    color: 'success',
                  });
                  break;
                }
              }
            },
            onItemDragEnter: function (enterEvent) {
              var employee = enterEvent.data;

              zone.classList.remove('mds-drop-active', 'mds-drop-conflict');

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
                  zone.classList.add('mds-drop-conflict');
                } else {
                  var conflict = findConflict(employee.id, eventId);
                  if (conflict) {
                    zone.classList.add('mds-drop-conflict');
                  } else {
                    zone.classList.add('mds-drop-active');
                  }
                }
              } else {
                zone.classList.add('mds-drop-active');
              }
            },
            onItemDragLeave: function () {
              zone.classList.remove('mds-drop-active', 'mds-drop-conflict');
            },
          });
        })(zones[z]);
      }

      // Handle attendee removal on chip click
      var chips = document.querySelectorAll('.mds-attendee-chip');
      for (var c = 0; c < chips.length; c++) {
        chips[c].addEventListener('click', function (e) {
          e.stopPropagation();
          var empId = this.getAttribute('data-emp-id');
          var eventEl = this.closest('.mds-custom-event');
          var evtId = eventEl.getAttribute('data-event-id');

          for (var i = 0; i < meetings.length; i++) {
            if (meetings[i].id === evtId) {
              var attendees = meetings[i].attendees;
              for (var j = 0; j < attendees.length; j++) {
                if (attendees[j].id === empId) {
                  var removedAttendee = attendees[j];
                  var removedIndex = j;
                  var meetingRef = meetings[i];

                  attendees.splice(j, 1);
                  calendar.setEvents(meetings);
                  renderEmployeeList();

                  (function (att, idx, meeting) {
                    mobiscroll.snackbar({
                      message: att.name + ' removed from ' + meeting.title,
                      button: {
                        text: 'Undo',
                        action: function () {
                          meeting.attendees.splice(idx, 0, att);
                          calendar.setEvents(meetings);
                          renderEmployeeList();
                          mobiscroll.toast({
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
    }

    renderEmployeeList();

    var calendar = mobiscroll.eventcalendar('#demo-drop-assignee-on-event-from-list', {
      view: {
        timeline: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          startTime: '08:00',
          endTime: '18:00',
          timeCellStep: 60,
          timeLabelStep: 60,
          virtualScroll: false,
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
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mds-drop-assignee-on-event-from-list" mbsc-page>
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-3 mbsc-flex-col mds-sidebar">
        <div class="mbsc-form-group-title">Team Members</div>
        <div id="external-employee-list" class="mds-employee-list mbsc-flex"></div>
      </div>
      <div class="mbsc-col-sm-9 mds-calendar-wrapper">
        <div id="demo-drop-assignee-on-event-from-list"></div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-drop-assignee-on-event-from-list,
.mds-drop-assignee-on-event-from-list .mbsc-grid,
.mds-drop-assignee-on-event-from-list .mbsc-row {
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
  padding: 10px 12px;
  border-radius: 10px;
  cursor: grab;
  user-select: none;
  background: rgba(128, 128, 128, .5);
  margin: 0 5px 5px 5px;
  touch-action: none;
  transition: background 0.15s, box-shadow 0.2s, transform 0.15s;
}
.mds-employee-item:hover {
  background: rgba(128, 128, 128, .4);
  transform: translateY(-1px);
}
.mds-employee-item:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.mds-employee-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.mds-employee-info {
  flex-direction: column;
  overflow: hidden;
}
.mds-employee-name {
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-employee-count {
  font-size: 13px;
  opacity: 0.55;
}
.mds-calendar-wrapper {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
/* Source item left behind in the sidebar while dragging */
.mds-employee-item.mbsc-drag-clone {
  opacity: 0.8;
}
.mds-custom-event {
  background: #cccccc;
  border-radius: 6px;
  padding: 6px 8px;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  outline: 2px solid transparent;
  transition: background 0.15s;
  position: relative;
}
.mds-event-header {
  flex-direction: column;
  gap: 1px;
}
.mds-event-title {
  font-size: 14px;
  font-weight: 600;
  color: #181818;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-event-time {
  font-size: 12px;
  color: #545454;
}
.mds-event-attendees {
  flex-wrap: wrap;
  gap: 3px;
}
/* Drop hint - hidden by default, shown only during external drag */
.mds-event-drop-hint {
  display: none;
  font-size: 11px;
  font-style: italic;
  color: #686868;
}
/* Show drop hints and dashed borders on events during external drag */
.mds-external-dragging .mds-event-drop-hint {
  display: block;
}
.mds-external-dragging .mds-custom-event {
  outline: 2px dashed #b9b9b9;
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
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
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
  outline: 2px solid rgba(54, 133, 43, 0.8);
  background: rgba(180, 223, 173, 0.8);
}
.mds-custom-event.mds-drop-conflict {
  cursor: not-allowed;
  outline: 2px solid rgba(145, 34, 34, 0.8);
  background: rgba(235, 194, 194, 0.8);
}
.mds-drop-assignee-on-event-from-list .mbsc-timeline-event {
  min-height: 80px;
}
.mds-drop-assignee-on-event-from-list .mbsc-schedule-event-inner {
  height: 100%;
}
  `,
};
