import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-colored', {
      view: {
        schedule: { type: 'week' },
      },
      colors: [
        {
          date: 'dyndatetime(y,m,d-2)',
          background: '#f3c3d480',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,14)',
          background: '#fde4c880',
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+2, 20)',
          background: '#d5f1ea80',
        },
        {
          start: 'dyndatetime(y,m,d+6,6)',
          end: 'dyndatetime(y,m,d+6,8)',
          background: '#d5eaf780',
        },
        {
          start: 'dyndatetime(y,m,d+10)',
          end: 'dyndatetime(y,m,d+13)',
          allDay: true,
          background: '#e7ffe280',
        },
        {
          start: 'dyndatetime(y,m,d+16,10)',
          end: 'dyndatetime(y,m,d+17,8)',
          background: '#fbedd080',
        },
        {
          start: '12:00',
          end: '13:00',
          background: '#ffdbdb80',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR',
          },
          title: 'Lunch',
        },
      ],
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-colored"></div>
  `,
};
