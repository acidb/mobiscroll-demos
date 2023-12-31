import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          onCancel: function (event, inst) {
            // Logic for cancel button click
          },
          onCellClick: function (event, inst) {
            // Logic for event click
          },
          onCellHoverIn: function (event, inst) {
            // Logic for handling cell hover in
          },
          onCellHoverOut: function (event, inst) {
            // Logic for handling cell hover out
          },
          onChange: function (event, inst) {
            // Logic for value change
          },
          onClose: function (event, inst) {
            // Your custom event handler goes here
          },
          onDestroy: function (event, inst) {
            // Your custom event handler goes here
          },
          onInit: function (event, inst) {
            // Logic running on component init
          },
          onLabelClick: function (event, inst) {
            // Logic for label click
          },
          onOpen: function (event, inst) {
            // Your custom event handler goes here
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
          onPosition: function (event, inst) {
            // Logic for component positioning
          },
          onTempChange: function (event, inst) {
            // Logic for temporary value change
          },
        });
    });
  },
  markup: `
<label>
    Calendar
    <input id="demo" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please select..." />
</label>
  `,
};
