import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var noBtnPopup = mobiscroll.popup('#demo-popup-no-btn', {
      display: 'center',
    });

    var predefinedBtnPopup = mobiscroll.popup('#demo-popup-predefined-btn', {
      display: 'center',
      buttons: ['ok', 'cancel'],
    });

    var customBtnPopup = mobiscroll.popup('#demo-popup-custom-btn', {
      display: 'center',
      buttons: [
        {
          text: 'Custom',
          handler: function () {
            mobiscroll.toast({
              message: 'Custom button clicked',
            });
          },
        },
      ],
    });

    document.getElementById('demo-no-buttons-btn').addEventListener('click', function () {
      noBtnPopup.open();
    });

    document.getElementById('demo-predefined-btn').addEventListener('click', function () {
      predefinedBtnPopup.open();
    });

    document.getElementById('demo-custom-btn').addEventListener('click', function () {
      customBtnPopup.open();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-align-center">
  <div class="mbsc-note">Customize popup buttons depending on your context.</div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-no-buttons-btn">No Buttons</button>
    <button mbsc-button id="demo-predefined-btn">Predefined buttons</button>
    <button mbsc-button id="demo-custom-btn">Custom button</button>
  </div>
</div>
<div style="display: none;">
  <div id="demo-popup-no-btn">
    <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi there!</h3>
      <p class="md-text-center">This is the default with no buttons.</p>
    </div>
  </div>
  <div id="demo-popup-predefined-btn">
    <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with predefined buttons.</p>
    </div>
  </div>
  <div id="demo-popup-custom-btn">
    <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with a custom button.</p>
    </div>
  </div>
<div>
  `,
};