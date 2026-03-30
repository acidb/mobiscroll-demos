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
        { id: 1, name: 'Conference Room A', color: '#f7c4a5' },
        { id: 2, name: 'Board Room B', color: '#a5c8f7' },
        { id: 3, name: 'Meeting Room C', color: '#c4f7a5' },
        { id: 4, name: 'Training Room D', color: '#e0a5f7' },
      ];

      var meetings = [
        {
          id: 'evt1',
          title: 'Sprint Planning',
          start: dyndatetime('y,m,d,9'),
          end: dyndatetime('y,m,d,10,30'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt2',
          title: 'Design Review',
          start: dyndatetime('y,m,d,11'),
          end: dyndatetime('y,m,d,13'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt3',
          title: 'Client Call',
          start: dyndatetime('y,m,d,13'),
          end: dyndatetime('y,m,d,15'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt4',
          title: 'Team Standup',
          start: dyndatetime('y,m,d,9,30'),
          end: dyndatetime('y,m,d,11'),
          resource: 3,
          color: '#c4f7a5',
          attendees: [],
        },
        {
          id: 'evt5',
          title: 'Workshop',
          start: dyndatetime('y,m,d,14'),
          end: dyndatetime('y,m,d,17'),
          resource: 4,
          color: '#e0a5f7',
          attendees: [],
        },
        {
          id: 'evt6',
          title: 'Budget Meeting',
          start: dyndatetime('y,m,d,10'),
          end: dyndatetime('y,m,d,12,30'),
          resource: 2,
          color: '#a5c8f7',
          attendees: [],
        },
        {
          id: 'evt7',
          title: 'Product Demo',
          start: dyndatetime('y,m,d+1,9'),
          end: dyndatetime('y,m,d+1,11,30'),
          resource: 1,
          color: '#f7c4a5',
          attendees: [],
        },
        {
          id: 'evt8',
          title: 'Architecture Review',
          start: dyndatetime('y,m,d+1,13'),
          end: dyndatetime('y,m,d+1,15'),
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
      ];

      // Render employee list and initialize each item as a Mobiscroll draggable
      var listHtml = '';
      for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        listHtml +=
          '<div class="md-employee-item" id="md-emp-' +
          emp.id +
          '">' +
          '<div class="md-employee-avatar" style="background:' +
          emp.color +
          '">' +
          emp.avatar +
          '</div>' +
          '<div class="md-employee-name">' +
          emp.name +
          '</div>' +
          '</div>';
      }
      $('#external-employee-list').html(listHtml);

      for (var j = 0; j < employees.length; j++) {
        (function (employee) {
          $('#md-emp-' + employee.id)
            .mobiscroll()
            .draggable({ dragData: employee });
        })(employees[j]);
      }

      function renderEvent(data) {
        if (data.original.resource) {
          var event = data.original;
          var attendees = event.attendees || [];

          var attendeesHtml = '';
          if (attendees.length > 0) {
            attendeesHtml = '<div class="md-event-attendees">';
            for (var i = 0; i < attendees.length; i++) {
              attendeesHtml +=
                '<span class="md-attendee-chip" style="background:' +
                attendees[i].color +
                '" title="' +
                attendees[i].name +
                '">' +
                attendees[i].avatar +
                '</span>';
            }
            attendeesHtml += '</div>';
          }

          return (
            '<div class="md-custom-event" style="border-left: 4px solid ' +
            (event.color || '#999') +
            '">' +
            '<div class="md-event-header">' +
            '<div class="md-event-title">' +
            event.title +
            '</div>' +
            '<div class="md-event-time">' +
            data.start +
            ' - ' +
            data.end +
            '</div>' +
            '</div>' +
            attendeesHtml +
            '<div class="md-drop-zone" data-event-id="' +
            event.id +
            '">' +
            '<svg class="md-drop-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M12 5v14M5 12h14"/>' +
            '</svg>' +
            '<span>' +
            (attendees.length === 0 ? 'Drop people here' : 'Add more') +
            '</span>' +
            '</div>' +
            '</div>'
          );
        }
      }
      var inst = $('#demo-drop-resources-to-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: {
              type: 'week',
              startDay: 1, // Monday
              endDay: 5, // Friday
              startTime: '08:00',
              endTime: '18:00',
              timeCellStep: 60,
              timeLabelStep: 60,
            },
          },
          data: meetings,
          resources: rooms,
          renderTimelineEvent: renderEvent,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          clickToCreate: false,
          eventDelete: false,
          showEventTooltip: false,
          externalDrop: true,
          onEventCreate: function (args) {
            if (args.action !== 'externalDrop') {
              return;
            }

            // Identify the existing meeting at the drop position by matching the generated start time and resource against the meetings array.
            var droppedTime = new Date(args.event.start);
            var droppedResource = args.event.resource;
            var employee = args.event;

            for (var i = 0; i < meetings.length; i++) {
              var m = meetings[i];
              if (m.resource === droppedResource) {
                var mStart = new Date(m.start);
                var mEnd = new Date(m.end);
                if (droppedTime >= mStart && droppedTime < mEnd) {
                  // Prevent assigning the same person twice.
                  for (var k = 0; k < m.attendees.length; k++) {
                    if (m.attendees[k].id === employee.id) {
                      return false;
                    }
                  }
                  m.attendees.push({
                    id: employee.id,
                    name: employee.name,
                    avatar: employee.avatar,
                    color: employee.color,
                  });
                  $('#md-emp-' + employee.id).remove();
                  setTimeout(function () {
                    inst.setEvents(meetings);
                  }, 0);
                  mobiscroll.toast({
                    message: employee.name + ' assigned',
                    color: 'success',
                  });
                  break;
                }
              }
            }

            return false; // Always cancel calendar event creation.
          },
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-drop-resources-to-events">
  <div class="md-sidebar">
    <div class="md-sidebar-header">
      <h3 class="md-sidebar-title">Employees</h3>
      <p class="md-sidebar-subtitle">Drag onto a meeting to assign</p>
    </div>
    <div id="external-employee-list" class="md-employee-list">
    </div>
  </div>

  <div class="md-calendar-wrapper">
    <div id="demo-drop-resources-to-events"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-drop-resources-to-events {
  display: flex;
  height: 100%;
}
.md-sidebar {
  width: 220px;
  min-width: 220px;
  background: #f9fafb;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.md-sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}
.md-sidebar-title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}
.md-sidebar-subtitle {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
}
.md-employee-list {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.md-employee-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  background: #fff;
  border: 1px solid #e5e7eb;
  touch-action: none;
}
.md-employee-item:hover {
  background: #f3f4f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.md-employee-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}
.md-employee-name {
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.md-calendar-wrapper {
  flex: 1;
  overflow: hidden;
}
.md-custom-event {
  background: #fff;
  border-radius: 6px;
  padding: 6px 8px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
.md-event-header {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.md-event-title {
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.md-event-time {
  font-size: 11px;
  color: #6b7280;
}
.md-event-attendees {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
.md-attendee-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
}
.md-drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 6px;
  margin-top: auto;
  border: 1.5px dashed #d1d5db;
  border-radius: 4px;
  font-size: 11px;
  color: #9ca3af;
  background: #f9fafb;
  transition: all 0.2s ease;
  min-height: 24px;
}
.md-drop-icon {
  flex-shrink: 0;
  opacity: 0.5;
}
.md-drop-zone.mbsc-drop-hover {
  border-color: #3b82f6;
  background: #eff6ff;
  color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}
.md-drop-zone.mbsc-drop-hover .md-drop-icon {
  opacity: 1;
}
.md-drop-resources-to-events .mbsc-timeline-event {
  min-height: 80px;
}
.md-drop-resources-to-events .mbsc-schedule-event-inner {
  height: 100%;
}
  `,
};
