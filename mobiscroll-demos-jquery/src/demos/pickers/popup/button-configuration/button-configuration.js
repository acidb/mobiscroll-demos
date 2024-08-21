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
      var defaultButtons = $('#demo-popup-buttons-default')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
        })
        .mobiscroll('getInst');

      var customButtons = $('#demo-popup-buttons-custom')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            'ok',
            {
              text: 'Custom',
              handler: function () {
                mobiscroll.toast({
                  // context,
                  message: 'Custom button clicked!',
                });
              },
            },
            'close',
          ],
        })
        .mobiscroll('getInst');

      // not clear yet how this will be
      var customPositioning = $('#demo-popup-buttons-positioned')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: ['ok', 'close'],
        })
        .mobiscroll('getInst');

      $('#showDefault').on('click', function () {
        defaultButtons.open();
        return false;
      });
      $('#showCustom').on('click', function () {
        customButtons.open();
        return false;
      });
      $('#showCustomPos').on('click', function () {
        customPositioning.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-form>
<div class="mbsc-align-center">
  <div class="mbsc-note mbsc-note-primary">Customize popup buttons depending on your context.</div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="showDefault">Default</button>
    <button mbsc-button id="showCustom">Custom button</buttom>
    <button mbsc-button id="showCustomPos">Button positioning</buttom>
  </div>
</div>
</div>
<div id="demo-popup-buttons-default">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi there!</h3>
    <p class="md-text-center">This is the default with no buttons.</p>
  </div>
</div>
<div id="demo-popup-buttons-custom">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi again!</h3>
    <p class="md-text-center">This is a popup with a custom button and predefined buttons.</p>
  </div>
</div>
<div id="demo-popup-buttons-positioned">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi again!</h3>
    <p class="md-text-center">This is a popup with custom positioned buttons!</p>
  </div>
</div>
  `,
};
