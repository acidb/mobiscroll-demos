import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var calendar = $('#demo-timeline-time-grid')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
            },
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
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo-timeline-time-grid"></div>
  `,
  css: `
/*<hidden>*/

.demo-timeline-time-grid,
.demo-timeline-time-grid .mbsc-page {
    height: 100%;
}

/*</hidden>*/
  `,
};
