import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-display-multiple-days-weeks-months')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            schedule: {
              type: 'week',
              size: 2,
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
<div id="demo-display-multiple-days-weeks-months"></div>
  `,
};
