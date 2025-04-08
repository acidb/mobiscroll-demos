import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var popup = mobiscroll.popup('#demo-theming-popup', {
      theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
      themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
      display: 'anchored',
      anchor: document.getElementById('demo-popup-open-btn'),
      buttons: ['ok', 'cancel'],
    });

    document.getElementById('demo-popup-open-btn').addEventListener('click', function () {
      popup.open();
      return false;
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-button-group-block">
  <button id="demo-popup-open-btn" mbsc-button>Open popup</button>
</div>
<div id="demo-theming-popup" style="display: none;">
   <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome to our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
