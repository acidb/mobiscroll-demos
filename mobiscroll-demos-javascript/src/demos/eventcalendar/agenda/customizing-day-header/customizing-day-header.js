import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var agenda = mobiscroll.eventcalendar('#demo-custom-day-header', {
      view: {
        agenda: {
          type: 'month',
          showEmptyDays: true,
        },
      },
      renderDay: function (events, date) {
        return (
          '<div class="mbsc-flex-1-1">' +
          mobiscroll.formatDate('D MMM YYYY', date) +
          '</div>' +
          '<button class="mds-custom-day-header-btn" mbsc-button data-icon="plus" data-variant="outline" data-date="' +
          mobiscroll.formatDate('YYYY-MM-DD', date) +
          '">Add event</button>'
        );
      },
    });

    document.getElementById('demo-custom-day-header').addEventListener('click', function (e) {
      var target = e.target.closest('.mds-custom-day-header-btn');
      if (target) {
        var newEvent = {
          title: 'Event',
          start: new Date(target.getAttribute('data-date')),
          allDay: true,
        };

        agenda.addEvent(newEvent);

        mobiscroll.toast({
          message: 'Event added',
        });
      }
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        agenda.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-day-header"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-custom-day-header-btn.mbsc-button.mbsc-icon-button {
  height: 22px;
  width: auto;
  margin: 0;
}
  `,
};
