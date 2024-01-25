import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var today = new Date();

    var inst = mobiscroll.eventcalendar('#demo-disallow-past-event-creation', {
      view: {
        calendar: {
          labels: true,
        },
      },
      invalid: [
        {
          recurring: {
            repeat: 'daily',
            until: today,
          },
        },
      ],
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      onEventCreateFailed: function (event) {
        if (!event.originEvent) {
          mobiscroll.toast({
            message: "Can't create event in the past",
          });
        }
      },
      onEventUpdateFailed: function (event) {
        if (!event.oldEventOccurrence) {
          mobiscroll.toast({
            message: "Can't move event in the past",
          });
        }
      },
      onEventCreate: function (args) {
        var oldEvent = args.originEvent;
        var start = oldEvent && oldEvent.start ? oldEvent.start : null;

        // handle recurring events
        if (start && start < today) {
          inst.updateEvent(oldEvent);
          mobiscroll.toast({
            message: "Can't move past event",
          });
          return false;
        }
      },
      onEventUpdate: function (args) {
        var oldEvent = args.oldEvent;
        var start = oldEvent && oldEvent.start ? oldEvent.start : null;
        var oldEventOccurrence = args.oldEventOccurrence;
        var occurrenceStart = oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null;

        // handle recurring events
        if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
          inst.updateEvent(oldEvent);
          return false;
        }
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        for (var i = 0; i < events.length; ++i) {
          var event = events[i];
          // convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;
          // mark past events as fixed by setting the event.editable property to false
          event.editable = event.start && today < event.start;
        }
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-disallow-past-event-creation" class="md-disallow-past-event-creation"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-disallow-past-event-creation .mbsc-readonly-event {
    opacity: .6;
}
  `,
};
