import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var popup = $('#demo-popup-hooks')
        .mobiscroll()
        .popup({
          display: 'anchored',
          anchor: $('#popup-events-show-btn')[0],
          showOverlay: false,
          buttons: ['ok', 'cancel'],
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
          onPosition: function (event, inst) {
            // Logic for component positioning
          },
        })
        .mobiscroll('getInst');

      popup.open();

      $('#popup-events-show-btn').on('click', function () {
        popup.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="popup-events-show-btn">Show popup</button>
  </div>
</div>
<div id="demo-popup-hooks">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome on our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
};
