import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });
    $(function () {
      var inst = $('#demo-work-week-hours')
        .mobiscroll()
        .eventcalendar({
          // context,
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
          onEventCreateFailed: function (event, inst) {
            if (event.invalid.type == 'lunch') {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: "Can't create this task on lunch break.",
              });
            }
          },
          onEventUpdateFailed: function (event, inst) {
            if (event.invalid.type == 'lunch') {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: "Can't schedule this task on lunch break.",
              });
            }
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/workday-events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
    <div id="demo-work-week-hours"></div>
    `,
  css: `
/*<hidden>*/

.demo-work-week-hours {
    height: 100%;
}

/*</hidden>*/
    `,
};
