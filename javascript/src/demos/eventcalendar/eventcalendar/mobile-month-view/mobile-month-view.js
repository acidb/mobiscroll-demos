import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    var event = {
      // id: 1,
      start: new Date(2023, 7, 18, 8, 0),
      end: new Date(2023, 7, 18, 17, 0),
      title: 'My First Event',
    };

    var inst = mobiscroll.eventcalendar('#demo-mobile-month-view', {
      // locale,
      // theme,
      view: {
        calendar: { type: 'month' },
      },
      data: [event],
      onEventClick: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: event.event.title,
        });
      },
    });

    document.getElementById('test').addEventListener('click', () => {
      event.title = 'Here';
      event.id = 2;

      inst.updateEvent(event);
      console.log('here', inst.getEvents());
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        // inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<button id="test">Here</button>
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
