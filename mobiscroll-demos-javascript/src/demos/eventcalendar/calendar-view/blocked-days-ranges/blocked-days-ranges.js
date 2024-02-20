import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-blocked-days-ranges', {
      view: {
        calendar: {
          labels: true,
        },
      },
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      invalidateEvent: 'strict',
      invalid: [
        {
          recurring: {
            repeat: 'weekly',
            weekDays: 'SA,SU',
          },
        },
        {
          allDay: true,
          start: 'dyndatetime(y,m,19)',
          end: 'dyndatetime(y,m,20)',
        },
        {
          allDay: true,
          start: 'dyndatetime(y,m,26)',
          end: 'dyndatetime(y,m,27)',
        },
      ],
      onEventCreateFailed: function () {
        mobiscroll.toast({
          message: "Can't create event on this date",
        });
      },
      onEventUpdateFailed: function () {
        mobiscroll.toast({
          message: "Can't add event on this date",
        });
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/work-events/',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-blocked-days-ranges"></div>
  `,
};
