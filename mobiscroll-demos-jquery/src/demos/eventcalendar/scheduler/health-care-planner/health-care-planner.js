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
          start: 'dyndatetime(y,m,5,10,45)',
          end: 'dyndatetime(y,m,5,11,45)',
        },
        {
          id: 5,
          resource: 1,
          title: 'Consultation',
          start: 'dyndatetime(y,m,5,12,0)',
          end: 'dyndatetime(y,m,5,13,0)',
        },
        {
          id: 11,
          resource: 3,
          title: 'Follow-up Check',
          start: 'dyndatetime(y,m,5,16,0)',
          end: 'dyndatetime(y,m,5,17,0)',
        },
        {
          id: 7,
          resource: 3,
          title: 'Routine Examination',
          start: 'dyndatetime(y,m,5,11,0)',
          end: 'dyndatetime(y,m,5,12,0)',
        },
        {
          id: 8,
          resource: 5,
          title: 'Surgery Prep',
          start: 'dyndatetime(y,m,5,13,0)',
          end: 'dyndatetime(y,m,5,14,0)',
        },
        {
          id: 9,
          resource: 5,
          title: 'Post-Op Care',
          start: 'dyndatetime(y,m,5,16,0)',
          end: 'dyndatetime(y,m,5,17,0)',
        },
        {
          id: 10,
          resource: 5,
          title: 'Health Screening',
          start: 'dyndatetime(y,m,5,18,0)',
          end: 'dyndatetime(y,m,5,19,30)',
        },
        {
          id: 'mbsc_4',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,5,20,0)',
          end: 'dyndatetime(y,m,5,21,0)',
        },
        {
          id: 'mbsc_7',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,5,15,0)',
          end: 'dyndatetime(y,m,5,16,15)',
        },
        {
          id: 'mbsc_9',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,5,18,30)',
          end: 'dyndatetime(y,m,5,19,30)',
        },
        {
          id: 'mbsc_3',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,6,16,0)',
          end: 'dyndatetime(y,m,6,17,0)',
        },
        {
          id: 'mbsc_4',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,6,18,0)',
          end: 'dyndatetime(y,m,6,19,15)',
        },
        {
          id: 'mbsc_24',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,6,10,45)',
          end: 'dyndatetime(y,m,6,11,30)',
        },
        {
          id: 'mbsc_25',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,6,10,30)',
          end: 'dyndatetime(y,m,6,11,30)',
        },
        {
          id: 'mbsc_26',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,6,14,15)',
          end: 'dyndatetime(y,m,6,15,15)',
        },
        {
          id: 'mbsc_27',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,6,14,15)',
          end: 'dyndatetime(y,m,6,15,15)',
        },
        {
          id: 'mbsc_28',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,6,18,0)',
          end: 'dyndatetime(y,m,6,19,0)',
        },
        {
          id: 'mbsc_7',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,4,13,0)',
          end: 'dyndatetime(y,m,4,14,0)',
        },
        {
          id: 'mbsc_8',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,4,20,0)',
          end: 'dyndatetime(y,m,4,21,0)',
        },
        {
          id: 'mbsc_1',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,4,18,30)',
          end: 'dyndatetime(y,m,4,19,30)',
        },
        {
          id: 'mbsc_3',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,4,13,0)',
          end: 'dyndatetime(y,m,4,14,0)',
        },
        {
          id: 'mbsc_4',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,4,15,15)',
          end: 'dyndatetime(y,m,4,16,15)',
        },
        {
          id: 'mbsc_5',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,11,45)',
          end: 'dyndatetime(y,m,4,12,45)',
        },
        {
          id: 'mbsc_6',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,13,0)',
          end: 'dyndatetime(y,m,4,14,0)',
        },
        {
          id: 'mbsc_7',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,17,30)',
          end: 'dyndatetime(y,m,4,18,30)',
        },
        {
          id: 'mbsc_8',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,20,45)',
          end: 'dyndatetime(y,m,4,21,45)',
        },
        {
          id: 'mbsc_3',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,3,9,30)',
          end: 'dyndatetime(y,m,3,10,30)',
        },
        {
          id: 'mbsc_4',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,11,0)',
          end: 'dyndatetime(y,m,3,12,15)',
        },
        {
          id: 'mbsc_9',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,3,13,0)',
          end: 'dyndatetime(y,m,3,14,15)',
        },
        {
          id: 'mbsc_10',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,3,15,0)',
          end: 'dyndatetime(y,m,3,16,0)',
        },
        {
          id: 'mbsc_11',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,3,18,15)',
          end: 'dyndatetime(y,m,3,19,15)',
        },
        {
          id: 'mbsc_12',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,3,19,45)',
          end: 'dyndatetime(y,m,3,20,45)',
        },
        {
          id: 'mbsc_13',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,3,11,0)',
          end: 'dyndatetime(y,m,3,12,15)',
        },
        {
          id: 'mbsc_14',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,3,15,45)',
          end: 'dyndatetime(y,m,3,17,0)',
        },
        {
          id: 'mbsc_15',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,12,30)',
          end: 'dyndatetime(y,m,3,13,30)',
        },
        {
          id: 'mbsc_16',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,16,30)',
          end: 'dyndatetime(y,m,3,17,45)',
        },
        {
          id: 'mbsc_17',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,18,0)',
          end: 'dyndatetime(y,m,3,19,15)',
        },
        {
          id: 'mbsc_18',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,2,13,30)',
          end: 'dyndatetime(y,m,2,14,30)',
        },
        {
          id: 'mbsc_19',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,2,18,15)',
          end: 'dyndatetime(y,m,2,19,15)',
        },
        {
          id: 'mbsc_20',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,2,12,15)',
          end: 'dyndatetime(y,m,2,13,30)',
        },
        {
          id: 'mbsc_21',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,2,17,30)',
          end: 'dyndatetime(y,m,2,18,30)',
        },
        {
          id: 'mbsc_22',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,2,12,15)',
          end: 'dyndatetime(y,m,2,13,15)',
        },
        {
          id: 'mbsc_23',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,2,15,30)',
          end: 'dyndatetime(y,m,2,16,30)',
        },
        {
          id: 'mbsc_29',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,7,11,30)',
          end: 'dyndatetime(y,m,7,12,30)',
        },
        {
          id: 'mbsc_30',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,7,18,0)',
          end: 'dyndatetime(y,m,7,19,0)',
        },
        {
          id: 'mbsc_31',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,7,15,15)',
          end: 'dyndatetime(y,m,7,16,15)',
        },
        {
          id: 'mbsc_33',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,7,9,30)',
          end: 'dyndatetime(y,m,7,10,30)',
        },
        {
          id: 'mbsc_34',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,7,10,45)',
          end: 'dyndatetime(y,m,7,11,45)',
        },
        {
          id: 'mbsc_35',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,7,15,0)',
          end: 'dyndatetime(y,m,7,16,0)',
        },
        {
          id: 'mbsc_36',
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y,m,7,17,15)',
          end: 'dyndatetime(y,m,7,18,15)',
        },
        {
          id: 'mbsc_37',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,8,11,45)',
          end: 'dyndatetime(y,m,8,12,45)',
        },
        {
          id: 'mbsc_38',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,8,17,0)',
          end: 'dyndatetime(y,m,8,18,0)',
        },
        {
          id: 'mbsc_39',
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,8,19,45)',
          end: 'dyndatetime(y,m,8,20,45)',
        },
        {
          id: 'mbsc_40',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,8,9,30)',
          end: 'dyndatetime(y,m,8,10,30)',
        },
        {
          id: 'mbsc_41',
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,8,11,45)',
          end: 'dyndatetime(y,m,8,12,45)',
        },
      ];

      var myView = {
        schedule: { type: 'week', allDay: false },
      };

      var calendar = $('#demo-desktop-week-view')
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

      function logEvents() {
        var events = calendar.getEvents().map((event) => {
          var startDate = new Date(event.start);
          var endDate = new Date(event.end);

          return {
            id: event.id,
            resource: event.resource,
            title: event.title,
            start: `dyndatetime(y,m,${startDate.getDate()},${startDate.getHours()},${startDate.getMinutes()})`,
            end: `dyndatetime(y,m,${endDate.getDate()},${endDate.getHours()},${endDate.getMinutes()})`,
            recurring: event.recurring ? event.recurring : undefined,
            type: event.type ? event.type : undefined,
            editable: event.editable !== undefined ? event.editable : undefined,
          };
        });

        console.log(JSON.stringify(events, null, 2));
      }
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
