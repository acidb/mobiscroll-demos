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
          description: 'Pain Management Specialist',
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
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
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
                data.original.patient +
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
}

.resource-avatar {
  position: absolute;
  height: 40px;
  width: 40px;
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

.mds-other-event{
  font-size: 12px;
}
  `,
};
