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
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,6,15,30)',
          end: 'dyndatetime(y,m,6,17,15)',
        },
        {
          id: 2,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,6,20,15)',
          end: 'dyndatetime(y,m,6,22,0)',
        },
        {
          id: 3,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,6,8,45)',
          end: 'dyndatetime(y,m,6,11,0)',
        },
        {
          id: 4,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,6,9,45)',
          end: 'dyndatetime(y,m,6,11,15)',
        },
        {
          id: 5,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,6,20,15)',
          end: 'dyndatetime(y,m,6,21,45)',
        },
        {
          id: 6,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,6,11,15)',
          end: 'dyndatetime(y,m,6,13,0)',
        },
        {
          id: 7,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,6,14,45)',
          end: 'dyndatetime(y,m,6,16,45)',
        },
        {
          id: 8,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,7,8,30)',
          end: 'dyndatetime(y,m,7,10,0)',
        },
        {
          id: 9,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,7,16,0)',
          end: 'dyndatetime(y,m,7,18,15)',
        },
        {
          id: 10,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,7,16,45)',
          end: 'dyndatetime(y,m,7,18,0)',
        },
        {
          id: 11,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,7,21,30)',
          end: 'dyndatetime(y,m,7,22,15)',
        },
        {
          id: 12,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,7,13,15)',
          end: 'dyndatetime(y,m,7,15,45)',
        },
        {
          id: 13,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,7,11,30)',
          end: 'dyndatetime(y,m,7,13,15)',
        },
        {
          id: 14,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,7,10,15)',
          end: 'dyndatetime(y,m,7,11,0)',
        },
        {
          id: 15,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,5,20,30)',
          end: 'dyndatetime(y,m,5,23,15)',
        },
        {
          id: 16,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,5,10,15)',
          end: 'dyndatetime(y,m,5,12,0)',
        },
        {
          id: 17,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,5,21,0)',
          end: 'dyndatetime(y,m,5,22,45)',
        },
        {
          id: 18,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,5,13,30)',
          end: 'dyndatetime(y,m,5,15,0)',
        },
        {
          id: 19,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,5,10,30)',
          end: 'dyndatetime(y,m,5,11,30)',
        },
        {
          id: 20,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,5,13,30)',
          end: 'dyndatetime(y,m,5,15,15)',
        },
        {
          id: 21,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,5,8,30)',
          end: 'dyndatetime(y,m,5,10,0)',
        },
        {
          id: 22,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,4,10,0)',
          end: 'dyndatetime(y,m,4,11,15)',
        },
        {
          id: 23,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,4,20,30)',
          end: 'dyndatetime(y,m,4,23,0)',
        },
        {
          id: 24,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,4,19,30)',
          end: 'dyndatetime(y,m,4,20,45)',
        },
        {
          id: 25,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,4,15,0)',
          end: 'dyndatetime(y,m,4,17,30)',
        },
        {
          id: 26,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,4,13,0)',
          end: 'dyndatetime(y,m,4,15,0)',
        },
        {
          id: 27,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,8,45)',
          end: 'dyndatetime(y,m,4,10,45)',
        },
        {
          id: 28,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,4,14,45)',
          end: 'dyndatetime(y,m,4,16,15)',
        },
        {
          id: 29,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,4,12,0)',
          end: 'dyndatetime(y,m,4,14,30)',
        },
        {
          id: 30,
          resource: 4,
          title: 'New event',
          start: 'dyndatetime(y,m,3,12,30)',
          end: 'dyndatetime(y,m,3,15,0)',
        },
        {
          id: 31,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,3,10,30)',
          end: 'dyndatetime(y,m,3,12,0)',
        },
        {
          id: 32,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y,m,3,15,30)',
          end: 'dyndatetime(y,m,3,17,30)',
        },
        {
          id: 33,
          resource: 2,
          title: 'New event',
          start: 'dyndatetime(y,m,3,12,15)',
          end: 'dyndatetime(y,m,3,14,30)',
        },
        {
          id: 34,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,8,30)',
          end: 'dyndatetime(y,m,3,10,30)',
        },
        {
          id: 35,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y,m,3,15,15)',
          end: 'dyndatetime(y,m,3,17,30)',
        },
      ];

      var myResources = [
        {
          id: 1,
          name: 'Adam Johnson',
          color: '#328e39',
          role: 'developer',
          inOffice: true,
          tasksCount: 2,
          available: false,
          cssClass: 'mds-var-col-large',
        },
        {
          id: 2,
          name: 'Hannah Williams',
          color: '#00aabb',
          role: 'designer',
          inOffice: false,
          tasksCount: 3,
          available: false,
          cssClass: 'mds-var-col-medium',
        },
        {
          id: 3,
          name: 'Charlie Smith',
          color: '#ea72c0',
          role: 'developer',
          inOffice: true,
          tasksCount: 7,
          available: true,
          cssClass: 'mds-var-col-medium',
        },
        {
          id: 4,
          name: 'Ethan Roberts',
          color: '#ff5733',
          role: 'support',
          inOffice: false,
          tasksCount: 2,
          available: true,
          cssClass: 'mds-var-col-small',
        },
      ];

      var myView = {
        schedule: { type: 'week', startDay: 1, endDay: 5, startTime: '08:00', endTime: '19:00', allDay: false },
      };

      $('#demo-variable-column-widths')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          data: myEvents,
          // dragToCreate: true,
          // dragToMove: true,
          // dragToResize: true,
          groupBy: 'date',
          resources: myResources,
          renderResource: function (resource) {
            var iconsHtml = '';
            // todo, images, svg version
            if (resource.inOffice)
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/building-icon.png" alt="In Office" />';
            if (resource.role === 'developer')
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/cmd-terminal-icon.png" alt="Developer" />';
            if (resource.role === 'designer')
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/web-design-brush-icon.png" alt="Designer" />';
            if (resource.role === 'support')
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/support-icon.png" alt="Support" />';
            if (resource.tasksCount > 0)
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/thirteen-number-round-icon.png" alt="Tasks" />';
            if (!resource.available)
              iconsHtml +=
                '<img class="mds-var-col-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/abort-icon.png" alt="Available" />';

            return (
              '<div>' +
              '<div class="mds-var-col-resource-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-var-col-res-icons">' +
              iconsHtml +
              '</div>' +
              '</div>'
            );
          },
          view: myView,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-variable-column-widths"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-var-col-res-icons {
  display: flex;
  justify-content: space-evenly;
}

.mds-var-col-icon {
  width: 20px;
  height: 20px;
}

.mds-var-col-resource-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 8px;
}

.mds-var-col-small {
  width: 70px;
}

.mds-var-col-medium {
  width: 110px;
}

.mds-var-col-large {
  width: 150px;
}
  `,
};
