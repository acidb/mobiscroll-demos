import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var bottomPopup = mobiscroll.popup('#demo-popup-bottom', {
      display: 'bottom',
      buttons: ['ok', 'cancel'],
    });

    var topPopup = mobiscroll.popup('#demo-popup-top', {
      display: 'top',
      buttons: ['ok', 'cancel'],
    });

    var centerPopup = mobiscroll.popup('#demo-popup-center', {
      display: 'center',
      buttons: ['ok', 'cancel'],
      touchUi: false,
    });

    var anchoredPopup = mobiscroll.popup('#demo-popup-anchored', {
      display: 'anchored',
      anchor: document.getElementById('demo-popup-anchored-btn'),
      buttons: ['ok', 'cancel'],
    });

    document.getElementById('demo-popup-bottom-btn').addEventListener('click', function () {
      bottomPopup.open();
    });

    document.getElementById('demo-popup-top-btn').addEventListener('click', function () {
      topPopup.open();
    });

    document.getElementById('demo-popup-center-btn').addEventListener('click', function () {
      centerPopup.open();
    });

    document.getElementById('demo-popup-anchored-btn').addEventListener('click', function () {
      anchoredPopup.open();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-form-group-title">Try different display modes</div>
  <div class="mbsc-form-group mbsc-button-group-block">
    <button mbsc-button id="demo-popup-anchored-btn">Try anhored display mode</button>
    <button mbsc-button id="demo-popup-top-btn">Try top display mode</button>
    <button mbsc-button id="demo-popup-center-btn">Try center display mode</button>
    <button mbsc-button id="demo-popup-bottom-btn">Try bottom display mode</button>
  </div>
</div>
<div style="display: none;"> 
  <div id="demo-popup-bottom">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-top">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-center">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-anchored">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
