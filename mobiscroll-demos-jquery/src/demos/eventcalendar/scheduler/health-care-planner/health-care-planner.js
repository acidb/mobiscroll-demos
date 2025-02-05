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
      var now = new Date();
      var today = new Date(now.setMinutes(59));
      var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

      var myResources = [
        {
          id: 1,
          name: 'Dr. James Cole',
          color: 'rgb(203, 57, 57)',
          cssClass: 'resource-column-parent',
          description: 'Injury Recovery Specialist',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
        {
          id: 2,
          name: ' ',
          color: 'rgb(28, 161, 26)',
          cssClass: 'resource-column-schedule',
        },
        {
          id: 3,
          name: 'Dr. Anna Hayes',
          color: 'rgb(51, 74, 185)',
          cssClass: 'resource-column-parent',
          description: 'Sports Physiotherapist',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 4,
          name: ' ',
          color: 'rgb(28, 161, 26)',
          cssClass: 'resource-column-schedule',
        },
        {
          id: 5,
          name: 'Dr. Mark Lewis',
          color: 'rgb(23, 116, 112)',
          cssClass: 'resource-column-parent',
          description: 'Mobility Recovery Expert',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 6,
          name: ' ',
          color: 'rgb(28, 161, 26)',
          cssClass: 'resource-column-schedule',
        },
      ];

      var myEvents = [
        // availability
        {
          id: 1,
          resource: 2,
          title: '',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 2,
          resource: 4,
          title: '',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,18)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        {
          id: 3,
          resource: 6,
          title: '',
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,22)',
          recurring: { repeat: 'daily' },
          type: 'availability',
          editable: false,
        },
        // events
        {
          id: 4,
          resource: 1,
          title: 'Recovery',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,11,45)',
          patientId: 654,
        },
        {
          id: 5,
          resource: 1,
          title: 'Consultation',
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,13,45)',
          patientId: 655,
        },
        {
          id: 6,
          resource: 1,
          title: 'Physical Therapy',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16,45)',
          patientId: 659,
        },
        {
          id: 11,
          resource: 3,
          title: 'Follow-up Check',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,16,45)',
          patientId: 660,
        },
        {
          id: 7,
          resource: 3,
          title: 'Routine Examination',
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,12,45)',
          patientId: 691,
        },
        {
          id: 8,
          resource: 5,
          title: 'Surgery Prep',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,14,45)',
          patientId: 673,
        },
        {
          id: 9,
          resource: 5,
          title: 'Post-Op Care',
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,17,45)',
          patientId: 676,
        },
        {
          id: 10,
          resource: 5,
          title: 'Health Screening',
          start: 'dyndatetime(y,m,d,18)',
          end: 'dyndatetime(y,m,d,19,45)',
          patientId: 671,
        },
      ];

      var myView = {
        schedule: { type: 'week', allDay: false },
      };

      $('#demo-desktop-week-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: myView,
          resources: myResources,
          groupBy: 'date',
          eventOverlap: false,
          invalid: [
            {
              recurring: {
                repeat: 'daily',
                until: yesterday,
              },
            },
            {
              start: yesterday,
              end: today,
            },
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
          ],
          data: myEvents,
          renderResource: function (resource) {
            if (resource.cssClass !== 'resource-column-parent') {
              return ' ';
            }
            return (
              '<div class="resource-template-content">' +
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
  width: 220px;
} 

.resource-template-content {
  position: relative;
  padding-left: 80px;
  text-align: left;
  padding-bottom: 10px;
  font-weight: 400;
}

.resource-avatar {
  position: absolute;
  max-height: 50px;
  max-width: 50px;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 40px;
  padding-bottom: 15px;

}

.resource-name {
  font-weight: 600;
  font-size: 16px;
}

.mds-availability-bar {
  width: 8px;
  height: 100%;
  border-radius: 10px;
}

.mds-other-event {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.mds-other-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.mds-other-title {
  text-align: center;
  color: white;
}
  `,
};
