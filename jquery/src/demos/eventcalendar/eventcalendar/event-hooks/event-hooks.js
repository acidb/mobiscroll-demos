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
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          externalDrop: true,
          invalid: [
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA,SU',
              },
            },
          ],
          view: {
            calendar: { labels: true },
          },
          onCellClick: function (event, inst) {
            // Logic for handling cell clicks
          },
          onCellDoubleClick: function (event, inst) {
            // Logic for handling cell double clicks
          },
          onCellRightClick: function (event, inst) {
            // Logic for handling cell right clicks
          },
          onCellHoverIn: function (event, inst) {
            // Logic for handling cell hover in
          },
          onCellHoverOut: function (event, inst) {
            // Logic for handling cell hover out
          },
          onDestroy: function (event, inst) {
            // Logic for destroying the event calendar
          },
          onEventClick: function (event, inst) {
            // Logic for event click
          },
          onEventCreate: function (event, inst) {
            // Logic for event create
          },
          onEventCreated: function (event, inst) {
            // Logic for event created
          },
          onEventCreateFailed: function (event, inst) {
            // Logic for failed event create
          },
          onEventDelete: function (event, inst) {
            // Logic for event delete
          },
          onEventDeleted: function (event, inst) {
            // Logic for event deleted
          },
          onEventDoubleClick: function (event, inst) {
            // Logic for event double click
          },
          onEventDragStart: function (args, inst) {
            // Logic for event drag start
          },
          onEventDragEnd: function (args, inst) {
            // Logic for event drag end
          },
          onEventHoverIn: function (event, inst) {
            // Logic for event hover in
          },
          onEventHoverOut: function (event, inst) {
            // Logic for event hover out
          },
          onEventUpdate: function (event, inst) {
            // Logic for event update
          },
          onEventUpdated: function (event, inst) {
            // Logic for event updated
          },
          onEventUpdateFailed: function (event, inst) {
            // Logic for failed event update
          },
          onEventRightClick: function (event, inst) {
            // Logic for event right click
          },
          onInit: function (event, inst) {
            // Logic running on component init
          },
          onLabelClick: function (event, inst) {
            // Logic for label click
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
<div mbsc-draggable data-drag-data='{"title": "External drag 1", "color": "#ffdab8"}' class="event-hooks-draggable" style="background: #ffdab8;">
    <div class="draggable-title">External drag 1</div>
    <div class="draggable-text">Drag me to calendar</div>
</div>
<div mbsc-draggable data-drag-data='{"title": "External drag 2", "color": "#ddfcf7"}' class="event-hooks-draggable" style="background: #ddfcf7;">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
</div>
<div id="demo"></div>
  `,
  css: `
.event-hooks-draggable {
    padding: 10px 20px;
    display: inline-block;
    margin: 15px;
    border-radius: 8px;
    width: 210px;
}

.event-hooks-draggable .draggable-title {
    font-size: 16px;
    font-weight: 600;
}

.event-hooks-draggable .draggable-text {
    opacity: 0.7;
    line-height: 25px;
}

.event-hooks-draggable-1 {
    background: #ffdab8;
}

.event-hooks-draggable-2 {
    background: #ddfcf7;
}
  `,
};
