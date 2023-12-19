import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
import { print as print } from '@mobiscroll/print';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-printing-the-view', {
      modules: [print],
      view: {
        agenda: { type: 'month' },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );

    document.getElementById('print-button').addEventListener('click', function () {
      inst.print();
    });
  },
  markup: `
<button id="print-button" mbsc-button>Print agenda</button>
<div id="demo-printing-the-view"></div>
  `,
};
