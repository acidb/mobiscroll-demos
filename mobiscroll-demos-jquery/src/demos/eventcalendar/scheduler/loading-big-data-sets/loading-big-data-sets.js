import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      var resourceNr = 10;
      var eventsNr = 10000;
      var myResources = [];
      var myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

      for (var i = 1; i <= resourceNr; i++) {
        myResources.push({ name: 'Resource ' + i, id: i });
      }

      $('#demo-big-data')
        .mobiscroll()
        .eventcalendar({
          // drag,
          resources: myResources,
          view: {
            scheduler: {
              type: 'month',
              timeCellStep: 15,
              timeLabelStep: 15,
            },
          },
          groupBy: 'date',
          eventOverlap: false,
          onPageLoading: function (args, inst) {
            setTimeout(function () {
              var myEvents = [];
              var year = args.firstDay.getFullYear();
              // Generate random events
              for (var i = 0; i < eventsNr; i++) {
                var day = getRandomInt(1, 31);
                var resource = getRandomInt(1, resourceNr + 1);
                var month = getRandomInt(0, 12);
                var color = getRandomInt(0, myEventColors.length);
                var startHour = getRandomInt(0, 23);
                var startMinute = getRandomInt(0, 60);
                var start = new Date(year, month, day, startHour, startMinute);
                var minDurationMs = 30 * 60 * 1000; // 30 minutes
                var maxDurationMs = 2 * 60 * 60 * 1000; // 2 hours
                var durationMs = getRandomInt(minDurationMs, maxDurationMs);
                var end = new Date(start.getTime() + durationMs);
                if (end.getDate() === start.getDate()) {
                  myEvents.push({
                    color: myEventColors[color],
                    end: end,
                    resource: resource,
                    start: start,
                    title: 'Event ' + i,
                  });
                }
              }
              inst.setEvents(myEvents);
            });
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-big-data"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.demo-loading-big-data-sets {
    height: 100%;
}
  `,
};
