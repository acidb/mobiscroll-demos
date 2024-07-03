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
      var agenda;

      agenda = $('#demo-show-empty-days')
        .mobiscroll()
        .eventcalendar({
          class: 'mds-empty-days-agenda',
          view: {
            agenda: {
              type: 'month',
            },
          },
        })
        .mobiscroll('getInst');

      // the "Show empty days" button and this logic where should be ?!
      $('#showEmptyDays').on('change', function () {
        agenda.setOptions({
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: $(this).prop('checked'),
            },
          },
        });
      });

      $.getJSON(
        'https://trial.mobiscroll.com/events-new/?vers=5&callback=?',
        function (events) {
          agenda.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
   <label>
    <input id="showEmptyDays" mbsc-switch data-label="Show empty days" type="checkbox" />
   </label>

<div id="demo-show-empty-days"></div>


`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
