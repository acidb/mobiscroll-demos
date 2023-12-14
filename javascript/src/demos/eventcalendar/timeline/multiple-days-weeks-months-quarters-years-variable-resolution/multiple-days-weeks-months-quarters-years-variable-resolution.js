import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-display-multiple-days-weeks-months', {
      view: {
        timeline: {
          type: 'week',
          size: 2,
        },
      },
      resources: [
        {
          id: 1,
          name: 'Flatiron Room',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'The Capital City',
          color: '#ff0101',
        },
        {
          id: 3,
          name: 'Heroes Square',
          color: '#01adff',
        },
        {
          id: 4,
          name: 'Thunderdome',
          color: '#ff4600',
        },
        {
          id: 5,
          name: 'King’s Landing',
          color: '#239a21',
        },
        {
          id: 6,
          name: 'Gathering Field',
          color: '#8f1ed6',
        },
      ],
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-display-multiple-days-weeks-months"></div>
  `,
};
