import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date();

    mobiscroll.eventcalendar('#demo-drag-drop-events', {
      view: {
        calendar: { labels: true },
      },
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      dragTimeStep: 15,
      data: [
        {
          title: 'Fixed event',
          start: new Date(now.getFullYear(), now.getMonth(), 18),
          end: new Date(now.getFullYear(), now.getMonth(), 19),
          color: '#9e9e9e',
          editable: false,
        },
        {
          title: 'Drag me',
          start: new Date(now.getFullYear(), now.getMonth(), 3),
          end: new Date(now.getFullYear(), now.getMonth(), 5),
          color: '#cc9900',
        },
        {
          title: 'Resize me',
          start: new Date(now.getFullYear(), now.getMonth(), 24),
          end: new Date(now.getFullYear(), now.getMonth(), 29),
          color: '#ca4747',
        },
        {
          title: 'Move me around',
          start: new Date(now.getFullYear(), now.getMonth(), 11),
          end: new Date(now.getFullYear(), now.getMonth(), 14),
          color: '#339966',
        },
      ],
    });
  },
  markup: `
<div id="demo-drag-drop-events"></div>
  `,
};
