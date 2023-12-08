import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-group-by-resource-by-day', {
      view: {
        schedule: {
          type: 'week',
          allDay: false,
          startDay: 1,
          endDay: 5,
          startTime: '08:00',
          endTime: '17:00',
        },
      },
      resources: [
        {
          id: 1,
          name: 'Ryan',
          color: '#f7c4b4',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#c6f1c9',
        },
        {
          id: 3,
          name: 'John',
          color: '#e8d0ef',
        },
      ],
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/resource-events/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-group-by-resource-by-day"></div>
  `,
};
