import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
      themeVariant: 'light',
    });

    // DESCRIPTION V1

    $(function () {
      var noButtons = $('#no-button')
        .mobiscroll()
        .popup({
          display: 'center',
          buttons: [],
        })
        .mobiscroll('getInst');

      var defaultButtons = $('#default')
        .mobiscroll()
        .popup({
          display: 'center',
        })
        .mobiscroll('getInst');

      var customButtons = $('#custom')
        .mobiscroll()
        .popup({
          display: 'center',
          buttons: [
            'set',
            {
              text: 'Custom',
              icon: 'checkmark',
              handler: function () {
                customButtons.hide();
                mobiscroll.toast({
                  message: ' Custom button clicked',
                });
              },
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      $('#showNoButton').click(function () {
        noButtons.open();
        return false;
      });

      $('#showDefault').click(function () {
        defaultButtons.open();
        return false;
      });

      $('#showCustom').click(function () {
        customButtons.open();
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
        <div class="mbsc-btn-group-block">
            <button mbsc-button id="showNoButton">No button</button>
            <button mbsc-button id="showDefault">Default</button>
            <button mbsc-button id="showCustom">Custom buttons</buttom>
        </div>
    </div>
    </div>

    <div id="no-button" class="mbsc-cloak">
    <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi!</h3>
        <p class="md-text-center">This is a popup with no buttons</p>
    </div>
    </div>

    <div id="default" class="mbsc-cloak">
    <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi there!</h3>
        <p class="md-text-center">This is a popup with default button</p>
    </div>
    </div>

    <div id="custom" class="mbsc-cloak">
    <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi again!</h3>
        <p class="md-text-center">This is a popup with three custom buttons</p>
    </div>
    </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
