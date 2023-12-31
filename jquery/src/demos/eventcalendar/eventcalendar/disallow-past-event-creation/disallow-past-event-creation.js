import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var today = new Date();

      var inst = $('#demo-disallow-past-event-creation')
        .mobiscroll()
        .eventcalendar({
          // context,
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
                //<hidden>
                // theme,//</hidden>
                // context,
                message: "Can't create event in the past",
              });
            }
          },
          onEventUpdateFailed: function (event) {
            if (!event.oldEventOccurrence) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
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
                //<hidden>
                // theme,//</hidden>
                // context,
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
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
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
    });
  },
  markup: `
<div id="demo-disallow-past-event-creation" class="md-disallow-past-event-creation"></div>
  `,
  css: `
.md-disallow-past-event-creation .mbsc-readonly-event {
    opacity: .6;
}
  `,
};
