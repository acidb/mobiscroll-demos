import * as mobiscroll from '@mobiscroll/jquery';
// import { formatDate } from '@mobiscroll/jquery/dist/src/core/util/datetime.js';
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
          class: 'mds-custom-day-header-agenda',
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: true,
            },
          },
          renderDay: function (events, date) {
            return (
              '<div class="mbsc-flex mds-custom-header-cont">' +
              '<div class="mbsc-flex mbsc-align-items-center">' +
              mobiscroll.formatDate('D MMM YYYY', date) +
              '</div>' +
              '<button class="mds-custom-day-header-add" mbsc-button data-icon="plus" data-variant="outline" data-date="' +
              mobiscroll.formatDate('YYYY-MM-DD', date) +
              '"></button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-show-empty-days').on('click', '.mds-custom-day-header-add', function () {
        var newEvent = {
          title: 'Event',
          start: new Date($(this).data('date')),
          allDay: true,
        };

        agenda.addEvent(newEvent);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Event added',
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
  <div id="demo-show-empty-days"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
    .mds-custom-header-cont {
      width: 100%;
      justify-content: space-between;
    }
    .mds-custom-day-header-add {
      height: 25px;
      width: 25px;
      margin: 0 !important;
    }
  `,
};
