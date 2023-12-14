import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['date'],
      onCancel: function (event, inst) {
        // Logic for cancel button click
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
  },
  markup: `
<label>
    Date
    <input id="demo" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please select..." />
</label>
  `,
};
