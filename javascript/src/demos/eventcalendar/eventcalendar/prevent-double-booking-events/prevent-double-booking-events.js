import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    function onEventFailed() {
      mobiscroll.toast({
        message: 'Make sure not to double book',
      });
    }

    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth();
    var d = now.getDate();

    mobiscroll.eventcalendar('#demo', {
      view: {
        calendar: { type: 'month', labels: 'all' },
      },
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      eventOverlap: false,
      exclusiveEndDates: true,
      data: [
        {
          start: new Date(y, m, d - 3),
          end: new Date(y, m, d - 1),
          title: 'Event 1',
        },
        {
          start: new Date(y, m, d),
          end: new Date(y, m, d + 2),
          title: 'Event 2 (no event overlap)',
          overlap: false,
        },
        {
          start: new Date(y, m, d + 3),
          end: new Date(y, m, d + 5),
          title: 'Event 3',
        },
        {
          start: new Date(y, m, d + 5),
          end: new Date(y, m, d + 7),
          title: 'Event 4 (no event overlap)',
          overlap: false,
        },
      ],
      onEventUpdateFailed: onEventFailed,
      onEventCreateFailed: onEventFailed,
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
