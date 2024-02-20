import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-work-week-hours', {
      dragToCreate: true,
      dragToMove: true,
      invalid: [
        {
          start: '12:00',
          end: '13:00',
          title: 'Lunch break',
          type: 'lunch',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
        },
      ],
      view: {
        schedule: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          startTime: '09:00',
          endTime: '18:00',
        },
      },
      onEventCreateFailed: function (args) {
        if (args.invalid.type == 'lunch') {
          mobiscroll.toast({
            message: "Can't create this task on lunch break.",
          });
        }
      },
      onEventUpdateFailed: function (args) {
        if (args.invalid.type == 'lunch') {
          mobiscroll.toast({
            message: "Can't schedule this task on lunch break.",
          });
        }
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
<div id="demo-work-week-hours"></div>
  `,
};
