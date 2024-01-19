import * as m from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
import { print } from '@mobiscroll/print';

var mobiscroll = m;
mobiscroll.print = print;

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-printing-the-view', {
      // drag,
      modules: [mobiscroll.print],
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
<button id="print-button" mbsc-button>Print calendar</button>
<div id="demo-printing-the-view"></div>
  `,
};
