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

    // The popup has four built-in display modes that can be controlled through the display option:
    //      top - modal that slides down from the top
    //      bottom - modal that slides up from the bottom
    //      center - modal that shows up in the middle with a pop animation
    //      anchored - modal that shows up anchored to an input or any dom element

    // Use the touchUi option to switch between touch optimized mobile rendering and pointer optimized desktop rendering.
    // It can be dynamically switched with the help of the responsive option.

    // The defaults change on a theme to theme basis. The ios theme comes with bottom on mobile and anchored on
    // desktop while the material and windows themes have center on mobile and anchored on desktop.

    // Want to see how to set up responsiveness?  Check out the previous example →

    $(function () {
      var bottomDemo = $('#demo-bottom')
        .mobiscroll()
        .popup({
          display: 'bottom',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      var topDemo = $('#demo-top')
        .mobiscroll()
        .popup({
          display: 'top',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      var centerDemo = $('#demo-center')
        .mobiscroll()
        .popup({
          display: 'center',
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
          touchUi: false,
        })
        .mobiscroll('getInst');

      var bubbleDemo = $('#demo-anchored')
        .mobiscroll()
        .popup({
          display: 'anchored',
          anchor: $('#show-anchored')[0],
          buttons: [
            {
              text: 'Ok',
              handler: 'set',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      $('#show-bottom').click(function () {
        bottomDemo.open();
        return false;
      });

      $('#show-top').click(function () {
        topDemo.open();
        return false;
      });

      $('#show-center').click(function () {
        centerDemo.open();
        return false;
      });

      $('#show-anchored').click(function () {
        bubbleDemo.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `


  <div mbsc-form>
  <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Try different display modes</div>
      <div class="mbsc-form-group mbsc-btn-group-block">
      <button mbsc-button id="show-anchored">Try anhored display mode</button>
      <button mbsc-button id="show-top">Try top display mode</button>
      <button mbsc-button id="show-center">Try center display mode</button>
          <button mbsc-button id="show-bottom">Try bottom display mode</button>
      </div>
  </div>
</div>

<div id="demo-bottom" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>

<div id="demo-top" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>

<div id="demo-center" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>

<div id="demo-anchored" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome on our website!</h4>
      <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
