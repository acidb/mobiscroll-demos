import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // custom icon with icon, why dont align well out of box?
    // custom positioning, need? too much css workaround

    $(function () {
      var defaultButtons = $('#demo-popup-btn-conf-default')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
        })
        .mobiscroll('getInst');

      var customButtons = $('#demo-popup-btn-conf-custom')
        .mobiscroll()
        .popup({
          // context,
          class: 'popup-btn-conf-custom',
          display: 'center',
          buttons: [
            'set',
            {
              text: 'Custom',
              icon: 'checkmark',
              handler: function () {
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

      var customPositioning = $('#demo-popup-btn-conf-positioned')
        .mobiscroll()
        .popup({
          // context,
          class: 'popup-btn-conf-positioned',
          display: 'center',
          buttons: [
            'set',
            {
              text: 'Close',
              handler: 'cancel',
            },
          ],
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
<div id="demo-popup-btn-conf-default" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi there!</h3>
      <p class="md-text-center">This is the default with no buttons.</p>
  </div>
</div>
<div id="demo-popup-btn-conf-custom" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with a custom button and predefined buttons.</p>
  </div>
</div>
<div id="demo-popup-btn-conf-positioned" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with custom positioned buttons!</p>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.popup-btn-conf-custom .mbsc-icon-button {
  padding: 0;
  height: 2.5em;
}

.popup-btn-conf-custom .mbsc-material .mbsc-icon-button{
  width: 7em;
	border-radius: .285715em;
}

/* 
.popup-btn-conf-positioned .mbsc-popup-buttons {
  order: -1;
  border-bottom: 1px solid; 
}
*/
  `,
};
