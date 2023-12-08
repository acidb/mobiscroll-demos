import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var now = new Date(),
        cal = $('#demo')
          .mobiscroll()
          .eventcalendar({
            view: {
              agenda: {
                type: 'month',
              },
            },
            data: [
              {
                start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
                end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
                title: 'General orientation',
                color: '#35bb5a',
              },
            ],
          })
          .mobiscroll('getInst');

      $('#add-event').on('click', function () {
        var newEvent = {
          // base properties
          title: 'Product planning',
          color: '#56ca70',
          start: new Date(2018, 11, 21, 13),
          end: new Date(2018, 11, 21, 14),
          // add any property you'd like
          busy: true,
          description: 'Weekly meeting with team',
          location: 'Office',
        };

        cal.addEvent(newEvent);
        cal.navigateToEvent(newEvent);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Event added',
        });
      });
    });
  },
  markup: `
<div id="demo"></div>
<div class="mbsc-button-group-block">
    <button mbsc-button id="add-event">Add event to calendar</button>
</div>
  `,
};
