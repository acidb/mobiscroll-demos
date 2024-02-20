import * as m from '@mobiscroll/javascript';
import { print } from '@mobiscroll/print';

var mobiscroll = Object.assign({}, m);
mobiscroll.print = print;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<button id="print-button" mbsc-button>Print calendar</button>
<div id="demo-printing-the-view"></div>
  `,
};
