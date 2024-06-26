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
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: true,
            },
          },
          renderDay: function (events, date) {
            return (
              '<div class="mbsc-flex">' +
              '<div class="mbsc-flex mbsc-align-items-center">' +
              date +
              '</div>' +
              '<div>' +
              '<button class="add" mbsc-button data-icon="plus" data-date=' +
              date +
              '></button>' +
              '</div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-show-empty-days').on('click', '.add', function () {
        var currentYear = new Date().getFullYear();
        var currentMonth = new Date().getMonth();
        var day = $(this).data('date');
        console.log('day:', day);

        var newEvent = {
          title: 'Event',
          start: new Date(currentYear, currentMonth, day),
          allDay: true,
        };

        agenda.addEvent(newEvent);
        // agenda.navigateToEvent(newEvent);

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

  `,
};
