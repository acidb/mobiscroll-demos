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

      agenda = $('#demo-custom-day-header')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: true,
            },
          },
          renderDay: function (events, date) {
            return (
              '<div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">' +
              '<div class="mbsc-flex-1-1">' +
              mobiscroll.formatDate('D MMM YYYY', date) +
              '</div>' +
              '<button class="mds-custom-header-add" mbsc-button data-icon="plus" data-variant="outline" data-date="' +
              mobiscroll.formatDate('YYYY-MM-DD', date) +
              '"></button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-custom-day-header').on('click', '.mds-custom-header-add', function () {
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
  <div id="demo-custom-day-header"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
