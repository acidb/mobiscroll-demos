import $ from 'jquery';
import * as m from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import { print } from '@mobiscroll/print';

var mobiscroll = m;
mobiscroll.print = print;

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-printing-the-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          modules: [mobiscroll.print],
          view: {
            schedule: { type: 'week' },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );

      $('#print-button').on('click', function () {
        inst.print();
      });
    });
  },
  markup: `
<button id="print-button" mbsc-button>Print scheduler</button>
<div id="demo-printing-the-view"></div>
  `,
};
