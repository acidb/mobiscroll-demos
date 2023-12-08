import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: {
              type: 'month',
            },
          },
          onDestroy: function (event, inst) {
            // Logic for destroying the event calendar
          },
          onEventClick: function (event, inst) {
            // Logic for event click
          },
          onEventDoubleClick: function (event, inst) {
            // Logic for event double click
          },
          onEventHoverIn: function (event, inst) {
            // Logic for event hover in
          },
          onEventHoverOut: function (event, inst) {
            // Logic for event hover out
          },
          onEventRightClick: function (event, inst) {
            // Logic for event right click
          },
          onInit: function (event, inst) {
            // Logic running on component init
          },
          onPageChange: function (event, inst) {
            // Your custom event handler goes here
          },
          onPageLoaded: function (event, inst) {
            // Use it to inject custom markup & attach custom listeners
          },
          onPageLoading: function (event, inst) {
            // Use it to load data on demand
          },
          onSelectedDateChange: function (event, inst) {
            // Use it to keep track of the selected date externally
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
