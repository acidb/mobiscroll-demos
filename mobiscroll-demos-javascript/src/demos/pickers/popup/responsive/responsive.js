import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var popup = mobiscroll.popup('#demo-popup-responsive', {
      responsive: {
        xsmall: {
          display: 'bottom',
        },
        small: {
          display: 'center',
        },
        custom: {
          // Custom breakpoint
          breakpoint: 800,
          display: 'anchored',
          anchor: document.getElementById('demo-popup-show-btn'),
        },
      },
    });

    document.getElementById('demo-popup-show-btn').addEventListener('click', function () {
      popup.open();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-show-btn">Open popup</button>
  </div>
</div>
<div id="demo-popup-responsive" style="display: none;">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome to our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
`,
};
