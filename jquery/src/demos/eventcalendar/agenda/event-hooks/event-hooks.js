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
          onDestroy: function () {
            // Logic for destroying the event calendar
          },
          onEventClick: function () {
            // Logic for event click
          },
          onEventDoubleClick: function () {
            // Logic for event double click
          },
          onEventHoverIn: function () {
            // Logic for event hover in
          },
          onEventHoverOut: function () {
            // Logic for event hover out
          },
          onEventRightClick: function () {
            // Logic for event right click
          },
          onInit: function () {
            // Logic running on component init
          },
          onPageChange: function () {
            // Your custom event handler goes here
          },
          onPageLoaded: function () {
            // Use it to inject custom markup & attach custom listeners
          },
          onPageLoading: function () {
            // Use it to load data on demand
          },
          onSelectedDateChange: function () {
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
