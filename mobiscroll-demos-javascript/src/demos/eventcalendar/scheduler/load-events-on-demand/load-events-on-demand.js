import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.eventcalendar('#demo', {
      // locale,
      // theme,
      // drag,
      view: {
        schedule: { type: 'day' },
      },
      onPageLoading: function (event, inst) {
        var year = event.firstDay.getFullYear();
        var month = event.firstDay.getMonth();
        var day = event.firstDay.getDate();

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
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
              message: 'New events loaded',
            });
          },
          'jsonp',
        );
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
