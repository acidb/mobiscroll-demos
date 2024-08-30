import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var popup = mobiscroll.popup('#demo-popup-hooks', {
      display: 'anchored',
      anchor: document.getElementById('demo-popup-open-btn'),
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
    });

    document.getElementById('demo-popup-open-btn').addEventListener('click', function () {
      popup.open();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-open-btn">Open popup</button>
  </div>
</div>
<div id="demo-popup-hooks" style="display:none;">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome to our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
