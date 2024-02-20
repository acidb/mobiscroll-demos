import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var myResources = [
      {
        id: 1,
        name: 'Ryan',
        color: '#f7c4b4',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#c6f1c9',
      },
      {
        id: 3,
        name: 'John',
        color: '#e8d0ef',
      },
    ];

    var calendar = mobiscroll.eventcalendar('#demo-dynamic-filter', {
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      view: {
        schedule: {
          type: 'week',
          allDay: false,
          startDay: 1,
          endDay: 5,
          startTime: '08:00',
          endTime: '17:00',
        },
      },
      resources: myResources,
    });

    var checkboxList = document.querySelectorAll('.demo-shared-events-checkbox');

    checkboxList.forEach(function (elm) {
      elm.addEventListener('change', function () {
        var selected = {};

        for (var i = 0; i < checkboxList.length; i++) {
          var checkbox = checkboxList[i];
          selected[+checkbox.value] = checkbox.checked;
        }

        calendar.setOptions({
          resources: myResources.filter(function (r) {
            return selected[r.id];
          }),
        });
      });
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/resource-events-shared/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-event-calendar">
            <div id="demo-dynamic-filter"></div>
        </div>
        <div class="mbsc-col-sm-3">
            <div class="mbsc-form-group-title">Show available tasks</div>
            <label>
                Ryan
                <input value="1" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
            <label>
                Kate
                <input value="2" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
            <label>
                John
                <input value="3" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.dynamic-resources-calendar {
    border-right: 1px solid #ccc;
}
  `,
};
