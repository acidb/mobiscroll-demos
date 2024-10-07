import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var agenda = mobiscroll.eventcalendar('#demo-custom-day-header', {
      cssClass: 'mds-custom-day-header',
      view: {
        agenda: {
          type: 'month',
          showEmptyDays: true,
        },
      },
      renderDay: function (day) {
        return (
          '<div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">' +
          '<div class="mbsc-flex-1-1">' +
          mobiscroll.formatDate('D MMM YYYY', day.date) +
          '</div>' +
          '<button class="mds-custom-day-header-btn" mbsc-button data-start-icon="plus" data-color="primary" data-variant="outline" data-date="' +
          mobiscroll.formatDate('YYYY-MM-DD', day.date) +
          '">Add event</button>' +
          '</div>'
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
.mds-custom-day-header .mbsc-event-day.mbsc-windows {
  padding: 8px 24px;
}

.mds-custom-day-header-btn.mbsc-button {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 12px;
  margin: 0;
}
  `,
};
