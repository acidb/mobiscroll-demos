import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-time-off-blocked-ranges', {
      view: {
        schedule: { type: 'week' },
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
          start: '12:00',
          end: '13:00',
          title: 'Lunch break',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
        },
        {
          start: '00:00',
          end: '08:00',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
        },
        {
          start: '17:00',
          end: '23:59',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
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
      'https://trial.mobiscroll.com/workday-events/',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-time-off-blocked-ranges"></div>
  `,
};
