import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-colored')
        .mobiscroll()
        .eventcalendar({
          colors: [
            {
              start: 'dyndatetime(y,m,0)',
              end: 'dyndatetime(y,m,1)',
              background: '#fde4c880',
            },
            {
              start: 'dyndatetime(y,m,17)',
              end: 'dyndatetime(y,m,20)',
              background: '#d5f1ea80',
            },
            {
              date: 'dyndatetime(y,m,29)',
              background: '#ffdbdb80',
            },
            {
              date: 'dyndatetime(y,m+1,3)',
              background: '#fbedd080',
            },
            {
              date: 'dyndatetime(y,m+1,10)',
              background: '#fbedd080',
            },
            {
              background: '#d6e81e1a',
              recurring: {
                repeat: 'monthly',
                day: -1,
              },
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo-colored"></div>
  `,
};
