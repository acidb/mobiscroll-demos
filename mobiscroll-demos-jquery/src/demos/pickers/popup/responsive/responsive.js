import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
      theme: 'ios',
    });

    $(function () {
      var popup = $('#demo-popup-responsive')
        .mobiscroll()
        .popup({
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
              anchor: $('#demo-popup-show-btn')[0],
            },
          },
        })
        .mobiscroll('getInst');

      popup.open();

      $('#demo-popup-show-btn').on('click', function () {
        popup.open();
        return false;
      });

      $('#demo-popup-subscribe-btn').on('click', function () {
        popup.close();
        mobiscroll.toast({
          message: 'Subscribed',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-show-btn">Show popup</button>
  </div>
</div>
<div id="demo-popup-responsive">
  <div class="mbsc-align-center">
    <img class="responsive-logo" src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h2>Stay with us!</h2>
    <p>Join our newsletter and be the first <br> to receive exciting updates and news!</p>
    <label>
      <input mbsc-input data-input-style="box" placeholder="Enter your email address" />
    </label>
    <label>
      Weekly
      <input mbsc-segmented type="radio" name="range" checked>
    </label>
    <label>
      Monthly
      <input mbsc-segmented type="radio" name="range">
    </label>
    <div class="mbsc-button-group-block">
      <button mbsc-button id="demo-popup-subscribe-btn">
        Subscribe
      </button>
    </div>
  </div>
</div>
  `,
};
