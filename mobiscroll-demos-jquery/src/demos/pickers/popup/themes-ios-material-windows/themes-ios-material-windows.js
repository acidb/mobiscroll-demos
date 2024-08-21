import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
    });

    $(function () {
      var popup = $('#demo-theming-popup')
        .mobiscroll()
        .popup({
          theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
          themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
          display: 'anchored',
          anchor: $('#popup-themes-show-btn')[0],
          buttons: ['set', 'cancel'],
        })
        .mobiscroll('getInst');

      popup.open();

      $('#popup-themes-show-btn').on('click', function () {
        popup.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-button-group-block">
  <button class="static-form-color-elm" id="popup-themes-show-btn" mbsc-button>Show</button>
</div>
<div id="demo-theming-popup">
  <div class="mbsc-align-center mbsc-padding">
    <h3 class="md-text-center">Hi again!</h3>
    <p class="md-text-center">This is a popup with three custom buttons</p>
  </div>
</div>
  `,
};
