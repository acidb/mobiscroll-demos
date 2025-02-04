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
      var myResources = [
        { id: 1, name: 'Adam', color: '#328e39', icon1: 'office', icon2: 'bubble', icon3: 'unlocked', cssClass: 'large' },
        { id: 2, name: 'Bella', color: '#00aabb', icon1: 'office', icon2: 'bubble', cssClass: 'medium' },
        { id: 3, name: 'Charlie', color: '#ea72c0', icon1: 'office', icon2: 'bubble', cssClass: 'medium' },
        { id: 4, name: 'Diana', color: '#ff5733', icon1: 'office', cssClass: 'small' },
        { id: 5, name: 'Ethan', color: '#33ff57', icon1: 'office', icon2: 'bubble', cssClass: 'medium' },
        { id: 6, name: 'Fiona', color: '#5733ff', icon1: 'office', icon2: 'bubble', icon3: 'unlocked', cssClass: 'large' },
        { id: 7, name: 'George', color: '#ff33aa', icon1: 'office', cssClass: 'small' },
        { id: 8, name: 'Hannah', color: '#33aaff', icon1: 'office', icon2: 'bubble', cssClass: 'medium' },
      ];

      var myView = {
        schedule: { type: 'week', size: 5, allDay: false },
      };

      var inst = $('#demo-desktop-week-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: myView,
          resources: myResources,
          groupBy: 'date',
          renderResource: function (resource) {
            return (
              '<div class="resource-template-content">' +
              '<div class="resource-name">' +
              resource.name +
              '</div>' +
              '<div class="resource-icons">' +
              (resource.icon1 ? '<button mbsc-button data-start-icon="' + resource.icon1 + '"></button>' : '') +
              (resource.icon2 ? '<button mbsc-button data-start-icon="' + resource.icon2 + '"></button>' : '') +
              (resource.icon3 ? '<button mbsc-button data-start-icon="' + resource.icon3 + '"></button>' : '') +
              '</div>' +
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
  .small {
    width: 70px;
  }
  .medium {
    width: 120px;
  }

  .large {
    width: 180px;
  }

.my-col-width-small .mbsc-schedule-col-width {
  width: 50px;
} 
.my-col-width-medium .mbsc-schedule-col-width {
  width: 100px;
} 
.my-col-width-large .mbsc-schedule-col-width {
  width: 150px;
} 
.resource-icons {
  display: flex;
  gap: 5px; /* Adjust spacing between icons */
}
  `,
};
