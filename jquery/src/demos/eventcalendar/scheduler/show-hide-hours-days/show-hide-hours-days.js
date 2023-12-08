import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-show-hide-hours-days')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '09:00',
              endTime: '18:00',
              timeCellStep: 30,
              timeLabelStep: 30,
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/workday-events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo-show-hide-hours-days"></div>
  `,
};
