import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // remove css important, refactor ids, class names
    // customPositioning buttons not appear

    $(function () {
      var defaultButtons = $('#default')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
        })
        .mobiscroll('getInst');

      var customButtons = $('#custom')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            'set',
            {
              text: 'Custom',
              icon: 'checkmark',
              cssClass: 'my-btn',
              handler: function (event) {
                mobiscroll.toast({
                  // context,
                  message: 'Custom button clicked!',
                });
              },
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      var customPositioning = $('#positioned')
        .mobiscroll()
        .popup({
          // context,
          display: 'bottom',
          buttons: ['set', 'cancel'],
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
        <button mbsc-button id="showCustom">Custom buttons</buttom>
            <button mbsc-button id="showCustomPos">Buttons positioning</buttom>
    </div>
</div>
</div>
<div id="default" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi there!</h3>
      <p class="md-text-center">This is the default with no buttons.</p>
  </div>
</div>
<div id="custom" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with a custom button and predefined buttons.</p>
  </div>
</div>
<div id="positioned" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with custom positioned buttons!</p>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-popup-button {
  line-height: 0 !important;
}
  `,
};
