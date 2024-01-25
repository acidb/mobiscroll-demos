import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-event-popover')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            calendar: {
              count: true,
            },
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
<!--hidden-->
<div class="demo-inline demo-max-width-1000">
    <!--/hidden-->
    <div id="demo-event-popover"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
