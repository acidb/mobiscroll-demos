import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.eventcalendar('#demo-on-demand-api', {
      // locale,
      // theme,
      view: {
        agenda: {
          type: 'month',
        },
      },
      onPageLoading: function (event, inst) {
        var year = event.firstDay.getFullYear(),
          month = event.firstDay.getMonth();

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
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
