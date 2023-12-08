import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
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
          modules: [mobiscroll.print],
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
<button id="print-button" mbsc-button>Print calendar</button>
<div id="demo-printing-the-view"></div>
  `,
};
