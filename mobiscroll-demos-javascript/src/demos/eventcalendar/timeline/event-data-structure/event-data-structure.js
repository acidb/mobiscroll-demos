import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-event-data', {
      view: {
        timeline: { type: 'day' },
      },
      data: [
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'General orientation',
          resource: 2,
          bufferBefore: 20,
          bufferAfter: 30,
        },
      ],
      resources: [
        { id: 1, name: 'Resource A', color: '#fdf500' },
        { id: 2, name: 'Resource B', color: '#ff0101' },
        { id: 3, name: 'Resource C', color: '#01adff' },
        { id: 4, name: 'Resource D', color: '#239a21' },
        { id: 5, name: 'Resource E', color: '#ff4600' },
      ],
    });

    document.getElementById('demo-event-data-add').addEventListener('click', function () {
      var newEvent = {
        // Base properties
        title: 'Product planning',
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,17)',
        resource: 4,
        bufferBefore: 20,
        bufferAfter: 30,
        // Add any property you'd like
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
