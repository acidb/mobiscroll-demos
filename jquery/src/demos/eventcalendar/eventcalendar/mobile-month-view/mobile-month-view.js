import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      const myEvent = {
        title: 'test',
        start: new Date(2023, 8, 3),
        end: new Date(2023, 8, 5),
      };

      var inst = $('#demo-mobile-month-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: { type: 'month', labels: true },
          },
          dragToCreate: true,
          onEventClick: function (event, inst) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: event.event.title,
            });
          },
          onEventUpdate: (args) => {
            console.log('onEventUpdate', args);
          },
          onEventCreate: (args) => {
            console.log('onEventCreate', args);
          },
        })
        .mobiscroll('getInst');

      $('#test').click(() => {
        console.log('click');
        myEvent.end = new Date(2023, 8, 4);
        // inst.updateEvent(myEvent)
        inst.addEvent(myEvent);
      });

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents([...events /*, myEvent*/]);
        },
        'jsonp',
      );
    });
  },
  markup: `
<button id="test">Test</button>
<div id="demo-mobile-month-view"></div>
  `,
  css: `
/*<hidden>*/

.demo-mobile-month-view {
    height: 100%;
}

/*</hidden>*/
  `,
};
