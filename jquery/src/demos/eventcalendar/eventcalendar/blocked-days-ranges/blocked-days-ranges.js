import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-blocked-days-ranges')
        .mobiscroll()
        .eventcalendar({
          // context,
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
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/work-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo-blocked-days-ranges"></div>
  `,
};
