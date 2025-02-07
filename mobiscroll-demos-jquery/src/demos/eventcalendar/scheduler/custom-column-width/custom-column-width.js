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
      var myCustomClass = 'my-col-width-small';
      var myResources = [
        {
          id: 1,
          name: 'Barry',
          color: '#328e39',
        },
        {
          id: 2,
          name: 'Hortense',
          color: '#00aabb',
        },
        {
          id: 3,
          name: 'Carl',
          color: '#ea72c0',
        },
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
          cssClass: myCustomClass,
        })
        .mobiscroll('getInst');

      $('#toggle-resources').on('change', function () {
        inst.setOptions({ resources: this.checked ? myResources : [] });
      });

      $('input[name="group1"]').on('change', function () {
        inst.setOptions({ cssClass: $(this).val() });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-segmented-group>
  <label>
      <input type="radio" mbsc-segmented name="group1" value="my-col-width-small" checked>
      50px
  </label>
  <label>
      <input type="radio" mbsc-segmented name="group1" value="my-col-width-medium">
      100px
  </label>
  <label>
      <input type="radio" mbsc-segmented name="group1" value="my-col-width-large">
      150px
  </label>
</div>
<label>
    <input id="toggle-resources" type="checkbox" mbsc-switch data-label="Resources" checked/>
</label>
<div id="demo-desktop-week-view"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.my-col-width-small .mbsc-schedule-col-width {
  width: 50px;
} 
.my-col-width-medium .mbsc-schedule-col-width {
  width: 100px;
} 
.my-col-width-large .mbsc-schedule-col-width {
  width: 150px;
} 
      `,
};
