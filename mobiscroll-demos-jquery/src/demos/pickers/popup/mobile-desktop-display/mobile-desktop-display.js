import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // change the popup content

    $(function () {
      var bottomPopup = $('#demo-popup-display-bottom')
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

      var topPopup = $('#demo-popup-display-top')
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

      var centerPopup = $('#demo-popup-display-center')
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

      var anchoredPopup = $('#demo-popup-display-anchored')
        .mobiscroll()
        .popup({
          // context,
          display: 'anchored',
          anchor: $('#demo-popup-display-anchored-btn')[0],
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      $('#demo-popup-display-bottom-btn').on('click', function () {
        bottomPopup.open();
        return false;
      });

      $('#demo-popup-display-top-btn').on('click', function () {
        topPopup.open();
        return false;
      });

      $('#demo-popup-display-center-btn').on('click', function () {
        centerPopup.open();
        return false;
      });

      $('#demo-popup-display-anchored-btn').on('click', function () {
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
      <button mbsc-button id="demo-popup-display-anchored-btn">Try anhored display mode</button>
      <button mbsc-button id="demo-popup-display-top-btn">Try top display mode</button>
      <button mbsc-button id="demo-popup-display-center-btn">Try center display mode</button>
      <button mbsc-button id="demo-popup-display-bottom-btn">Try bottom display mode</button>
    </div>
  </div>
</div>
<div id="demo-popup-display-bottom">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome on our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="demo-popup-display-top">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome on our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="demo-popup-display-center">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome on our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
<div id="demo-popup-display-anchored">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome on our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
};
