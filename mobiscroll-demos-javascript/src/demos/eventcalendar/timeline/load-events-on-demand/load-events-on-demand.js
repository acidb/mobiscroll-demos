import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.eventcalendar('#demo', {
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
        var year = event.firstDay.getFullYear();
        var month = event.firstDay.getMonth();
        var day = event.firstDay.getDate();

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
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
