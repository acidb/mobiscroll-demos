import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

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
            timeline: { type: 'day' },
          },
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#ff0101',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#01adff',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#ff4600',
            },
          ],
          onPageLoading: function (event, inst) {
            var year = event.firstDay.getFullYear(),
              month = event.firstDay.getMonth(),
              day = event.firstDay.getDate();

            $.getJSON(
              'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day + '&callback=?',
              function (data) {
                var events = [];

                for (var i = 0; i < data.length; i++) {
                  var event = data[i];
                  events.push({
                    start: event.start,
                    end: event.end,
                    title: event.title,
                    resource: event.resource,
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
<div id="demo"></div>
  `,
};
