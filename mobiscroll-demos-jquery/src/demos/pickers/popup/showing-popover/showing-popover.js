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
      var subscribePopup = $('#demo-popup-subscribe')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Subscribe',
              handler: function () {
                subscribePopup.close();
                mobiscroll.toast({
                  // context,
                  message: 'Subscribed',
                });
              },
            },
          ],
        })
        .mobiscroll('getInst');

      var listPopup = $('#demo-popup-list')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Ok',
              handler: 'cancel',
            },
          ],
          onClose: function () {
            $('#demo-popup-input').val($('input.mds-popup-radio-option:checked').val());
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-show').on('click', function () {
        subscribePopup.open();
      });
      $('#demo-popup-input').on('click', function () {
        listPopup.open();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-align-center">
  <div class="mbsc-note">Use the popup with or without return value.</div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-form-group-title">Without return value</div>
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-show">Open popup</button>
  </div>
</div>
<div class="mbsc-form-group">
  <div class="mbsc-form-group-title">With return value</div>
  <label>
    <input mbsc-input id="demo-popup-input" data-label="Update" placeholder="Please Select..." readonly />
  </label>
</div>

<div style="display: none;">
  <div id="demo-popup-subscribe">
    <div class="mbsc-align-center">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
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
    </div>
  </div>

  <div id="demo-popup-list">
    <div class="mbsc-form-group-inset">
      <p>Some updates are available for you. <br> When would you like to install them?</p>
    </div>
    <div class="mbsc-form-group-inset">
      <label>
        <input class="mds-popup-radio-option" mbsc-radio type="radio" name="update" value="Right now" checked /> Right now
      </label>
      <label>
        <input class="mds-popup-radio-option" mbsc-radio type="radio" name="update" value="Later on today" /> Later on today
      </label>
      <label>
        <input class="mds-popup-radio-option" mbsc-radio type="radio" name="update" value="Remind me tomorrow" /> Remind me tomorrow
      </label>
    </div>
  </div>
</div>
  `,
};
