import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var user = {
      id: 2,
      name: 'Willis Cane',
      role: 'limited',
    };

    var myEvents = [
      {
        start: 'dyndatetime(y,m,d-1,11)',
        end: 'dyndatetime(y,m,d-1,15)',
        title: 'Task 1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d-1,14)',
        end: 'dyndatetime(y,m,d-1,17)',
        title: 'Task 2',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d-1,12)',
        end: 'dyndatetime(y,m,d-1,14)',
        title: 'Task 3',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 4',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Task 5',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 6',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 7',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,17)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Task 8',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,11,30)',
        title: 'Task 9',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Task 10',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Task 11',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Task 12',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,16,30)',
        end: 'dyndatetime(y,m,d,19)',
        title: 'Task 13',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+1,11)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Task 14',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+1,16)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Task 15',
        resource: 5,
      },
    ];

    var myResources = [
      {
        id: 1,
        name: 'Jude Chester',
        color: '#fadaff',
        eventCreation: false,
      },
      {
        id: 2,
        name: 'Willis Cane',
        color: '#ffffd0',
      },
      {
        id: 3,
        name: 'Derek Austyn',
        color: '#e1ffd6',
        eventCreation: false,
      },
      {
        id: 4,
        name: 'Merv Kenny',
        color: '#fac4c4',
        eventCreation: false,
      },
      {
        id: 5,
        name: 'Fred Waldez',
        color: '#bfdeff',
        eventCreation: false,
      },
    ];

    var myCalendar = mobiscroll.eventcalendar('#demo-role-based-timeline', {
      view: {
        timeline: {
          type: 'week',
          startTime: '08:00',
          endTime: '20:00',
        },
      },
      data: myEvents,
      resources: myResources,
    });

    // Simulate login
    function login() {
      var newTasks = myEvents.slice();
      var newResources = myResources.slice();
      var editable = user.role != 'readonly';
      var task;
      var i;

      if (user.role === 'readonly') {
        user.name = 'Client';

        for (i = 0; i < newTasks.length; i++) {
          task = newTasks[i];

          task.editable = false;
          task.color = '#af2ec3';
        }

        mobiscroll.toast({
          message: 'Client with read-only access logged in',
          context: '#demo-static-roles',
          display: 'bottom',
        });
      } else if (user.role === 'limited') {
        for (i = 0; i < newTasks.length; i++) {
          task = newTasks[i];

          if (task.resource !== user.id) {
            task.editable = false;
            task.color = '#6a6a6a';
          } else {
            task.color = '#af2424';
          }
        }

        for (i = 0; i < newResources.length; i++) {
          var res = newResources[i];

          if (res.id !== user.id) {
            res.eventCreation = false;
          }
        }

        mobiscroll.toast({
          message: 'User ' + user.name + ' with limited access logged in',
          context: '#demo-static-roles',
          display: 'bottom',
        });
      } else {
        user.name = 'Project Manager';

        mobiscroll.toast({
          message: 'User with full access logged in',
          context: '#demo-static-roles',
          display: 'bottom',
        });
      }

      myCalendar.setEvents(newTasks);

      myCalendar.setOptions({
        resources: newResources,
        clickToCreate: editable,
        dragToCreate: editable,
        dragToMove: editable,
        dragToResize: editable,
        eventDelete: editable,
      });
    }

    login();
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-role-based-timeline" class="mds-role-based-timeline"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-role-based-timeline .mbsc-schedule-event:not(.mbsc-readonly-event) .mbsc-schedule-event-background {
  border: 2px solid currentColor;
}

.mds-role-based-timeline .mbsc-schedule-event .mbsc-schedule-event-background::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, .6);
}
  `,
};
