import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var emptyPopup = $('#demo-popup-empty')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
        })
        .mobiscroll('getInst');

      var commonPopup = $('#demo-popup-common')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: ['ok', 'cancel'],
        })
        .mobiscroll('getInst');

      var customPopup = $('#demo-popup-custom')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Custom',
              handler: function () {
                mobiscroll.toast({
                  // context,
                  message: 'Custom button clicked',
                });
              },
            },
          ],
        })
        .mobiscroll('getInst');

      $('#showDefault').on('click', function () {
        emptyPopup.open();
        return false;
      });

      $('#showCommon').on('click', function () {
        commonPopup.open();
        return false;
      });

      $('#showCustom').on('click', function () {
        customPopup.open();
        return false;
      });
    });
  },
  markup: `
<div class="mbsc-align-center">
  <div class="mbsc-note">Customize popup buttons depending on your context.</div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="showDefault">Empty</button>
    <button mbsc-button id="showCommon">Common</button>
    <button mbsc-button id="showCustom">Custom</button>
  </div>
</div>
<div id="demo-popup-empty">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi there!</h3>
    <p class="md-text-center">This is the default with no buttons.</p>
  </div>
</div>
<div id="demo-popup-common">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi again!</h3>
    <p class="md-text-center">This is a popup with predefined buttons.</p>
  </div>
</div>
<div id="demo-popup-custom">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi again!</h3>
    <p class="md-text-center">This is a popup with a custom button.</p>
  </div>
</div>
  `,
};
