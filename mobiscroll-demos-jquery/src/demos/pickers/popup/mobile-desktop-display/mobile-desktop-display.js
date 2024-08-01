import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // refactor ids, class names
    // change the popup content from "showing the control"

    $(function () {
      var bottomPopup = $('#popup-bottom')
        .mobiscroll()
        .popup({
          // context,
          display: 'bottom',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      var topPopup = $('#popup-top')
        .mobiscroll()
        .popup({
          // context,
          display: 'top',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      var centerPopup = $('#popup-center')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
          touchUi: false,
        })
        .mobiscroll('getInst');

      var anchoredPopup = $('#popup-anchored')
        .mobiscroll()
        .popup({
          // context,
          display: 'anchored',
          anchor: $('#show-anchored')[0],
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      $('#show-bottom').on('click', function () {
        bottomPopup.open();
        return false;
      });

      $('#show-top').on('click', function () {
        topPopup.open();
        return false;
      });

      $('#show-center').on('click', function () {
        centerPopup.open();
        return false;
      });

      $('#show-anchored').on('click', function () {
        anchoredPopup.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-form>
  <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Try different display modes</div>
      <div class="mbsc-form-group mbsc-button-group-block">
      <button mbsc-button id="show-anchored">Try anhored display mode</button>
      <button mbsc-button id="show-top">Try top display mode</button>
      <button mbsc-button id="show-center">Try center display mode</button>
          <button mbsc-button id="show-bottom">Try bottom display mode</button>
      </div>
  </div>
</div>
<div id="popup-bottom" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="popup-top" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="popup-center" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="popup-anchored" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
