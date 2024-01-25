import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: {
              labels: true,
            },
          },
          onPageLoading: function (event, inst) {
            var year = event.month.getFullYear();
            var month = event.month.getMonth();

            $.getJSON(
              'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5' + '&callback=?',
              function (data) {
                inst.setEvents(data);

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'New events loaded',
                });
              },
              'jsonp',
            );
          },
        });
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
