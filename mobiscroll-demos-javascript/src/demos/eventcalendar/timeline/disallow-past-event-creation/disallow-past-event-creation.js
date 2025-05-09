import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date(new Date().setMinutes(59));
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

    var inst = mobiscroll.eventcalendar('#demo-disallow-past-event-creation', {
      view: { timeline: { type: 'month' } },
      invalid: [{ recurring: { repeat: 'daily', until: yesterday } }, { start: today, end: now }],
      resources: [
        { id: 1, name: 'Resource A', color: '#e20000' },
        { id: 2, name: 'Resource B', color: '#76e083' },
        { id: 3, name: 'Resource C', color: '#4981d6' },
        { id: 4, name: 'Resource D', color: '#e25dd2' },
        { id: 5, name: 'Resource E', color: '#1dab2f' },
        { id: 6, name: 'Resource F', color: '#d6d145' },
      ],
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      onEventCreateFailed: function (args) {
        if (!args.originEvent) {
          mobiscroll.toast({
            message: "Can't create event in the past",
          });
        }
      },
      onEventUpdateFailed: function (args) {
        if (!args.oldEventOccurrence) {
          mobiscroll.toast({
            message: "Can't move event in the past",
          });
        }
      },
      onEventCreate: function (args) {
        var oldEvent = args.originEvent;
        var start = oldEvent && oldEvent.start ? oldEvent.start : null;

        // Handle recurring events
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

        // Handle recurring events
        if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
          inst.updateEvent(oldEvent);
          return false;
        }
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      function (events) {
        for (var i = 0; i < events.length; ++i) {
          var event = events[i];
          // Convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;
          // Mark past events as fixed by setting the event.editable property to false
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
