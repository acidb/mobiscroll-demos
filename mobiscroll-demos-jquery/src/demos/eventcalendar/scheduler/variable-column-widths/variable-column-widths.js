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
        { id: 1, name: 'Adam', color: '#328e39', icon1: 'office', icon2: 'bubble', icon3: 'unlocked', cssClass: 'mds-var-column-large' },
        { id: 2, name: 'Hannah', color: '#00aabb', icon1: 'office', icon2: 'bubble', cssClass: 'mds-var-column-medium' },
        { id: 3, name: 'Charlie', color: '#ea72c0', icon1: 'office', icon2: 'bubble', cssClass: 'mds-var-column-medium' },
        { id: 4, name: 'Ethan', color: '#ff5733', icon1: 'office', cssClass: 'mds-var-column-small' },
      ];

      var myView = {
        schedule: { type: 'week', size: 5, allDay: false },
      };

      var calendar = $('#demo-variable-column-widths')
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
              '<div class="mds-var-col-res-icons">' +
              (resource.icon1 ? '<button mbsc-button data-start-icon="' + resource.icon1 + '"></button>' : '') +
              (resource.icon2 ? '<button mbsc-button data-start-icon="' + resource.icon2 + '"></button>' : '') +
              (resource.icon3 ? '<button mbsc-button data-start-icon="' + resource.icon3 + '"></button>' : '') +
              '</div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/resource-events-shared/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
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
  gap: 5px;
}

.mds-var-column-small {
  width: 70px;
}

.mds-var-column-medium {
  width: 120px;
}

.mds-var-column-large {
  width: 180px;
}
  `,
};
