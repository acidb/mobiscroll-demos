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
      var popup = $('#demo-popup')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          showOverlay: false,
        })
        .mobiscroll('getInst');

      $('#demo-popup-open').on('click', function () {
        popup.open();
      });
      $('#demo-popup-close').on('click', function () {
        // this will be a static demo, otherwise no sense
        popup.close();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-align-center">
  <div class="mbsc-note">Use the Open and Close buttons to interact with the popup</div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-open">Open popup</button>
    <button mbsc-button id="demo-popup-close">Close popup</button>
  </div>
</div>

<div style="display: none;">
  <div id="demo-popup">
    <div class="mbsc-align-center">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
        <h4>Welcome on our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </div>
  </div>
</div>
  `,
};
