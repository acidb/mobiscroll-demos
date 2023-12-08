import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-events-labels')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: {
              labels: true,
            },
          },
          onEventClick: function (event, inst) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: event.event.title,
            });
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
<div id="demo-events-labels"></div>
  `,
};
