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
      var myEvents = [
        {
          id: 1,
          resource: 2,
          title: '',
          start: 'dyndatetime(y,m-1,d,10)',
          end: 'dyndatetime(y,m-1,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 2,
          resource: 4,
          title: '',
          start: 'dyndatetime(y,m-1,d,8)',
          end: 'dyndatetime(y,m-1,d,18)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 3,
          resource: 6,
          title: '',
          start: 'dyndatetime(y,m-1,d,12)',
          end: 'dyndatetime(y,m-1,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 4,
          resource: 8,
          title: '',
          start: 'dyndatetime(y,m-1,d,10)',
          end: 'dyndatetime(y,m-1,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 5,
          resource: 10,
          title: '',
          start: 'dyndatetime(y,m-1,d,8)',
          end: 'dyndatetime(y,m-1,d,18)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 6,
          resource: 12,
          title: '',
          start: 'dyndatetime(y,m-1,d,12)',
          end: 'dyndatetime(y,m-1,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        /// 40 min appointments
        {
          id: 1,
          resource: 5,
          title: 'John Doe',
          start: 'dyndatetime(y,m,10,13,0)',
          end: 'dyndatetime(y,m,10,13,40)',
        },
        {
          id: 2,
          resource: 5,
          title: 'Mary Smith',
          start: 'dyndatetime(y,m,10,14,20)',
          end: 'dyndatetime(y,m,10,15,0)',
        },
        {
          id: 3,
          resource: 5,
          title: 'Peter Johnson',
          start: 'dyndatetime(y,m,10,18,0)',
          end: 'dyndatetime(y,m,10,18,40)',
        },
        {
          id: 4,
          resource: 3,
          title: 'Lisa White',
          start: 'dyndatetime(y,m,10,10,40)',
          end: 'dyndatetime(y,m,10,11,20)',
        },
        {
          id: 5,
          resource: 3,
          title: 'James Green',
          start: 'dyndatetime(y,m,10,14,20)',
          end: 'dyndatetime(y,m,10,15,0)',
        },
        {
          id: 6,
          resource: 3,
          title: 'Anna Brown',
          start: 'dyndatetime(y,m,10,15,40)',
          end: 'dyndatetime(y,m,10,16,20)',
        },
        {
          id: 7,
          resource: 7,
          title: 'Michael Clark',
          start: 'dyndatetime(y,m,10,10,20)',
          end: 'dyndatetime(y,m,10,11,0)',
        },
        {
          id: 8,
          resource: 7,
          title: 'Sophia Miller',
          start: 'dyndatetime(y,m,10,11,20)',
          end: 'dyndatetime(y,m,10,12,0)',
        },
        {
          id: 9,
          resource: 7,
          title: 'David Lee',
          start: 'dyndatetime(y,m,10,16,40)',
          end: 'dyndatetime(y,m,10,17,20)',
        },
        {
          id: 10,
          resource: 9,
          title: 'Elizabeth Taylor',
          start: 'dyndatetime(y,m,10,11,20)',
          end: 'dyndatetime(y,m,10,12,0)',
        },
        {
          id: 11,
          resource: 9,
          title: 'John Williams',
          start: 'dyndatetime(y,m,10,13,40)',
          end: 'dyndatetime(y,m,10,14,20)',
        },
        {
          id: 12,
          resource: 9,
          title: 'Emma Davis',
          start: 'dyndatetime(y,m,10,14,40)',
          end: 'dyndatetime(y,m,10,15,20)',
        },
        {
          id: 13,
          resource: 1,
          title: 'Daniel Harris',
          start: 'dyndatetime(y,m,10,10,40)',
          end: 'dyndatetime(y,m,10,11,20)',
        },
        {
          id: 14,
          resource: 1,
          title: 'Grace Johnson',
          start: 'dyndatetime(y,m,10,13,40)',
          end: 'dyndatetime(y,m,10,14,20)',
        },
        {
          id: 15,
          resource: 1,
          title: 'Olivia Martinez',
          start: 'dyndatetime(y,m,10,17,0)',
          end: 'dyndatetime(y,m,10,17,40)',
        },
        {
          id: 16,
          resource: 1,
          title: 'Ethan Moore',
          start: 'dyndatetime(y,m,10,18,20)',
          end: 'dyndatetime(y,m,10,19,0)',
        },
        {
          id: 17,
          resource: 11,
          title: 'Ava Wilson',
          start: 'dyndatetime(y,m,10,14,0)',
          end: 'dyndatetime(y,m,10,14,40)',
        },
        {
          id: 18,
          resource: 11,
          title: 'Lucas Anderson',
          start: 'dyndatetime(y,m,10,15,40)',
          end: 'dyndatetime(y,m,10,16,20)',
        },
        {
          id: 19,
          resource: 11,
          title: 'Mia Thomas',
          start: 'dyndatetime(y,m,10,16,40)',
          end: 'dyndatetime(y,m,10,17,20)',
        },
        {
          id: 20,
          resource: 11,
          title: 'Noah Jackson',
          start: 'dyndatetime(y,m,10,18,40)',
          end: 'dyndatetime(y,m,10,19,20)',
        },
        {
          id: 21,
          resource: 1,
          title: 'Charlotte White',
          start: 'dyndatetime(y,m,11,11,40)',
          end: 'dyndatetime(y,m,11,12,20)',
        },
        {
          id: 22,
          resource: 1,
          title: 'Mason Harris',
          start: 'dyndatetime(y,m,11,14,40)',
          end: 'dyndatetime(y,m,11,15,20)',
        },
        {
          id: 23,
          resource: 1,
          title: 'Lily Clark',
          start: 'dyndatetime(y,m,11,15,40)',
          end: 'dyndatetime(y,m,11,16,20)',
        },
        {
          id: 24,
          resource: 3,
          title: 'Benjamin Lewis',
          start: 'dyndatetime(y,m,11,9,40)',
          end: 'dyndatetime(y,m,11,10,20)',
        },
        {
          id: 25,
          resource: 3,
          title: 'James Wilson',
          start: 'dyndatetime(y,m,11,10,40)',
          end: 'dyndatetime(y,m,11,11,20)',
        },
        {
          id: 26,
          resource: 3,
          title: 'Amelia Young',
          start: 'dyndatetime(y,m,11,14,20)',
          end: 'dyndatetime(y,m,11,15,0)',
        },
        {
          id: 27,
          resource: 3,
          title: 'Jack Moore',
          start: 'dyndatetime(y,m,11,15,20)',
          end: 'dyndatetime(y,m,11,16,0)',
        },
        {
          id: 28,
          resource: 5,
          title: 'Sophia Scott',
          start: 'dyndatetime(y,m,11,15,40)',
          end: 'dyndatetime(y,m,11,16,20)',
        },
        {
          id: 29,
          resource: 5,
          title: 'William Lee',
          start: 'dyndatetime(y,m,11,18,0)',
          end: 'dyndatetime(y,m,11,18,40)',
        },
        {
          id: 30,
          resource: 7,
          title: 'Isabella Turner',
          start: 'dyndatetime(y,m,11,11,40)',
          end: 'dyndatetime(y,m,11,12,20)',
        },

        {
          id: 31,
          resource: 9,
          title: 'Meeting with Alex',
          start: 'dyndatetime(y,m,11,11,20)',
          end: 'dyndatetime(y,m,11,12,0)',
        },
        {
          id: 32,
          resource: 9,
          title: 'Team Sync with Sara',
          start: 'dyndatetime(y,m,11,12,40)',
          end: 'dyndatetime(y,m,11,13,20)',
        },
        {
          id: 33,
          resource: 9,
          title: 'Marketing Review with John',
          start: 'dyndatetime(y,m,11,15,40)',
          end: 'dyndatetime(y,m,11,16,20)',
        },
        {
          id: 34,
          resource: 11,
          title: 'Client Call with Michael',
          start: 'dyndatetime(y,m,11,13,20)',
          end: 'dyndatetime(y,m,11,14,0)',
        },
        {
          id: 35,
          resource: 11,
          title: 'Strategy Discussion with Emma',
          start: 'dyndatetime(y,m,11,14,40)',
          end: 'dyndatetime(y,m,11,15,20)',
        },
        {
          id: 36,
          resource: 11,
          title: 'Budget Planning with Olivia',
          start: 'dyndatetime(y,m,11,16,20)',
          end: 'dyndatetime(y,m,11,17,0)',
        },
        {
          id: 37,
          resource: 11,
          title: 'Training Session with Jake',
          start: 'dyndatetime(y,m,11,17,20)',
          end: 'dyndatetime(y,m,11,18,0)',
        },
        {
          id: 38,
          resource: 3,
          title: 'Design Review with Lily',
          start: 'dyndatetime(y,m,12,10,40)',
          end: 'dyndatetime(y,m,12,11,20)',
        },
        {
          id: 39,
          resource: 1,
          title: 'Follow-up with David',
          start: 'dyndatetime(y,m,12,12,20)',
          end: 'dyndatetime(y,m,12,13,0)',
        },
        {
          id: 40,
          resource: 1,
          title: 'Project Kickoff with Ryan',
          start: 'dyndatetime(y,m,12,15,0)',
          end: 'dyndatetime(y,m,12,15,40)',
        },
        {
          id: 41,
          resource: 3,
          title: 'Meeting with Sarah',
          start: 'dyndatetime(y,m,12,15,0)',
          end: 'dyndatetime(y,m,12,15,40)',
        },
        {
          id: 42,
          resource: 5,
          title: 'Workshop with Andrew',
          start: 'dyndatetime(y,m,12,15,0)',
          end: 'dyndatetime(y,m,12,15,40)',
        },
        {
          id: 43,
          resource: 5,
          title: 'Team Stand-up with Grace',
          start: 'dyndatetime(y,m,12,15,40)',
          end: 'dyndatetime(y,m,12,16,20)',
        },
        {
          id: 44,
          resource: 7,
          title: 'Check-in with Thomas',
          start: 'dyndatetime(y,m,12,12,20)',
          end: 'dyndatetime(y,m,12,13,0)',
        },
        {
          id: 45,
          resource: 7,
          title: 'Discussion with Ben',
          start: 'dyndatetime(y,m,12,13,20)',
          end: 'dyndatetime(y,m,12,14,0)',
        },
        {
          id: 46,
          resource: 7,
          title: 'Product Demo with Zoe',
          start: 'dyndatetime(y,m,12,18,20)',
          end: 'dyndatetime(y,m,12,19,0)',
        },
        {
          id: 47,
          resource: 9,
          title: 'Follow-up Call with Emily',
          start: 'dyndatetime(y,m,12,9,0)',
          end: 'dyndatetime(y,m,12,9,40)',
        },
        {
          id: 48,
          resource: 9,
          title: 'Client Meeting with Jacob',
          start: 'dyndatetime(y,m,12,11,0)',
          end: 'dyndatetime(y,m,12,11,40)',
        },
        {
          id: 49,
          resource: 9,
          title: 'Contract Negotiation with Ava',
          start: 'dyndatetime(y,m,12,14,0)',
          end: 'dyndatetime(y,m,12,14,40)',
        },
        {
          id: 50,
          resource: 9,
          title: 'Legal Review with Lily',
          start: 'dyndatetime(y,m,12,15,0)',
          end: 'dyndatetime(y,m,12,15,40)',
        },
        {
          id: 51,
          resource: 11,
          title: 'Team Briefing with Noah',
          start: 'dyndatetime(y,m,12,14,40)',
          end: 'dyndatetime(y,m,12,15,20)',
        },
        {
          id: 52,
          resource: 11,
          title: 'Quarterly Review with Mia',
          start: 'dyndatetime(y,m,12,16,0)',
          end: 'dyndatetime(y,m,12,16,40)',
        },
        {
          id: 53,
          resource: 1,
          title: 'Sync with Liam',
          start: 'dyndatetime(y,m,13,11,40)',
          end: 'dyndatetime(y,m,13,12,20)',
        },
        {
          id: 54,
          resource: 1,
          title: 'Feedback Session with Olivia',
          start: 'dyndatetime(y,m,13,12,40)',
          end: 'dyndatetime(y,m,13,13,20)',
        },
        {
          id: 55,
          resource: 1,
          title: 'Budget Planning with Jack',
          start: 'dyndatetime(y,m,13,16,20)',
          end: 'dyndatetime(y,m,13,17,0)',
        },
        {
          id: 56,
          resource: 1,
          title: 'Project Discussion with Mia',
          start: 'dyndatetime(y,m,13,17,20)',
          end: 'dyndatetime(y,m,13,18,0)',
        },
        {
          id: 57,
          resource: 3,
          title: 'Brainstorming with Ethan',
          start: 'dyndatetime(y,m,13,9,40)',
          end: 'dyndatetime(y,m,13,10,20)',
        },
        {
          id: 58,
          resource: 3,
          title: 'Design Discussion with Rachel',
          start: 'dyndatetime(y,m,13,10,40)',
          end: 'dyndatetime(y,m,13,11,20)',
        },
        {
          id: 59,
          resource: 3,
          title: 'Stand-up with James',
          start: 'dyndatetime(y,m,13,14,0)',
          end: 'dyndatetime(y,m,13,14,40)',
        },
        {
          id: 60,
          resource: 5,
          title: 'Planning with Sophia',
          start: 'dyndatetime(y,m,13,14,0)',
          end: 'dyndatetime(y,m,13,14,40)',
        },
        {
          id: 61,
          resource: 5,
          title: 'Strategy with Charlotte',
          start: 'dyndatetime(y,m,13,15,0)',
          end: 'dyndatetime(y,m,13,15,40)',
        },
        {
          id: 62,
          resource: 5,
          title: 'Design Briefing with Lucas',
          start: 'dyndatetime(y,m,13,17,40)',
          end: 'dyndatetime(y,m,13,18,20)',
        },
        {
          id: 63,
          resource: 7,
          title: 'Review with Ben',
          start: 'dyndatetime(y,m,13,12,20)',
          end: 'dyndatetime(y,m,13,13,0)',
        },
        {
          id: 64,
          resource: 7,
          title: 'Follow-up with Lily',
          start: 'dyndatetime(y,m,13,13,0)',
          end: 'dyndatetime(y,m,13,13,40)',
        },
        {
          id: 65,
          resource: 7,
          title: 'Update with Jack',
          start: 'dyndatetime(y,m,13,17,20)',
          end: 'dyndatetime(y,m,13,18,0)',
        },
        {
          id: 66,
          resource: 9,
          title: 'Check-in with Ava',
          start: 'dyndatetime(y,m,13,9,40)',
          end: 'dyndatetime(y,m,13,10,20)',
        },
        {
          id: 67,
          resource: 9,
          title: 'Client Call with Ben',
          start: 'dyndatetime(y,m,13,10,40)',
          end: 'dyndatetime(y,m,13,11,20)',
        },
        {
          id: 68,
          resource: 9,
          title: 'Wrap-up with Isabella',
          start: 'dyndatetime(y,m,13,14,0)',
          end: 'dyndatetime(y,m,13,14,40)',
        },
        {
          id: 69,
          resource: 9,
          title: 'Weekly Meeting with Olivia',
          start: 'dyndatetime(y,m,13,15,0)',
          end: 'dyndatetime(y,m,13,15,40)',
        },
        {
          id: 70,
          resource: 11,
          title: 'Review with Noah',
          start: 'dyndatetime(y,m,13,13,20)',
          end: 'dyndatetime(y,m,13,14,0)',
        },
        {
          id: 71,
          resource: 11,
          title: 'Project Review with Jack',
          start: 'dyndatetime(y,m,13,15,0)',
          end: 'dyndatetime(y,m,13,15,40)',
        },
        {
          id: 72,
          resource: 11,
          title: 'Team Call with Ella',
          start: 'dyndatetime(y,m,13,18,0)',
          end: 'dyndatetime(y,m,13,18,40)',
        },
      ];

      var myInvalids = [
        {
          resource: [1, 2],
          start: '00:00',
          end: '10:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [1, 2],
          start: '22:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [3, 4],
          start: '00:00',
          end: '08:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [3, 4],
          start: '18:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [5, 6],
          start: '00:00',
          end: '12:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [5, 6],
          start: '22:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [7, 8],
          start: '00:00',
          end: '10:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [7, 8],
          start: '22:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [9, 10],
          start: '00:00',
          end: '08:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [9, 10],
          start: '18:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [11, 12],
          start: '00:00',
          end: '12:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [11, 12],
          start: '22:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
      ];

      var myResources = [
        {
          id: 2,
          name: ' ',
          color: 'rgb(118, 238, 116)',
          cssClass: 'resource-column-schedule',
        },
        {
          id: 1,
          name: 'Dr. James Cole',
          color: 'rgb(209, 155, 155)',
          cssClass: 'resource-column-parent',
          description: 'Injury Recovery Specialist',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
        {
          id: 4,
          name: ' ',
          color: 'rgb(118, 238, 116)',
          eventCreation: false,
          cssClass: 'resource-column-schedule',
        },
        {
          id: 3,
          name: 'Dr. Anna Hayes',
          color: 'rgb(148, 162, 234)',
          cssClass: 'resource-column-parent',
          description: 'Sports Physiotherapist',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 6,
          name: ' ',
          color: 'rgb(118, 238, 116)',

          eventCreation: false,
          cssClass: 'resource-column-schedule',
        },
        {
          id: 5,
          name: 'Dr. Mark Lewis',
          color: 'rgb(134, 191, 188)',
          cssClass: 'resource-column-parent',
          description: 'Mobility Recovery Expert',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 8,
          name: ' ',
          color: 'rgb(118, 238, 116)',
          eventCreation: false,
          cssClass: 'resource-column-schedule',
        },
        {
          id: 7,
          name: 'Dr. Emily Carter',
          color: 'rgb(201, 164, 254)',
          cssClass: 'resource-column-parent',
          description: 'Chiropractic Specialist',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 10,
          name: ' ',
          color: 'rgb(118, 238, 116)',
          eventCreation: false,
          cssClass: 'resource-column-schedule',
        },
        {
          id: 9,
          name: 'Dr. Robert Stone',
          color: 'rgb(239, 161, 137)',
          cssClass: 'resource-column-parent',
          description: 'Orthopedic Surgeon',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 12,
          name: ' ',
          color: 'rgb(118, 238, 116)',
          eventCreation: false,
          cssClass: 'resource-column-schedule',
        },
        {
          id: 11,
          name: 'Dr. Sophia Miller',
          color: 'rgb(0, 150, 136)',
          cssClass: 'resource-column-parent',
          description: 'Sports Physiotherapist',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
      ];

      var myView = {
        schedule: { type: 'week', startDay: 1, endDay: 5, startTime: '08:00', endTime: '20:00', allDay: false },
      };

      $('#demo-desktop-week-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          dragTimeStep: 20,
          data: myEvents,
          eventOverlap: false,
          groupBy: 'date',
          invalid: myInvalids,
          renderResource: function (resource) {
            if (resource.cssClass !== 'resource-column-parent') {
              return ' ';
            }
            return (
              '<div class="resource-template-container">' +
              '<div class="resource-name">' +
              resource.name +
              '</div>' +
              '<div class="resource-description">' +
              resource.description +
              '</div>' +
              '<img class="resource-avatar" src="' +
              resource.img +
              '"/>' +
              '</div>'
            );
          },
          renderScheduleEvent: function (data) {
            if (data.original.type == 'availability') {
              return '<div class="mds-availability-bar" style="background-color: ' + data.color + ';"></div>';
            } else {
              return (
                '<div class="mds-other-event" style="background:' +
                data.color +
                ';">' +
                '<div class="mds-other-content">' +
                '<div class="mds-other-title">' +
                'Patient: ' +
                data.original.title +
                '<br>' +
                data.start +
                '-' +
                data.end +
                '</div>' +
                '</div>' +
                '</div>'
              );
            }
          },
          resources: myResources,
          view: myView,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-desktop-week-view"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `

.resource-column-schedule .mbsc-schedule-event-range {
  display: none;
}

.resource-column-schedule .mbsc-schedule-event {
  margin-left: 4px;
}

.resource-column-schedule {
  width: 15px;
} 

.resource-column-parent {
  width: 250px;
} 

.resource-template-container {
  position: relative;
  padding-left: 80px;
  text-align: left;
  padding-bottom: 10px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.resource-avatar {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 20px;
  left: 10px;
  transform: translateY(-50%);
}

.resource-name {
  font-weight: 600;
  font-size: 16px;
  word-wrap: break-word;
  line-height: 1.2;
}

.resource-description {
  font-size: 12px;
  margin-top: 5px;
}

.mds-availability-bar {
  width: 8px;
  height: 100%;
  border-radius: 5px;
}

.mds-other-event {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.mds-other-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.mds-other-title {
  text-align: center;
  color: black;
}

.mds-other-event {
  font-size: 12px;
}
  `,
};
