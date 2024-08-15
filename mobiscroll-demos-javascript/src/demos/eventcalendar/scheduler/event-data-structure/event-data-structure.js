import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date();
    var calendar = mobiscroll.eventcalendar('#demo-event-data', {
      view: {
        schedule: { type: 'day' },
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

    document.getElementById('demo-event-data-add').addEventListener('click', function () {
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

      calendar.addEvent(newEvent);
      calendar.navigateToEvent(newEvent);

      mobiscroll.toast({
        message: 'Event added',
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex-col">
    <div class="mbsc-flex-none">
      <button mbsc-button id="demo-event-data-add" data-start-icon="plus">Add event to calendar</button>
    </div>
    <div id="demo-event-data" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}
  `,
};
