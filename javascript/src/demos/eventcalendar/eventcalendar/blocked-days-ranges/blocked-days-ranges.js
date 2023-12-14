import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
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
      onEventCreateFailed: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: "Can't create event on this date",
        });
      },
      onEventUpdateFailed: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
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
  markup: `
<div id="demo-blocked-days-ranges"></div>
  `,
};
