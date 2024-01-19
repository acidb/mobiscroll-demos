import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-rtl-right-to-left', {
      // drag,
      rtl: true,
      view: {
        timeline: { type: 'week' },
      },
      resources: [
        {
          id: 1,
          name: 'Ryan',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#ff4600',
        },
        {
          id: 3,
          name: 'John',
          color: '#ff0101',
        },
        {
          id: 4,
          name: 'Mark',
          color: '#239a21',
        },
        {
          id: 5,
          name: 'Sharon',
          color: '#8f1ed6',
        },
        {
          id: 6,
          name: 'Ashley',
          color: '#01adff',
        },
      ],
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-rtl-right-to-left"></div>
  `,
};
