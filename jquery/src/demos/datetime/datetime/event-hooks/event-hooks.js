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
          controls: ['date'],
          onCancel: function () {
            // Logic for cancel button click
          },
          onChange: function () {
            // Logic for value change
          },
          onClose: function () {
            // Your custom event handler goes here
          },
          onDestroy: function () {
            // Your custom event handler goes here
          },
          onInit: function () {
            // Logic running on component init
          },
          onOpen: function () {
            // Your custom event handler goes here
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
          onPosition: function () {
            // Logic for component positioning
          },
          onTempChange: function () {
            // Logic for temporary value change
          },
        });
    });
  },
  markup: `
<label>
    Date
    <input id="demo" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please select..." />
</label>
  `,
};
