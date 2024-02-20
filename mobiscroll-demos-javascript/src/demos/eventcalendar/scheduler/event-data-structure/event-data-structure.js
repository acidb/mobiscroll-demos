import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    var now = new Date();
    var cal = mobiscroll.eventcalendar('#demo', {
      // locale,
      // theme,
      // drag,
      view: {
        schedule: {
          type: 'day',
        },
      },
      data: [
        {
          start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
          end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
          title: 'General orientation',
          color: '#35bb5a',
          bufferBefore: 20,
          bufferAfter: 30,
        },
      ],
    });

    document.getElementById('add-event').addEventListener('click', function () {
      var newEvent = {
        // base properties
        title: 'Product planning',
        color: '#56ca70',
        start: new Date(2018, 11, 21, 13),
        end: new Date(2018, 11, 21, 14),
        bufferBefore: 20,
        bufferAfter: 30,
        // add any property you'd like
        busy: true,
        description: 'Weekly meeting with team',
        location: 'Office',
      };

      cal.addEvent(newEvent);
      cal.navigateToEvent(newEvent);

      mobiscroll.toast({
        message: 'Event added',
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div class="mbsc-button-group-block">
    <button mbsc-button id="add-event">Add event to calendar</button>
</div>
  `,
};
