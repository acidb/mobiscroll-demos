import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-on-demand-api')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: {
              labels: 'month',
            },
          },
          onPageLoading: function (event, inst) {
            var year = event.firstDay.getFullYear();
            var month = event.firstDay.getMonth();

            $.getJSON(
              'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5' + '&callback=?',
              function (data) {
                var events = [];

                for (var i = 0; i < data.length; i++) {
                  events.push({
                    start: data[i].start,
                    end: data[i].end || '',
                    allDay: data[i].allDay,
                    title: data[i].title,
                    color: data[i].color,
                  });
                }

                inst.setEvents(events);

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
<div id="demo-on-demand-api"></div>
  `,
  css: `
/*<hidden>*/

.demo-load-events-on-demand {
    height: 100%;
}

/*</hidden>*/
  `,
};
