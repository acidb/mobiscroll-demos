import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.eventcalendar('#demo', {
      // locale,
      // theme,
      view: {
        calendar: {
          labels: true,
        },
      },
      onPageLoading: function (event, inst) {
        var year = event.month.getFullYear(),
          month = event.month.getMonth();

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
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
  },
  markup: `
<div id="demo"></div>
  `,
};
