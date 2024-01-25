import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var cal = mobiscroll.eventcalendar('#demo', {
      view: {
        timeline: {
          type: 'day',
        },
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
        {
          id: 1,
          name: 'Resource A',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#ff0101',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#01adff',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#239a21',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#ff4600',
        },
      ],
    });

    document.getElementById('add-event').addEventListener('click', function () {
      var newEvent = {
        // base properties
        title: 'Product planning',
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,17)',
        resource: 4,
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
        //<hidden>
        // theme,//</hidden>
        // context,
        message: 'Event added',
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
