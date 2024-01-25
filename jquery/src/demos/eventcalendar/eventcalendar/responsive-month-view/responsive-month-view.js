import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-responsive-month-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          responsive: {
            xsmall: {
              view: {
                calendar: {
                  type: 'week',
                },
                agenda: {
                  type: 'day',
                },
              },
            },
            custom: {
              // Custom breakpoint
              breakpoint: 600,
              view: {
                calendar: {
                  labels: true,
                },
              },
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo-responsive-month-view"></div>
  `,
};
