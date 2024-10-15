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
      onClose: function (args) {
        // Logic running on popup close
        console.log('onClose', args);
      },
      onDestroy: function (args) {
        // Logic running on component destroy
        console.log('onDestroy', args);
      },
      onInit: function (args) {
        // Logic running on component init
        console.log('onInit', args);
      },
      onOpen: function (args) {
        // Logic running on popup open
        console.log('onOpen', args);
      },
      onPosition: function (args) {
        // Logic for component positioning
        console.log('onPosition', args);
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
