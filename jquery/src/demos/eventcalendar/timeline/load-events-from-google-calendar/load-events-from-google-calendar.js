import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var googleCalendarSync = mobiscroll.googleCalendarSync;
      var calendars = [
        { id: 'en.french#holiday@group.v.calendar.google.com', name: 'Holidays in France', color: '#D81B60' },
        { id: 'en.german#holiday@group.v.calendar.google.com', name: 'Holidays in Germany', color: '#F4511E' },
        { id: 'en.hungarian#holiday@group.v.calendar.google.com', name: 'Holidays in Hungary', color: '#AD1457' },
        { id: 'en.indian#holiday@group.v.calendar.google.com', name: 'Holidays in India', color: '#E4C441' },
        { id: 'en.romanian#holiday@group.v.calendar.google.com', name: 'Holidays in Romania', color: '#0B8043' },
        { id: 'en.uk#holiday@group.v.calendar.google.com', name: 'Holidays in United Kingdom', color: '#3F51B5' },
        { id: 'en.usa#holiday@group.v.calendar.google.com', name: 'Holidays in United States', color: '#8E24AA' },
      ];
      var calendarIds = calendars.map(function (cal) {
        return cal.id;
      });
      var firstDay, lastDay, apiLoaded;

      //<hidden>
      if (window.gapi) {
        apiLoaded = true;
      } else {
        //</hidden>

        googleCalendarSync.init({
          apiKey: '<YOUR_GOOGLE_API_KEY>',
          onInit: loadEvents,
        });
        //<hidden>
      } //</hidden>

      function loadEvents() {
        apiLoaded = true;
        googleCalendarSync
          .getEvents(calendarIds, firstDay, lastDay)
          .then(function (resp) {
            resp.forEach(function (event) {
              event.resource = event.googleCalendarId;
            });
            calInst.setEvents(resp);
          })
          .catch(onError);
      }

      function onError(resp) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: resp.error ? resp.error : resp.result.error.message,
        });
      }

      var calInst = $('#demo-google-cal')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
              eventList: true,
            },
          },
          dragToCreate: false,
          clickToCreate: false,
          exclusiveEndDates: true,
          resources: calendars,
          onPageLoading: function (args, inst) {
            var start = args.firstDay;
            var end = args.lastDay;

            // Calculate dates
            // (pre-load events for previous and next pages as well)
            firstDay = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate());
            lastDay = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate());

            if (apiLoaded) {
              loadEvents();
            }
          },
        })
        .mobiscroll('getInst');
    });
  },
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-1100">
    <!--/hidden-->
    <div id="demo-google-cal" class="md-google-calendar"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  css: `
.md-google-calendar .mbsc-timeline-day {
    min-width: 150px;
}
  `,
};
