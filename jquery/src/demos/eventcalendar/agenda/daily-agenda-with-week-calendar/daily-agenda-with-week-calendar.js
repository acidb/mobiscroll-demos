import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-daily-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'day' },
          },
          onEventClick: function (event) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: event.event.title,
            });
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        inst.setEvents(events);
      });
    });
  },
  markup: `
<div id="demo-daily-events"></div>
  `,
};
